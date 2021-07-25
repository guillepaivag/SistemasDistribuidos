const utils = {}

utils.merge = (left,right) => {
	let result = [], lIndex = 0, rIndex = 0
	while (lIndex < left.length && rIndex < right.length) {
		if (left[lIndex] < right[rIndex]) {
			result.push(left[lIndex])
			lIndex++
		} else {
			result.push(right[rIndex])
			rIndex++
		}
	}
	return [...result, ...left.slice(lIndex), ...right.slice(rIndex)]
}

module.exports = utils