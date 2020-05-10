/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
function jumlahkan(...angka) {
    let totalForEach = 0;
    let totalForOf = 0;
    angka.forEach((element) => totalForEach += element)
    for (const angkaElement of angka) totalForOf += angkaElement
    let totalReduce = angka.reduce((index, element) => index + element)
    return [totalForEach, totalForOf, totalReduce];
}

console.log(jumlahkan(1, 2, 3, 4, 5));

// Array Destructuring
const Kelompok = ['Adam', 'Arthur', 'Faizal'];
const [Ketua, ...Anggota] = Kelompok;
console.log(Ketua, Anggota);

// Object Destructuring
const Kelompok2 = {
    FrontEnd: ['Aksal', 'Sari'],
    BackEnd: ['Arthur'],
    Database: ['Aqil'],
    UIUX: ['Wulan'],
}
const {FronEnd, BackEnd, ...Other} = Kelompok2;
console.log(FronEnd);
console.log(BackEnd);

// Filtering
function filterBy(type, ...values) {
    return values.filter((element => typeof element === type));
}

console.log(filterBy('number', 1, 2, 'adam', false, true, 'arthur'));
console.log(filterBy('string', 1, 2, 'adam', false, true, 'arthur'));
console.log(filterBy('boolean', 1, 2, 'adam', false, true, 'arthur'));
