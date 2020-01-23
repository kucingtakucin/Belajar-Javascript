/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

const silang = document.querySelectorAll('a.close');
silang.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.target.parentElement.style.display = 'none';
        event.preventDefault();
    });
});