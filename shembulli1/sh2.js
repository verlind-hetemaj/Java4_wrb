const aktiviteti = 18;
const projekti = 24;
let provimi = 43;

let total = aktiviteti + projekti + provimi;
let perqindja = (total / 100) * 100;

console.log("totali i pikeve : " + total+" pike");
console.log("totali i perqindjes : " + perqindja+" %");

provimi += 5;

total = aktiviteti + projekti + provimi;
perqindja = (total / 100) * 100;

console.log("totali i pikeve pas shtimit : " + total+" pike");
console.log("totali i perqindjes pas shtimit : " + perqindja+" %");
