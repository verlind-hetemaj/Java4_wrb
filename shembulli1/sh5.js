let nr1 = "25";     
let nr2 = "17";
let nr3 = "8";

console.log(nr1 + nr2 + nr3); // Output: 25178

nr1 = Number(nr1);
nr2 = Number(nr2);
nr3 = Number(nr3);
let totali = nr1 + nr2 + nr3;
    console.log(totali); // Output: 50

let mesatarja = (nr1 + nr2 + nr3) / 3;

console.log("Mesatarja e numrave: " + mesatarja); // Output: 16.666666666666668

console.log(typeof mesatarja); // Output: number
console.log(typeof totali); // Output: number
