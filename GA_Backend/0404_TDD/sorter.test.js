const sorter = require('./sorter');

const unsorted = [100.5, -40.7, 4000, -160, 30, 7]
const sorted = [-160, -40.7, 7, 30, 100.5, 4000]

describe ('bubble sort', () => {
	it('sorts an array of wacky numbers', () => {
		expect(sorter(unsorted)).toEqual(sorted)
	})

	it('sorts an array of numbers descending', () => {
		const sortedProperly = sorted.reverse();
		expect(sorter(unsorted, 'DESC')).toEqual(sortedProperly)
	})
})