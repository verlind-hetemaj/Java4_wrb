const cmimiLibrit = 12.50;
const numriLibrit = 3;

const cmimiFletores=1.80;
const numriFletores=4;

let totaliLibrit = cmimiLibrit * numriLibrit;
let totaliFletores = cmimiFletores * numriFletores;

let totali = totaliLibrit + totaliFletores;

totali += 2.50;

console.log("fatura");
console.log("Totali i librit: " + totaliLibrit + "€");
console.log("Totali i fletores: " + totaliFletores + "€");
console.log("Transporti: 2.50€");
console.log("Totali i fatures: " + totali + "€");