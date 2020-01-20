/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

function kubus_A(a) {
    volume = Math.pow(a, 3);
    return volume;
}

function kubus_B(b) {
    volume = Math.pow(b, 3);
    return volume;
}

function Vtotal(a, b) {
    total = kubus_A(a) + kubus_B(b);
    return total;
}

a = 3;
b = 8;
console.log("Volume kubus A dengan sisi " + a + " adalah " + kubus_A(a));
console.log("Volume kubus B dengan sisi " + b + " adalah " + kubus_B(b));
console.log("Maka volume total adalah " + Vtotal(a, b));
console.log('\n');

function tambah() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

console.log("Hasil : " + tambah(1, 2, 3, 4, 5, 6));
console.log('\n');

function faktorial(n) {
    var hasil = 0;
    if (n === 1) {
        hasil = 1;
    } else {
        hasil = n * faktorial(n - 1);
    }
    return hasil;
}
n = 5;
console.log("Hasil dari " + n + "! adalah " + faktorial(n));
console.log('\n');

function fibonacci(n) {
    var hasil = 0;
    if (n === 1 || n === 0) {
        hasil = 1;
    } else {
        hasil = fibonacci(n - 1) + fibonacci(n - 2);

    }
    return hasil;
}
m = 8;
console.log("Hasil dari deret fibonacci ke-" + m + " adalah " + fibonacci(m));
