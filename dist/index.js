/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-dnansumkbn2
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var dnansumkbn2 = require( '@stdlib/blas-ext-base-ndarray-dnansumkbn2' );
*
* var x = new Float64Vector( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnansumkbn2( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
