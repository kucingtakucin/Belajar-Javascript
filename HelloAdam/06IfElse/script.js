/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

let noAngkot;
jumlahAngkot = 10;
angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot no. " + noAngkot + " sedang tidak beroperasi.")
    }
}