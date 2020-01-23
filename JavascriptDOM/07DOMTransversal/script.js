/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

const silang = document.querySelectorAll('span.close');
silang.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.target.parentElement.style.display = 'none';
    });
});

const namaAdam = document.querySelector('.container .card span.nama');
// namaAdam.parentElement
// namaAdam.parentElement.parentElement
// namaAdam.nextElementSibling
// namaAdam.nextElementSibling.nextElementSibling
// namaAdam.previousElementSibling
// namaAdam.previousElementSibling.previousElementSibling