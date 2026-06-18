const { default: baskara } = require("./baskara.ts");
const { default: calcular } = require("./calcular.ts");
const { cos, sin, tan } = require("./trigonometry.ts");
const {triSide} = require("./tri-sides.ts")

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
  if (op == 2) {
    readline.question("Sen, cos, tg? ", (n) => {
      const opt = +n;
      readline.question("Valor? ", (n) => {
        const v = +n;
        if (v === 0 || !opt) return;
        switch (opt) {
          case 0:
            console.log(sin(v));
            break;
          case 1:
            console.log(cos(v));
            break;
          case 2:
            console.log(tan(v));
            break;
          default:
            console.log("Ai é d+ po");
            break;
            8;
        }
        readline.close();
      });
    });
  }
  if (op == 3) {
    readline.question("Quais os lados a, b, c? (Separe por espaços) ", (r) => {
      const sides = r.split(" ");
      console.log(triSide({ a: sides[0], b: sides[1], c: sides[2] }));
      readline.close()
    });
  }
});
