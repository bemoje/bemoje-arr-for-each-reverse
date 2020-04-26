(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global['arr-for-each-reverse'] = factory());
}(this, (function () { 'use strict';

	/**
	 * Iterate an array in reverse.
	 * @param {Array} arr - The array
	 * @param {callback} callback - callback(arr[i], i, arr)
	 * @return {void}
	 */
	function arrForEachReverse(arr, callback) {
		for (let i = arr.length - 1; i >= 0; i--) {
			callback(arr[i], i, arr);
		}
	}

	/**
	 * @callback callback
	 * @param {*} element - The current element
	 * @param {number} index - The current element's index in the array
	 * @param {Array} array - The array
	 */

	return arrForEachReverse;

})));
