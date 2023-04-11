"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c
	if (d < 0) {
		arr = []
	}

	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a);
	}
	if (d === 0) {
		arr.push(-b / (2 * a))
	}
	return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let interestRate = percent / 100;
	let P = interestRate / 12; /*P — 1/12 процентной ставки (от 0 до 1)*/
	let S = amount - contribution; /*S — тело кредита*/
	let n = countMonths;
	let Payment = S * (P + (P / (((1 + P) ** n) - 1))) /*n — количество месяцев(countMonths)*/
	let all = Payment * n;
	return Number(all.toFixed(2));
}

console.log(calculateTotalMortgage(15, 0, 10000, 36))