/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */
//
// const silang = document.querySelectorAll('a.close');
// silang.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         event.target.parentElement.style.display = 'none';
//         event.preventDefault();
//         event.stopPropagation()
//     });
// });
//
// const cards = document.querySelectorAll('.container .card');
// cards.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         alert('oke');
//     });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function (event) {
    if (event.target.className === 'close') {
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    }
});