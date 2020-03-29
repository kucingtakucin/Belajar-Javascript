/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

let Mahasiswa = ['Adam', 'Arthur', 'MbahPutih'];

const getNama = Mahasiswa.map(nama => ({
    nama: nama,
    length: nama.length
}));

