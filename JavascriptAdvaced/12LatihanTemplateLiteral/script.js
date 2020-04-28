/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// 1. HTML Fragments
const Mahasiswa = {
    nama: `Adam Arthur Faizal`,
    nim: `M3119001`,
    umur: 17,
    angkatan: 2019
}

const elemen = `<div class="mahasiswa">
    <h1>${Mahasiswa.nama}</h1>
    <h2 class="nim">${Mahasiswa.nim}</h2>
    <h3 class="umur">${Mahasiswa.umur}</h3>
</div>`;

// 2. Looping
const  Mahasiswa2 = [
    {
        nama: `Adam Arthur Faizal`,
        nim: `M3119001`,
        kelas: `TiA`,
        umur: 17,
        angkatan: 2019
    },
    {
        nama: `Mbah Putih Mulyosugito`,
        nim: `M3119000`,
        kelas: `TiA`,
        umur: 170,
        angkatan: 1019
    }
];

const elemen2 = `
    <div class="mahasiswa2">
        ${Mahasiswa2.map(m => `
            <ul>
                <li>${m.nama}</li>    
                <li>${m.nim}</li>    
                <li>${m.kelas}</li>    
                <li>${m.umur}</li>    
                <li>${m.angkatan}</li>    
            </ul>   
        `).join('')}
    </div>
`;

document.body.innerHTML = elemen;
document.body.innerHTML += elemen2;