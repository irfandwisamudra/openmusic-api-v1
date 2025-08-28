# OpenMusic API v1

Ini adalah proyek RESTful API untuk aplikasi OpenMusic, dibangun sebagai tugas _submission_ untuk kelas "Belajar Fundamental Back-End dengan JavaScript" di Dicoding. API ini berfungsi sebagai _back-end_ untuk aplikasi pemutar musik, menangani manajemen data album dan lagu.

Proyek ini dibangun menggunakan **Hapi Framework** dan terhubung ke database **PostgreSQL**, dengan menerapkan arsitektur berbasis _plugin_, validasi input, dan penanganan _error_ yang baik.

## Fitur

- [x] **Manajemen Album**: Menambah, melihat, mengubah, dan menghapus data album.
- [x] **Manajemen Lagu**: Menambah, melihat, mengubah, dan menghapus data lagu.
- [x] **Validasi Input**: Memastikan semua data yang masuk ke API memiliki skema yang valid menggunakan **Joi**.
- [x] **Penanganan Error Terpusat**: Menggunakan _lifecycle extension_ `onPreResponse` di Hapi untuk penanganan _error_ yang konsisten.
- [x] **(Opsional) Daftar Lagu dalam Album**: Menampilkan semua lagu yang dimiliki oleh sebuah album pada _endpoint_ detail album.
- [x] **(Opsional) Pencarian Lagu**: Memungkinkan pencarian lagu berdasarkan `title` dan `performer` melalui _query parameter_.

## Teknologi yang Digunakan

- **Node.js**: Lingkungan eksekusi JavaScript.
- **Hapi**: _Framework_ untuk membangun RESTful API.
- **PostgreSQL**: Sistem manajemen database relasional.
- **Joi**: Validasi skema data.
- **node-pg-migrate**: Alat untuk migrasi skema database.
- **dotenv**: Mengelola _environment variable_.
- **ESLint**: _Linter_ untuk menjaga konsistensi dan kualitas kode.

## Persiapan & Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

#### 1\. Prasyarat

Pastikan Anda sudah menginstal perangkat lunak berikut:

- Node.js (v18 atau lebih baru direkomendasikan)
- PostgreSQL

#### 2\. Kloning Repositori

```bash
git clone https://github.com/irfandwisamudra/openmusic-api-v1.git
cd openmusic-api-v1
```

#### 3\. Instalasi Dependensi

```bash
npm install
```

#### 4\. Konfigurasi Database

Buat database baru di PostgreSQL untuk proyek ini. Anda bisa menggunakan `psql` atau _tool_ GUI seperti pgAdmin.

```sql
CREATE DATABASE openmusic_v1;
```

#### 5\. Konfigurasi Environment Variable

Salin _file_ `.env.example` menjadi `.env`.

```bash
cp .env.example .env
```

Kemudian, buka _file_ `.env` dan sesuaikan nilainya dengan konfigurasi database lokal Anda (terutama `PGPASSWORD`).

#### 6\. Migrasi Database

Jalankan migrasi untuk membuat tabel `albums` dan `songs` di database Anda.

```bash
npm run migrate up
```

#### 7\. Menjalankan Server

Jalankan server dalam mode pengembangan (dengan _hot-reload_).

```bash
npm run start-dev
```

Server akan berjalan di `http://localhost:5000`.

## Dokumentasi API

Berikut adalah daftar _endpoint_ yang tersedia di API ini.

### Albums API

| Method   | Endpoint       | Deskripsi                                |
| :------- | :------------- | :--------------------------------------- |
| `POST`   | `/albums`      | Menambahkan album baru.                  |
| `GET`    | `/albums/{id}` | Mendapatkan detail album berdasarkan ID. |
| `PUT`    | `/albums/{id}` | Mengubah data album berdasarkan ID.      |
| `DELETE` | `/albums/{id}` | Menghapus album berdasarkan ID.          |

### Songs API

| Method   | Endpoint      | Deskripsi                                                 |
| :------- | :------------ | :-------------------------------------------------------- |
| `POST`   | `/songs`      | Menambahkan lagu baru.                                    |
| `GET`    | `/songs`      | Mendapatkan semua lagu (mendukung pencarian via _query_). |
| `GET`    | `/songs/{id}` | Mendapatkan detail lagu berdasarkan ID.                   |
| `PUT`    | `/songs/{id}` | Mengubah data lagu berdasarkan ID.                        |
| `DELETE` | `/songs/{id}` | Menghapus lagu berdasarkan ID.                            |

---

Dibuat oleh **Irfan Dwi Samudra**.

- [GitHub](https://github.com/irfandwisamudra)