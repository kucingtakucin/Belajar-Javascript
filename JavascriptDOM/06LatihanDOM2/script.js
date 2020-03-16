/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(com, player) {
    if (player === com) return 'SERI!';
    if (player === 'gajah') return (com === 'orang') ? 'MENANG!' : 'KALAH!';
    if (player === 'orang') return (com === 'gajah') ? 'MENANG!' : 'KALAH!';
    if (player === 'semut') return (com === 'orang') ? 'MENANG!' : 'KALAH!';
}

function putar() {
    const imgComputer = document.querySelector('.container .area-computer .img-computer');
    const gambar = ['gajah', 'orang', 'semut'];
    const waktuMulai = new Date().getTime();
    let i = 0;
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval();
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i === gambar.length) i = 0;
    }, 100);
}

const pilihan = document.querySelectorAll('.container .area-player ul li img');
pilihan.forEach(function (e) {
    e.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = e.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();
        setTimeout(function () {
            const gambarComputer = document.querySelector('.container .area-computer .img-computer');
            gambarComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
            const info = document.querySelector('.container .info');
            info.innerHTML = hasil;
        }, 1000);
    });
});