export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}

export function formatNumber(value: number, decimals: number = 0): string {
  try {
    if (isNaN(value)) {
      return '0';
    }
  
    let fixedValue = value % 1 === 0 ? value.toString() : value.toFixed(decimals);
    let [integerPart, decimalPart] = fixedValue.split('.');
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  
    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  } catch {
    return "0"
  }
}

export function NumberOrZero(input: any, isRound: boolean = false, method?: 'up' | 'down') {
  try {
    let value = parseFloat(input);
  
    if (isNaN(value)) {
      return 0;
    } else {
      return value
    }
  } catch {
    return 0
  }
}

export function getCorrectWordEnd(total: number, rootWord: 'заказ' | 'выкуп' | 'возврат' = 'заказ'): string {
  const lastDigit = total % 10;
  const lastTwoDigits = total % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return rootWord+'ов'; // 11-14
  }

  if (lastDigit === 1) {
    return rootWord; // 1, 21, 31, 101 и т.д.
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return rootWord+'а'; // 2-4, 22-24 и т.д.
  }

  return rootWord+'ов'; // 0, 5-9, 10, 11-14, 20, 25-30 и т.д.
}