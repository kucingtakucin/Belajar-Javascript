/*
 * Copyright (c) 2020. Adam Arthur Faizal
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