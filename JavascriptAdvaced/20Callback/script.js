/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

function loadAjax(url, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        try {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    success(this);
                } else if (this.status === 404) {
                    error(this);
                }
            }
        } catch (Exception) {
            console.error(Exception);
        }
    }
    xhr.open('get', url, true);
    xhr.send();
}

console.log('start');
loadAjax('./data/data.json',
        result => {
            const mahasiswa = document.getElementById('mahasiswa');
            mahasiswa.innerHTML = JSON.parse(result.response).map(element => {
                return `
                    <ul>
                        <li>${element.nama}</li>
                        <li>${element.nim}</li>
                        <li>${element.jurusan}</li>
                        <li>${element.Angkatan}</li>
                    </ul>
                `
            }).join('');
            console.log(mahasiswa.innerHTML);
        },
        result => {
            document.body.innerHTML = result.response;
            console.error(result.response);
        })
console.log('selesai');
