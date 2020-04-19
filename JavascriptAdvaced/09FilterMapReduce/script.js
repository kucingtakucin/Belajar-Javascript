/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

const angka = [2, 3, 4, 5, 1, 9, 6, 8, 0, 7];
const angka2 = [2, 3, 4, 5, 1, 9, 6, 8, 0, 7];
const angka3 = [2, 3, 4, 5, 1, 9, 6, 8, 0, 7];
const angka4 = [2, 3, 4, 5, 1, 9, 6, 8, 0, 7];

// for
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] > 3) newAngka.push(angka[i]);
}
console.log(`Array lama ${angka}`);
console.log(`Dengan for biasa : ${newAngka}`);

// filter
const newAngka2 = angka2.filter(element => element > 3);
console.log(`Array lama ${angka2}`);
console.log(`Dengan filter : ${newAngka2}`);

// map
const newAngka3 = angka3.map(element => element + 3);
console.log(`Array lama ${angka3}`);
console.log(`Dengan map : ${newAngka3}`);

// reduce
const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(`Array lama ${angka4}`);
console.log(`Dengan map : ${newAngka4}`);

// method chaining
const newAngka5 = angka.filter(element => element >3).map(element => element * 3).reduce((acc, curr) => acc + curr);
console.log(`Hasil method chaining : ${newAngka5}`);