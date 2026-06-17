const { default: baskara } = require("./baskara.ts");
const { default: calcular } = require("./calcular.ts");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é a operação calcular ou bhaskara? ", (op) => {
  if (op == 0) {
    readline.question("1 num? ", (n) => {
      const num1 = +n;
      readline.question("2 num? ", (n) => {
        const num2 = +n;
        if (Number.isNaN(num1) || Number.isNaN(num2)) {
          console.log("Ai tu me quebra");
          readline.close();
        } else {
          console.log(calcular(1, [num1, num2]));
          readline.close();
        }
      });
    });
  }
  if (op == 1) {
    readline.question("Qual é a? ", (num) => {
      const a = +num;
      readline.question("Qual é b? ", (num) => {
        const b = +num === 0 ? undefined : +num;
        readline.question("Qual é c? ", (num) => {
          const c = +num === 0 ? undefined : +num;
          if (a === 0 || (b === undefined && c === undefined)) {
            console.log("Poxa mn n sabe fzr n eh?");
            readline.close();
          } else {
            readline.close();
            console.log(baskara(a, b, c));
          }
        });
      });
    });
  }
});
