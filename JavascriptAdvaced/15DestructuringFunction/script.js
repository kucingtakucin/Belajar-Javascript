/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// Destructuring Return Value
function kalkulasi(a, b) {
    return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

function kalkulasi2(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    };
}

const [tambah, kurang, kali, bagi] = kalkulasi2(2, 3);
console.log(tambah);
console.log(kurang);
console.log(kali);
console.log(bagi);

// Destructuring Arguments
const Mahasiswa = {
    nama: 'Adam Arthur Faizal',
    umur: 17,
    email: `adam.faizal.af6@student.uns.ac.id`,
    nilai: {
        tugas: 90,
        uts: 80,
        uas: 85
    }
};

function cetakMahasiswa({nama, umur, email, nilai: {tugas, uts, uas}}) {
    return `Halo, nama saya ${nama}, dan umur saya ${umur} tahun
    email saya adalah ${email}, nilai uas saya ${uas}`;
}

console.log(cetakMahasiswa(Mahasiswa));