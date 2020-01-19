/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
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