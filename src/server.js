require("dotenv").config();

const Hapi = require("@hapi/hapi");
const ClientError = require("./exceptions/ClientError");

// albums
const albums = require("./api/albums");
const AlbumsService = require("./services/postgres/AlbumsService");
const AlbumsValidator = require("./validator/albums");

const init = async () => {
  const albumsService = new AlbumsService();

  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // Registrasi Plugin
  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
    },
  });

  server.ext("onPreResponse", (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: "fail",
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response instanceof Error) {
      const { isServer } = response;
      if (isServer) {
        console.error(response);
        const newResponse = h.response({
          status: "error",
          message: "terjadi kegagalan pada server kami",
        });
        newResponse.code(500);
        return newResponse;
      }
    }

    return h.continue;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
