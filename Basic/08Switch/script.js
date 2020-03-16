/*
 * Copyright (c) 2020. Adam Arthur Faizal
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