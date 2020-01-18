/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

console.log("Hello World");
alert("Hello World");

var konfirmasi = true, nama;
while (konfirmasi === true) {
    nama = prompt("Masukkan nama kamu : ");
    alert("Nama kamu adalah " + nama);

    konfirmasi = confirm("Mau input lagi?");
}