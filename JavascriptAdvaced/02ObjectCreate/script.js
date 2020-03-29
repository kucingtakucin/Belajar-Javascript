/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// Function Declaration
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!`);
    },
    main: function (jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain!`);
    },
    tidur: function (jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, Selamat tidur!`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    return mahasiswa;
}

let Adam = Mahasiswa('Adam Arthur Faizal', 20);