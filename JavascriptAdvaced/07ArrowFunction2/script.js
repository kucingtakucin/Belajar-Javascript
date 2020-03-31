/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

$('.box').click(function () {
    let size = 'size';
    let capt = 'caption';
    if ($(this).hasClass(size)) {
        [size, capt] = [capt, size];
    }
    $(this).toggleClass('size');
    setTimeout(() => {
        $(this).toggleClass('caption');
    }, 1000);
});