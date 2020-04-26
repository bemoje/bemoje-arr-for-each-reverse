import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Iterate an array in reverse.
 * @param {Array} arr - The array
 * @param {callback} callback - callback(arr[i], i, arr)
 * @return {void}
 */
export default function arrForEachReverse(arr, callback) {
	assertArgs(arr, callback)
	assertType(Array, arr)
	assertType(Function, callback)

	for (let i = arr.length - 1; i >= 0; i--) {
		callback(arr[i], i, arr)
	}
}

/**
 * @callback callback
 * @param {*} element - The current element
 * @param {number} index - The current element's index in the array
 * @param {Array} array - The array
 */
