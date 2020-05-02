/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Mbah Putih'];
const [salam, , , nama] = perkenalan; // Skipping items
console.log(salam);
console.log(nama);

// Swap items
let angkaA = 1;
let angkaB = 2;
[a, b] = [angkaB, angkaA];
console.log(a);
console.log(b);

// Return value pada function
function coba() {
    return [1, 2];
}
let [a, b] = coba();
console.log(a);
console.log(b);

// Rest parameter
[a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);

// Destructuring object
const Mahasiswa = {
    nama: 'Adam Arthur Faizal',
    umur: 17
}

const {nama2, umur2} = Mahasiswa;
console.log(nama2);
console.log(umur2);

// Assignment tanpa deklarasi object
({nama3, umur3} = {nama3: 'Adam Arthur Faizal', umur3: 17});
console.log(nama3);
console.log(umur3);

// Assign ke variabel baru
const Mahasiswa2 = {
    nama: 'Adam Arthur Faizal',
    umur: 17
}
const {nama: n, umur: u} = Mahasiswa2;
console.log(n);
console.log(u);

// Memberikan default value
const Mahasiswa3 = {
    nama: 'Adam Arthur Faizal',
    umur: 17
}
const {nama, umur, email = 'email@email.email'} = Mahasiswa3;
console.log(email);

// Mengambil duplicate pada object, setelah dikirim sebagai parameter untuk function
const Mahasiswa4 = {
    id: 123,
    nama: 'Adam Arthur Faizal',
    umur: 17,
    email: 'adam.faizal.af6@student.uns.ac.id'
}

function getIdMahasiswa({id}) {
    return id;
}

console.log(getIdMahasiswa(Mahasiswa4));