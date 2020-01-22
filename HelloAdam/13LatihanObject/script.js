/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

function Angkot(sopir, penumpang, tujuan, kas) {
    this.sopir = sopir;
    this.penumpang = penumpang;
    this.tujuan = tujuan;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length === 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            this.penumpang.forEach(function (e, i) {
                if (e === undefined) {
                    penumpang.splice(i, 1, namaPenumpang);
                    return this.penumpang;
                } else if (e === namaPenumpang) {
                    console.log(namaPenumpang + " sudah ada didalam angkot!");
                    return this.penumpang;
                } else if (i === penumpang.length - 1) {
                    penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            });
        }
    };
    this.penumpangTurun = function (namaPenumpang, kas) {
        if (this.penumpang.length === 0) {
            console.log("Angkot masih kosong!");
            return this.penumpang;
        } else {
            for (i = 0; i < penumpang.length; i++) {
                if (penumpang[i] === namaPenumpang) {
                    this.penumpang[i] = undefined;
                    this.kas += kas;
                    return this.penumpang;
                } else if (i === penumpang.length - 1) {
                    console.log(namaPenumpang + " tidak ada didalam angkot!");
                    return this.penumpang;
                }
            }
        }
    };
}

angkot1 = new Angkot("Otong Surotong", [], ["Jaten", "Palur"], 0);