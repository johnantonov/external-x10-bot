export function parsePercent(input: string | number): number {
  if (!input) {
    return 0;
  }

  let str = input.toString().replace(',', '.');
  let num = Number(str);

  if (isNaN(num)) {
    return 0;
  }

  if (num > 1) {
    return num / 100;
  }

  return num;
}