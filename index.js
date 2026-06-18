const { default: baskara } = require("./baskara.ts");
const { default: calcular } = require("./calcular.ts");

console.log(baskara(4, undefined, -16));
console.log(calcular(1, baskara(4, 20, 16)));
