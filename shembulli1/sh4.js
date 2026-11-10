let produktet2 = 35;
let produkti1 = 24;
let cmimitotal = produktet2 + produkti1;

produktet2 -= produktet2 * 0.15;
produkti1 -= produkti1 * 0.15;

let cmimitotalpasZbritjes = produktet2 + produkti1;

let vleraTotale = cmimitotalpasZbritjes+4;

console.log("Cmimi total i produkteve: " + cmimitotal + "€");
console.log("Cmimi total i produkteve pas zbritjes: " + cmimitotalpasZbritjes + "€");
console.log("Vlera totale e faturës me transport: " + vleraTotale + "€");
