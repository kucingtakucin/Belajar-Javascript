/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     let prototype = {
//         makan: function (porsi) {
//             this.energi += porsi;
//             console.log(`Halo ${this.nama}, Selamat makan!`)
//         },
//         main: function (jam) {
//             this.energi -= jam;
//             console.log(`Halo ${this.nama}, Selamat bermain!`)
//         },
//         tidur: function (jam) {
//             this.energi += jam * 2;
//             console.log(`Halo ${this.nama}, Selamat tidur!`)
//         }
//     };
// }

class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
}

let Adam = new Mahasiswa('Adam Arthur Faizal', 20);
