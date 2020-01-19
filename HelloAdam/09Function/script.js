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

a = 4;
b = 8;
console.log("Volume kubus A dengan sisi " + a + " adalah " + kubus_A(a));
console.log("Volume kubus B dengan sisi " + b + " adalah " + kubus_B(b));
console.log("Maka volume total adalah " + Vtotal(a, b));
