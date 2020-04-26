import arrForEachReverse from '../src/arr-for-each-reverse'

describe('arrForEachReverse', () => {
	test('works', () => {
		const result = []
		const arr = ['a', 'b', 'c']
		arrForEachReverse(arr, (...args) => {
			result.push([...args])
		})
		expect(result).toStrictEqual([
			['c', 2, arr],
			['b', 1, arr],
			['a', 0, arr],
		])
	})
})
