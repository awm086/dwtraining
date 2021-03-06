/**
 * Description of the Controller and the logic it provides
 * 
 * @module controllers/HelloWorld
 */

'use strict';

// IMporting a ccd class.
var ISML = require('dw/template/ISML');
// Importing a script.
var guard = require('storefront_controllers/cartridge/scripts/guard');
var ProductFinder = require('training/cartridge/scripts/ProductFinder');

function start() {
	var productId = request.httpParameterMap.pid.stringValue;
	var product = ProductFinder.find(productId);
	// check documentaion on help content via eclipse.
	if (product == null) {

		ISML.renderTemplate('productNotFound.isml', {
			pid : productId
		});
	} else {
		ISML.renderTemplate('productFound.isml', {
			myProduct : product
		});
	}

}

exports.Start = guard.ensure([ 'get' ], start);
