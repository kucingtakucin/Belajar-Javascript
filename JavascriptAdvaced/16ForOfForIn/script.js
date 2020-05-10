/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// for...of
const Mahasiswa = ['Adam', 'Arthur', 'Faizal'];
Mahasiswa.forEach((m,i) => console.log(i + m));
for (const [i,m] of Mahasiswa.entries()) {
    console.log(i + m);
}
const nama = 'Adam Arthur Faizal';
for (const namaElement of nama) {
    console.log(namaElement);
}
const liNama = document.querySelectorAll('.nama');
liNama.forEach(n => console.log(n));
for (const liNamaElement of liNama) {
    console.log(liNamaElement.innerHTML);
}
function jumlahkanAngka() {
    let jumlah = 0;
    for (const argument of arguments) {
        jumlah += argument;
    }
}
jumlahkanAngka(1, 2, 3, 4, 5);

// for...in
const Mahasiswa = {
    nama: 'Adam Arthur Faizal',
    umur: 17,
    email: 'adam.faizal.af6@gmail.com'
}
for (const mahasiswaKey in Mahasiswa) {
    console.log(mahasiswaKey);
}
