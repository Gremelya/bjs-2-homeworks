function compareArrays(a, b) {
	return a.length === b.length && a.every((n, i) => n === b[i]);
}
console.log(a.every((n, i) => n === b[i]))

	/
	function getUsersNamesInAgeRange(user, gender) {
		let filt = user.filter(user => user.gender === gender)
		if (filt.length === 0) {
			return 0
		}
		let map = filt.map(user => user.age)
		let reduce = map.reduce((sum, current) => sum + current)

		return reduce / map.length
	}