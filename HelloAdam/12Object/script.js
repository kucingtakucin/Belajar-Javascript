/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

mahasiswa1 = {
    nama : "Adam Arthur Faizal",
    NIM : "M3119001",
    kelas : "Ti A",
    angkatan : 2019,
    alamat : {
     jalan : "Jl Rinjani E1/31",
     perumahan : "Josroyo Indah",
     desa : "Jaten"
    }
};

function buatObjectMhs(nama, NIM, kelas, angkatan, jalan, perumahan, desa) {
    mahasiswaa = {};
    mahasiswaa.nama = nama;
    mahasiswaa.kelas = kelas;
    mahasiswaa.angkatan = angkatan;
    // mahasiswaa.alamat.jalan = jalan;
    // mahasiswaa.alamat.perumahan = perumahan;
    // mahasiswaa.alamat.desa = desa;
    return mahasiswaa;
}

mahasiswa2 = buatObjectMhs("Mbah Putih", "M3119000", "Ti A", 2019);

function Mahasiswa(Nama, NIM, Kelas, Angkatan) {
    this.Nama = Nama;
    this.NIM = NIM;
    this.Kelas = Kelas;
    this.Angkatan = Angkatan;
}

mahasiswa3 = new Mahasiswa("Otong", "M3119000", "Ti A", 2019);