export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}

export function formatNumber(value: number, decimals: number = 0): string {
  if (isNaN(value)) {
    return '0';
  }

  let fixedValue = value % 1 === 0 ? value.toString() : value.toFixed(decimals);
  let [integerPart, decimalPart] = fixedValue.split('.');
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
}

export function NumberOrZero(input: any) {
  let value = parseFloat(input);

  if (isNaN(value)) {
    return 0;
  } else {
    return value
  }
}