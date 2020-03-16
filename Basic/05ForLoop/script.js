/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

jumlahAngkot = 10;
let angkotBeroperasi = 6;
noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log("Angkot no. " + noAngkot + " beroperasi dengan baik.");
    noAngkot++;
}

for (angkotBeroperasi = angkotBeroperasi + 1;angkotBeroperasi <= 10;angkotBeroperasi++) {
    console.log("Angkot no. " + angkotBeroperasi + " sedang tidak beroperasi.");
}