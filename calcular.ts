export default function calcular(operation: number, numbers: Array<number>) {
  if (numbers.length !== 2) return null;

  if (operation === 1) {
    return numbers[0] + numbers[1];
  } else if (operation === 4) {
    if (numbers[1] === 0)
      throw new Error("Operation 4 (Division) did with divisor 0");
    return numbers[0] / numbers[1];
  }
}
