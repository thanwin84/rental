import { addMonths } from 'date-fns';

export const generateNext12Months = () => {
  const now = new Date();
  return Array.from({ length: 12 }, (_, i) => addMonths(now, i));
};
