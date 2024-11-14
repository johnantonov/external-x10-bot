export function formatError(error: any, contextMessage: string) {
  const errorMessage = error?.response?.body?.description || (error as Error).message || 'Unknown error';
  console.error(`Error: ${contextMessage} - ${errorMessage.substring(0, 200)}`);
}

export const formatNumber = (num: number): number => {
  return num % 1 === 0 ? num : Number(num.toFixed(2));
};

