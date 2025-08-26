const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Data dummy (contoh)
const dataDesa = {
  nama: "Desa Munjul",
  kecamatan: "Majalengka",
  visi: "Mewujudkan Desa yang Maju, Sejahtera, dan Berbudaya",
  misi: [
    "Meningkatkan kualitas pendidikan",
    "Mengembangkan potensi ekonomi desa",
    "Memperkuat gotong royong masyarakat"
  ]
};

// Endpoint API
app.get("/api/data", (req, res) => {
  res.json(dataDesa);
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
const express = require("express");
const cors = require("cors"); // supaya bisa diakses dari frontend
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simpan data UMKM di memori (sementara)
let dataUMKM = [];

// Endpoint GET data desa (sudah ada)
app.get("/api/data", (req, res) => {
  res.json(dataDesa);
});

// Endpoint POST daftar UMKM
app.post("/api/umkm", (req, res) => {
  const newUMKM = req.body;
  dataUMKM.push(newUMKM);
  res.json({ message: "UMKM berhasil didaftarkan!", data: newUMKM });
});

// Endpoint GET daftar UMKM
app.get("/api/umkm", (req, res) => {
  res.json(dataUMKM);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
// Simpan data UMKM (sementara di array)
let daftarUMKM = [];

app.post("/api/umkm", (req, res) => {
  const { namaUsaha, pemilik, alamat } = req.body;
  const newUMKM = { namaUsaha, pemilik, alamat };
  daftarUMKM.push(newUMKM);
  res.json(newUMKM);
});

app.get("/api/umkm", (req, res) => {
  res.json(daftarUMKM);
});
