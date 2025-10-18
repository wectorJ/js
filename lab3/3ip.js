'use strict';

const ipToNum = (ip) => {
    const parts = ip.split('.');
    if (parts.length !== 4) return "No.";
    return parts.map(part => parseInt(part, 10))
            .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
};

console.log(ipToNum("192.168.1.1.8"));