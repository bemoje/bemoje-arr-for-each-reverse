import arrForEachReverse from '../src/arr-for-each-reverse'

const arr = ['a', 'b', 'c']

arrForEachReverse(arr, (element, index, array) => {
	console.log({ element, index, array })
})
//=> { element: 'c', index: 2, array: [ 'a', 'b', 'c' ] }
//=> { element: 'b', index: 1, array: [ 'a', 'b', 'c' ] }
//=> { element: 'a', index: 0, array: [ 'a', 'b', 'c' ] }
