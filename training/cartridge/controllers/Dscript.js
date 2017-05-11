/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Dscript
*/

'use strict';

//IMporting a ccd class.
var ISML = require('dw/template/ISML');
//Importing a script.
var guard = require('storefront_controllers/cartridge/scripts/guard');


function start() {
	// check documentaion on help content via eclipse.
	ISML.renderTemplate('dscript.isml');
}

/* Exports of the controller */
///**
// * @see {@link module:controllers/Dscript~Start} */
exports.Start = guard.ensure([ 'get'], start);
//exports.Start = start;


