'use strict';

const compromat = [
    {name: "A", phone: "000-000-000"},
    {name: "B", phone: "111-111-111"},
    {name: "C", phone: "222-222-222"}
];

const findPhoneByName = (name) => {
    for (const el of compromat) {
        if (el.name === name) return el.phone;
    }
    return "No.";
};

console.log(findPhoneByName("B") + "\n");

const objCompromat = {
    A: "000-000-000",
    B: "111-111-111",
    C: "222-222-222"
};

const findPhoneByNameObj = (name) => {
    if (objCompromat[name]) return objCompromat[name];
    else return "No.";
}

console.log(findPhoneByNameObj("A"));
