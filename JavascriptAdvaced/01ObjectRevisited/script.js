/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
// Cara untuk membuat object pada Javascript
// 1. Object Literal
let Mahasiswa = {
    nama: 'Adam Arthur Faizal',
    energi: 10,
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!`);
    }
};

let Mahasiswa2 = {
    nama: 'Mbah Putih Mulyosugito',
    energi: 20,
    makan: function(){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!`)
    }
};

// 2. Function Declaration
function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!`)
    };
    mahasiswa.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain!`)
    };
    return mahasiswa;
}

let aaa = Mahasiswa('aaa', 20);
let bbb = Mahasiswa('bbb', 20);

// Constructor
function Mahasiswaa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, Selamat makan!`)
    };
    this.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, Selamat bermain!`)
    }
}

let adam = new Mahasiswaa('Adam Arthur Faizal', 20);