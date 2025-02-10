type Currency = {
  label: string;
  value: string;
  symbol: string;
};

const EXCHANGE_RATES = {
  usd: 1,
  eur: 0.85,
  gbp: 0.73,
  jpy: 110.14,
  cad: 1.25,
} as const;

export const useConvertCurrency = (value: number, defaultCurrency: Currency) => {
  const convertCurrency = (
    amount: number,
    from: string,
    to: string
  ): number => {
    return (
      amount *
      (EXCHANGE_RATES[to as keyof typeof EXCHANGE_RATES] /
        EXCHANGE_RATES[from as keyof typeof EXCHANGE_RATES])
    );
  };

  const formatCurrency = (amount: number): string => {
    return `${defaultCurrency.symbol}${convertCurrency(
      amount,
      "usd",
      defaultCurrency.value
    ).toFixed(2)}`;
  };

  const formattedValue = formatCurrency(value);

  return { formattedValue };
};
