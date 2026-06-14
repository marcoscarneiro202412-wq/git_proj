export default function baskara(
  a: number,
  b: number | undefined,
  c: number | undefined,
) {
  if (a === undefined) return null;

  if (c === undefined && b !== undefined) {
    if (a === 0) return [0, undefined];
    return [0, (b * -1) / a];
  } else if (c !== undefined && b === undefined) {
    if (c === 0) return null;
    const solution = Math.sqrt((c*-1 / a));
    if(Number.isNaN(solution)) return undefined;
    return [solution, solution * -1];
  } else if (c && b) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return undefined;
    if (delta === 0) return [-b / (2 * a), -b / (2 * a)];
    return [
      (b * -1 + Math.sqrt(delta)) / (2 * a),
      (b * -1 - Math.sqrt(delta)) / (2 * a),
    ];
  }
}
