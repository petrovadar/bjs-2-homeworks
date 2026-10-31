"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  const sqrtD = Math.sqrt(d);

  return [
    (-b + sqrtD) / (2 * a),
    (-b - sqrtD) / (2 * a)
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;

  const monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  const totalPayment = monthlyPayment * countMonths;

  return Number(totalPayment.toFixed(2));
}