/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

console.log("Hello World");
alert("Hello World");

var konfirmasi = true, nama;
while (konfirmasi === true) {
    nama = prompt("Masukkan nama kamu : ");
    alert("Nama kamu adalah " + nama);

    konfirmasi = confirm("Mau input lagi?");
}