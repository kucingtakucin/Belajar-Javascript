/*
 * Copyright (c) 2020. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */
var penumpang = [];
tambahPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length === 0) {
        penumpang.push(namaPenumpang);
        console.log(penumpang);
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang.splice(i, 1, namaPenumpang);
                console.log(penumpang);
                return;
            } else if (penumpang[i] === namaPenumpang) {
                console.log("Sudah ada nama yang sama!");
                console.log(penumpang);
                return;
            } else if (i === penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                console.log(penumpang);
                return;
            }
        }
    }
};

hapusPenumpang = function (namaPenumpang, penumpang) {
    if (penumpang.length === 0) {
        console.log("Angkot kosong!");
        console.log(penumpang);
        return;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === namaPenumpang) {
                penumpang.splice(i, 1, undefined);
                console.log(penumpang);
                return;
            } else if (i === penumpang.length - 1) {
                console.log("Nama penumpang tidak ada!");
                console.log(penumpang);
                return;
            }
        }
    }
};