import { isValid, parse } from 'date-fns';
import { useEffect, useState } from 'react';

export const showLess = (text: string, length: number): string => {
  if (text.length <= length) return text;

  return text.slice(0, length) + '...';
};

// -----------------

export const currencyFormat = () => {
  const formatter = new Intl.NumberFormat('en-IN', {
    // style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0, // Ensures two decimal places
  });
  return formatter;
};

// -----------------

export function useDebounce<T>(value: T, delay = 500): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// -----------------

type DropdownOption = {
  value: string | number;
  label: string;
};

export const formatDropdownOptions = <T, K extends keyof T, L extends keyof T>(
  data: T[] | undefined,
  valueKey: K,
  labelKey: L,
): DropdownOption[] => {
  return (
    data?.map((item) => ({
      value: item[valueKey] as string | number,
      label: String(item[labelKey]),
    })) ?? []
  );
};

// -----------------

export const parseDateParam = (value: string | null): Date | undefined => {
  const DATE_FORMAT = 'dd/MM/yyyy';

  if (!value) return undefined;

  const parsedDate = parse(value, DATE_FORMAT, new Date());

  return isValid(parsedDate) ? parsedDate : undefined;
};
