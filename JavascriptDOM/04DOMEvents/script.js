/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

const p2 = document.querySelector('section#a p.p2');
const p3 = document.querySelector('section#a p.p3');
const p4 = document.querySelector('section#b p');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

// p2.onclick = ubahWarnaP2;
// p3.onclick = ubahWarnaP3;
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textliBaru = document.createTextNode('Item Baru!');
    liBaru.appendChild(textliBaru);
    ul.appendChild(liBaru);
});
p3.addEventListener('click', function () {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function () {
    p3.style.color = 'red';
});
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'gray';
    p3.style.transition = '1s';
});
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});