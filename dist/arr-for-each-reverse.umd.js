(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-for-each-reverse'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Iterate an array in reverse.
	 * @param {Array} arr - The array
	 * @param {callback} callback - callback(arr[i], i, arr)
	 * @return {void}
	 */
	function arrForEachReverse(arr, callback) {
		assertArgs(arr, callback);
		assertType(Array, arr);
		assertType(Function, callback);

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
