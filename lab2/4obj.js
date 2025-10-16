'use strict';

const fn = () => {
    const obj1 = {name: "Lalala"};
    let obj2 = {name: "Lalala"};

    obj1.name = "Alala";
    obj2.name = "Alala";

    console.log(obj1);
    console.log(obj2);

    // obj1 = {h: 6};
    obj2 = {h: 6};

    console.log(obj2);
}

fn();
console.log("\n")

const createUser = (name, city) => {
    return { name, city };
}

console.log(createUser("n", "c"));