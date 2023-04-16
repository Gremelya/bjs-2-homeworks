function getArrayParams(...arr) {
	min = Math.min(...arr);
	max = Math.max(...arr);
	srt = (arr.reduce(function(a, b) {
		return a + b;
	}) / arr.length);
	avg = Number(srt.toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}



function summElementsWorker(...arr) {
	if (arr.length != 0) {
		sum = arr.reduce(function(a, b) {
			return a + b;
		});
		return sum;
	} else {
		return 0
	}
}


function differenceMaxMinWorker(...arr) {
	min = Math.min(...arr);
	max = Math.max(...arr);
	return max - min;
}

function differenceEvenOddWorker(...arr) {
	even = arr.filter(function(even) {
		if (even % 2 == 0) {
			return true
		} else {
			return false
		}
	});
	sumEven = even.reduce(function(a, b) {
		return a + b
	});
	odd = arr.filter(function(odd) {
		if (odd % 2 != 0) {
			return true
		} else {
			return false
		}
	})
	sumOdd = odd.reduce(function(a, b) {
		return a + b
	})
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	even = arr.filter(function(even) {
		if (even % 2 == 0) {
			return true
		} else {
			return false
		}
	})
	sumEven = even.reduce(function(a, b) {
		return a + b
	});
	return sumEven / even.length;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let conconst = 0;
	for (let i = 0; i < arr.length; i++) {
		arrOfArr = arr[i]
		conconst = func(...arrOfArr);
		if (conconst >= maxWorkerResult) {
			maxWorkerResult = conconst;
		}
	}

	return maxWorkerResult;
}