/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

Nama = ["Adam", "Arthur", "Faizal"];
console.log(Nama);
console.log(Nama.join());
Nama.push("Mbah", "Putih");
console.log(Nama.join(', '));
Nama.splice(2, 1, "Mulyosugito");
console.log(Nama.join(', '));
console.log('\n');

No = ["M", 3, '1', 1, '9', 0, '0', 1];
console.log(No);
console.log(No.join(''));
No.pop();
console.log(No.join(' - '));
No2 = No.slice(1, 4);
console.log(No2.join(', '));
console.log('\n');

Daftar = [123, "abc", true, fungsi()];
console.log(Daftar);
console.log(Daftar.join());
Daftar.unshift("Mulyosugito", "Adam");
console.log(Daftar.join());
Daftar.shift();
console.log(Daftar.join());
console.log('\n');

function fungsi() {
    console.log("Ini adalah fungsi");
}

Nama.forEach(function (e, i) {
    console.log(i + ' : ' + e);
});
No.forEach(function (e, i) {
    console.log(i + ' : ' + e);
});
Daftar.forEach(function (e, i) {
    console.log(i + ' : ' + e);
});

console.log('\n');
Angka = [2, 1, 3, 5, 4];
Angka.sort();
console.log(Angka.join(' '));

console.log('\n');
Angka2 = [1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5, 6, 4, 5, 7, 5, 8, 6, 7, 9, 8, 0, 9, 8];
Angka2.sort(function (a, b) {
    return a - b;
});
console.log(Angka2.join(' '));
Angka3 = Angka2.filter(function (e) {
    return e > 4
});
Angka4 = Angka2.find(function (e) {
    return e === 7;
});
console.log(Angka3.join(' '));
console.log(Angka4);
console.log('\n');

Angka5 = [1, 2, 3, 4, 5];
Angka6 = Angka5.map(function (e, i) {
     return e * 2;
});
console.log(Angka6.join(' '));
