'use strict';

const old = (persons) => {
    const resObj = {};
    for (const per in persons) {
        resObj[per] = persons[per].died - persons[per].born;
    }
    return resObj;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};

console.log(old(persons));