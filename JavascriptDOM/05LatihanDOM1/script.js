/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
const container = document.querySelector('.container');
const tombolMerah = document.getElementById('merah');
const tombolHijau = document.getElementById('hijau');
const tombolBiru = document.getElementById('biru');
const slider = document.getElementsByClassName('slider');
const sliderMerah = document.querySelector('.container input[name=sliderMerah]');
const sliderHijau = document.querySelector('.container input[name=sliderHijau]');
const sliderBiru = document.querySelector('.container input[name=sliderBiru]');


const tombolAcak = document.createElement('button');
const isiTombolAcak = document.createTextNode('Acak Warna!');
tombolAcak.appendChild(isiTombolAcak);
tombolAcak.setAttribute('type', 'button');
container.appendChild(tombolAcak);
tombolAcak.style.display = 'block';
tombolAcak.style.margin = '15px auto';

const matikanLampu = document.createElement('button');
const isiMatikanLampu = document.createTextNode('Matikan Lampu!');
matikanLampu.appendChild(isiMatikanLampu);
matikanLampu.setAttribute('type', 'button');
matikanLampu.setAttribute('href','#');
container.appendChild(matikanLampu);
matikanLampu.style.display = 'block';
matikanLampu.style.margin = '15px auto';

const tombolBaru = document.createElement('button');
const isiTombolBaru = document.createTextNode('Bagus banget ini!');
tombolBaru.appendChild(isiTombolBaru);
tombolBaru.setAttribute('type', 'button');
container.appendChild(tombolBaru);
tombolBaru.style.display = 'block';
tombolBaru.style.margin = '15px auto';

tombolMerah.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
    // document.body.setAttribute('class', 'merah-muda');
    // document.body.classList.toggle('merah-muda');
});

tombolHijau.addEventListener('click', function () {
    // document.body.setAttribute('class', 'hijau-muda');
    document.body.style.backgroundColor = 'lightgreen';
});

tombolBiru.addEventListener('click', function () {
    // document.body.setAttribute('class', 'biru-muda');
    document.body.style.backgroundColor = 'lightblue';
});

for (let i = 0; i < slider.length; i++) {
    slider[i].addEventListener('input',function () {
        const sMerah = sliderMerah.value;
        const sHijau = sliderHijau.value;
        const sBiru = sliderBiru.value;
        document.body.style.backgroundColor = 'rgb(' + sMerah + ',' + sHijau + ',' + sBiru + ')';
    });
}   

tombolAcak.addEventListener('click', function () {
    const r = Math.round(Math.random() * 100 + 1);
    const g = Math.round(Math.random() * 100 + 1);
    const b = Math.round(Math.random() * 100 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

matikanLampu.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white';
});

tombolBaru.addEventListener('click', function () {
    document.body.addEventListener('mousemove', function (event) {
        const xPosition = Math.round((event.clientX / window.innerWidth) * 255);
        const yPosition = Math.round((event.clientY / window.innerWidth) * 255);
        document.body.style.backgroundColor = 'rgb(' + xPosition + ',100,' + yPosition + ')';
    });
});


