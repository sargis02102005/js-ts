const calculateTax = (payments) => {
  // Суммируем только те платежи, которые не игнорируются для налогов
  let taxableIncome = 0;

  for (const item of payments) {
    if (!item.ignoreTaxes) {
      taxableIncome += item.amount;
    }
  }

  const threshold = 2400000; // Порог для прогрессивной ставки

  let tax13 = 0;
  let tax15 = 0;

  if (taxableIncome <= threshold) {
    // Вся сумма облагается по 13%
    tax13 = taxableIncome * 0.13;
  } else {
    // Первые 2.4 млн по 13%, остальное по 15%
    tax13 = threshold * 0.13;
    tax15 = (taxableIncome - threshold) * 0.15;
  }

  return {
    'Налог_по_13%': Math.round(tax13),
    'Налог_по_15%': Math.round(tax15),
    Общий_налог: Math.round(tax13 + tax15),
    Налогооблагаемый_доход: taxableIncome,
  };
};

const payments = [
  { id: 1, month: 'Январь', amount: 265_000, ignoreTaxes: false },
  { id: 2, month: 'Февраль', amount: 320_000, ignoreTaxes: false },
  { id: 3, month: 'Февраль', amount: 50_000, ignoreTaxes: true },
  { id: 4, month: 'Март', amount: 253_000, ignoreTaxes: false },
  { id: 5, month: 'Апрель', amount: 295_000, ignoreTaxes: false },
  { id: 6, month: 'Май', amount: 250_000, ignoreTaxes: false },
  { id: 7, month: 'Июнь', amount: 350_000, ignoreTaxes: true },
  { id: 8, month: 'Июнь', amount: 245_000, ignoreTaxes: false },
  { id: 9, month: 'Август', amount: 215_000, ignoreTaxes: false },
  { id: 10, month: 'Сентябрь', amount: 50_000, ignoreTaxes: false },
  { id: 11, month: 'Октябрь', amount: 350_000, ignoreTaxes: false },
  { id: 12, month: 'Октябрь', amount: 450_000, ignoreTaxes: true },
  { id: 13, month: 'Ноябрь', amount: 330_000, ignoreTaxes: false },
  { id: 14, month: 'Декабрь', amount: 220_000, ignoreTaxes: false },
];

const taxResult = calculateTax(payments);
console.log('Результат расчета налога:', taxResult);
// Результат расчета налога: {
//   tax13: 312000,
//       tax15: 58950,
//       totalTax: 370950,
//       taxableIncome: 2793000
// }
