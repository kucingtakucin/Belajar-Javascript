/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

nilai = prompt("Masukkan pesanan kamu : \n(Menu : Nasi Goreng, Bayam, Hamburger, Susu, Tempe)");
switch (nilai) {
    case "Bayam":
    case "Susu":
    case "Tempe":
        keadaan = "sehat";
        alert("Makanan kamu " + keadaan);
        break;
    case "Nasi Goreng":
    case "Hamburger":
        keadaan = "tidak sehat";
        alert("Makanan kamu " + keadaan);
        break;
    default:
        alert("Kamu salah input!");
        break;
}