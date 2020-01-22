/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
/* DOM Manipulation -- Element */
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Hello,World</em>';
judul.style.textAlign = 'center';
// judul.getAttribute('id');

const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraf 1</p></div>';
sectionA.style.backgroundColor = "#eaeaea";
sectionA.style.color = 'darkblue';

const a = document.querySelector('selector#a a');
// a.setAttribute('id', 'Tautan');
// a.getAttribute('href');

const p2 = document.querySelector('section#a p.p2');
// p2.classList.add('label');
// p2.classList.remove('label');
// p2.classList.toggle('label');
// p2.classList.item('1');
// p2.classList.contains('label');

/* DOM Manipulation -- Node */
// Buat elemen baru
const pBaru = document.createElement('p');
const paragrafBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan kedalam paragraf
pBaru.appendChild(paragrafBaru);
// Simpan pBaru diakhir section A
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const itemliBaru = document.createTextNode("Item Baru");
liBaru.appendChild(itemliBaru);
const ul = document.querySelector('section#b ul');
const liAfter = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, liAfter);

const linkGithub = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(linkGithub);

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
const h2Baru = document.createElement('h2');
const teksh2Baru = document.createTextNode('Judul Baru!');
h2Baru.appendChild(teksh2Baru);
sectionB.replaceChild(h2Baru, p4);
