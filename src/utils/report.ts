export function parsePercent(input: string | number): number {
  if (!input) {
    return 0
  } 
  let str = input.toString().replace(',', '.');

  if (!str.includes('.')) {
    str = '0.' + str;
  }

  return Number(str);
}