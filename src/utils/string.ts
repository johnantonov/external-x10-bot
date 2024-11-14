export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}

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

export const formatNumber = (num: number): number => {
  return num % 1 === 0 ? num : Number(num.toFixed(2));
};

