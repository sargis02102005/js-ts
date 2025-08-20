import chalk from 'chalk';
let callCounter = 0;
callCounter++;
export const calculateShippingCost = (width, length) => {
  const pricePerMeter = 350; //Фиксированная цена за квадратный метр
  const area = width * length; //Площадь груза (ширина × длина)
  const metersToPay = Math.ceil(area); // Округление вверх до целых метров (Math.ceil)
  const totalCost = metersToPay * pricePerMeter; //Итоговая стоимость(metersToPay * 350)
  const currentDate = new Date().toISOString(); //Текущая дата

  console.log(
    chalk.green(
      `Чек ${callCounter}
  ---------
Ширина: ${chalk.yellow(width)} м
Длина: ${chalk.blue(length)} м
Площадь: ${chalk.magenta(area)} м^2
---------
Нужно оплатить: ${chalk.cyan(metersToPay)} м^2
Цена 1 м^2: ${chalk.red(pricePerMeter)} руб
Сумма за ${metersToPay} м^2: ${chalk.yellow(totalCost)} руб
---------
Дата расчёта ${chalk.blue(currentDate)}`,
    ),
  );
};
