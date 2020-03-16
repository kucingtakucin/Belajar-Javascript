/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

jumlahAngkot = 10;
angkotBeroperasi = 6;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    } else if (noAngkot === 8) {
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.");
    }
}
console.log('\n');
for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.")
    }
}
console.log('\n');
for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 6) {
        if (noAngkot === 5) {
            console.log("Angkot no. " + noAngkot + " sedang lembur.");
        } else {
            console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
        }
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.")
    }
}