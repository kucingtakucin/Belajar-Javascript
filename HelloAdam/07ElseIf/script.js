/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
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