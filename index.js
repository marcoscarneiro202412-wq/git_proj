const { default: baskara } = require("./baskara.ts");
const { default: calcular } = require("./calcular.ts");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é a operação calcular ou bhaskara? ", (op) => {
  if (op == 1) {
    readline.question("Qual é a? ", (num) => {
      const a = +num;
      readline.question("Qual é b? ", (num) => {
        const b = +num === 0 ? undefined : +num;
        readline.question("Qual é c? ", (num) => {
          const c = +num === 0 ? undefined : +num;
          if (a === 0 || (b === undefined && c === undefined)) {
            console.log("Poxa mn n sabe fzr n eh?");
          } else {
            console.log(baskara(a, b, c));
          }
          readline.close();
        });
      });
    });
  }
});
