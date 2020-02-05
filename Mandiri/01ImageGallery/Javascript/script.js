/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

const container = document.querySelector('.container');
const thumbs = document.querySelectorAll('.container .thumbnail .thumb');
container.addEventListener('click', function (event) {
    if (event.target.className === 'thumb') {
        event.target.parentElement.previousElementSibling.src = event.target.src;
        event.target.parentElement.previousElementSibling.classList.add('fade-in');
        setTimeout(function () {
            event.target.parentElement.previousElementSibling.classList.remove('fade-in');
        },500);
        thumbs.forEach(function (element) {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        event.target.classList.add('active');
    }
});