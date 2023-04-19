function getArrayParams(...arr) {
	min = Math.min(...arr);
	max = Math.max(...arr);

	sum = (arr.reduce((a, b) => a + b) / arr.length);
	avg = Number(sum.toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}



function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	sum = arr.reduce((a, b) => a + b);
	return sum;

}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	min = Math.min(...arr);
	max = Math.max(...arr);
	return max - min;


}


function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	even = arr.filter(function(even) {
		return even % 2 == 0
	});
	sumEven = even.reduce(function(a, b) {
		return a + b
	});
	odd = arr.filter(function(odd) {
		return odd % 2 != 0
	})
	sumOdd = odd.reduce((a, b) => a + b)
	return sumEven - sumOdd;

}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	even = arr.filter(function(even) {
		return even % 2 == 0
	})
	sumEven = even.reduce(function(a, b) {
		return a + b
	});
	return sumEven / even.length;

}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {

		const sum = func(...arrOfArr[i]);

		if (sum > maxWorkerResult) {
			maxWorkerResult = sum;
		}
	}
	return maxWorkerResult;

}

