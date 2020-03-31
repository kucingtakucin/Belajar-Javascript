/*
 * Copyright (c) 2020. Adam Arthur Faizal
 */

function sum(range = (a, b) => {
    let c = null;
    while (a <= b) {
        console.log(a);
        c += a;
        a++;
    }
    return (function () {
        return c;
    })();
}){
    return `Totalnya adalah ${range}`;
}

console.log(sum([1,2]));