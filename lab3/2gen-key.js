'use strict';

const characters = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const generateKey = (l, chars=characters) => {
    let res = "";
    for (let i = 0; i < l; i++) {
        const rand_index = Math.floor(Math.random() * chars.length);
        res += chars[rand_index];
    }
    return res;
}

console.log(generateKey(16));