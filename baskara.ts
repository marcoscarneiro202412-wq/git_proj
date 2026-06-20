type BhaskaraResult = {
  roots: number[];
  delta: number;
};

export default function solveBhaskara(
  a: number,
  b: number,
  c: number,
): BhaskaraResult {
  if (a === 0) {
    throw new Error(
      'O coeficiente "a" deve ser diferente de zero para uma equação do 2º grau.',
    );
  }

  const delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return { roots: [], delta }; // Raízes complexas não representadas no escopo real
  }

  const sqrtDelta = Math.sqrt(delta);
  const denominator = 2 * a;

  const root1 = (-b + sqrtDelta) / denominator;
  const root2 = (-b - sqrtDelta) / denominator;

  // Evita duplicatas caso delta seja zero
  const roots = delta === 0 ? [root1] : [root1, root2].sort((x, y) => x - y);

  return { roots, delta };
}
