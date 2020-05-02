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

// Conditionals
const lagu = {
    judul: 'Heavy',
    penyanyi: 'Linkin Park',
    feat: 'Kiiara'
}

const elemen3 = `
    <div class="lagu">
        <ul>
            <li>${lagu.penyanyi}</li>
            <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
        </ul>
    </div>
`;

// Nested
const Mahasiswa3 = {
    nama: 'Adam Arthur Faizal',
    semester: 2,
    mata_kuliah: [
        'Basis Data', 'OOP', 'Struktur Data', 'Desain Web', 'Desain Grafis'
    ]
}

function cetakKuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const elemen4 = `<div>
    <h2>${Mahasiswa3.nama}</h2>
    <span class="semester">Semester : ${Mahasiswa3.semester}</span>
    <h4>Mata Kuliah : </h4>
    ${cetakKuliah(Mahasiswa3.mata_kuliah)}
</div>`

document.body.innerHTML = elemen;
document.body.innerHTML += elemen2;
document.body.innerHTML += elemen3;
document.body.innerHTML += elemen4;