interface triSidesInterface {
  a: number;
  b: number;
  c: number;
}

const triSide = (sides: triSidesInterface) => {
  const a = 4;
  const b = 7;
  const c = 9;

  // Aplicação da Lei dos Cossenos (Retorna em Radianos)
  const radA = Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c));
  const radB = Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c));
  const radC = Math.acos((a ** 2 + b ** 2 - c ** 2) / (2 * a * b));

  // Função para converter radianos em graus com duas casas decimais
  const paraGraus = (rad: number) => Number((rad * (180 / Math.PI)).toFixed(2));

  const anguloA = paraGraus(radA);
  const anguloB = paraGraus(radB);
  const anguloC = paraGraus(radC);

  return [anguloA, anguloB, anguloC];
};
