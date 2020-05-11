/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

// Promise
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Janji tidak ditepati!')
    }
});
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Janji telah ditepati setelah beberapa waktu!');
        }, 3000);
    } else {
        setTimeout(() => {
            reject('Janji tidak ditepati setelah beberapa waktu');
        });
    }
});
const janji3 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji 3 telah ditepati!');
    } else {
        reject('Janji tidak ditepati!')
    }
});
const janji4 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji 4 telah ditepati!');
    } else {
        reject('Janji tidak ditepati!')
    }
});
console.log('Mulai');
janji1.finally(() => console.log('Selesai loading janji1!'))
    .then(response => console.log('OK! : ', response))
    .catch(response => console.log('NOT OK! :', response));
console.log(janji2.finally(() => console.log('Selesai loading janji2!'))
    .then(response => console.log('OK! ', response))
    .catch(response => console.log('NOT OK!', response)));
Promise.all([janji3, janji4])
    .finally(() => console.log('Selesai loading janji3 & janji4'))
    .then(response => {
        const [data1, data2] = response
        console.log('OK!', data1, data2);
    })
    .catch(response => console.log('NOT OK!', response));
console.log('Selesai');

