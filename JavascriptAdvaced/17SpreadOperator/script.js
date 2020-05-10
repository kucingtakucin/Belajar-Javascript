/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

/* Spread Operator */
// Memecah iterables menjadi single element
const Mahasiswa = ['Adam', 'Arthur', 'Faizal'];
console.log(...Mahasiswa);

// Menggabungkan 2 Array
const Dosen = ['Mbah', 'Putih', 'Mulyosugito'];
const Orang = [...Mahasiswa, 'A', 'B', 'C',...Dosen];
const Orang2 = Mahasiswa.concat(Dosen);
console.log(Orang + Orang2);

// Meng-copy Array
const Mahasiswa2 = [...Mahasiswa];
Mahasiswa2[0] = 'AAF';
console.log(Mahasiswa2);

const li = document.getElementById('nama');
const liChild = li.children;
const liHasil = [...liChild].map(m => m.textContent);
console.log(liHasil);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);
nama.innerHTML = huruf;
