"use strict"

function solveEquation(a, b, c) {
  
  // код для задачи №1 писать здесь
  let arr = [];
  let diskr = b ** 2 - 4 * a * c;
  if (diskr > 0) {
    let x1 = (-b + Math.sqrt(diskr))/(2*a);
    let x2 = (-b - Math.sqrt(diskr))/(2*a);
    arr.push(x1,x2);
    } 
  else if (diskr === 0) {
    let x1 = - b /(2 * a);
    arr.push(x1);
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
 let percentCredit = Number(percent); 
  let contributionCredit  = Number(contribution); 
  let amountCredit = Number(amount);

 

  if (Number.isNaN(percentCredit)){
    message = `Параметр "Процентная ставка по кредиту" содержит неправильное значение "${percent}"`
    return message; 
  }
  if (Number.isNaN(contributionCredit)){
    message = `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
    return message; 
  }
  if (Number.isNaN(amountCredit)){
    message = `Параметр "Общая сумма кредита" содержит неправильное значение "${amount}"`; 
    return message; 
  }

  let termCredit;
  let creditSum;
  let perc;
  let payment; 
  let creditTotal;
  
  creditSum = amountCredit - contributionCredit;
  perc = percentCredit / 12/100;
  
let dateToday = new Date();
termCredit = ((date.getFullYear() - dateToday.getFullYear())  * 12 + dateToday.getMonth() - date.getMonth())
 

  payment = creditSum * (perc + (perc / (((1 + perc)**termCredit) - 1)));
  creditTotal = payment * termCredit;
  totalAmount = Number(creditTotal.toFixed(2));
 
  return totalAmount;
}