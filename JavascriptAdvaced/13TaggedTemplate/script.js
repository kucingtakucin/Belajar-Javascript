/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
// Tagged Templates
const nama = 'Adam Arthur Faizal';
const umur = 17;

function coba(kalimat, ...values) {
    let hasil = '';
    kalimat.forEach((kata, indeks) => {
        hasil += `${kata}${values[indeks] || ''}`;
    });
}

function coba2(kalimat, ...values) {
    kalimat.reduce((hasil, kata, indeks) => `${hasil}${kata}${values[indeks] || ''}`, '');
}

function highlight() {
    kalimat.reduce((hasil, kata, indeks) => `${hasil}${kata}<span>${values[indeks] || ''}</span>`, ' ');
}

const kalimat = coba`Halo, nama saya ${nama}, saya ${umur} tahun`;
const kalimat2 = coba2`Halo, nama saya ${nama}, saya ${umur} tahun`;
const kalimat3 = coba2`Halo, nama saya ${nama}, saya ${umur} tahun`;
console.log(kalimat);
console.log(kalimat2);
document.body.innerHTML = kalimat3;