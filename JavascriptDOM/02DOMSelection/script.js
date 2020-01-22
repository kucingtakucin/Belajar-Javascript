/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// DOM Selection
// document.getElementById(); --> element
const judul = document.getElementById('judul');
judul.style.color = 'darkblue';
judul.style.backgroundColor = '#eaeaea';
judul.style.textAlign = 'center';
judul.innerHTML = 'Adam Arthur Faizal';

// document.getElementByTagName; --> HTMLCollections
const p = document.getElementsByTagName('p');
for (let i = 0;i < p.length;i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '45px';

// document.getElementByClassName; --> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dari Javascript';


// document.querySelector(); --> element
const p4 = document.querySelector('section#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = '#eaeaea';

const paragraf = document.querySelector('p');
paragraf.innerHTML = 'Ini diubah dari Javascript 2';

// document.querySelectorAll(); --> Nodelist
const paragrafAll = document.querySelectorAll('p');
for (let i = 0; i < paragrafAll.length; i++) {
    paragrafAll[i].style.backgroundColor = 'lightcoral';
}

// Mempersempit node root
const SectionB = document.querySelector("section#b");
const paragraf4 = SectionB.querySelector('p');
paragraf4.style.fontWeight = 'bold';
