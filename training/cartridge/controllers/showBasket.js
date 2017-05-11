/**
 * Description of the Controller and the logic it provides
 * 
 * @module controllers/showBasket
 */

'use strict';

// IMporting a ccd class.
var ISML = require('dw/template/ISML');
// Importing a script.
var guard = require('storefront_controllers/cartridge/scripts/guard');
var BasketMgr = require('dw/order/BasketMgr');
function start() {
	var Basket = BasketMgr.currentBasket;
	// check documentaion on help content via eclipse.
	ISML.renderTemplate('basket.isml',{
		Basket:Basket
	});
}

exports.Start = guard.ensure([ 'get'], start);
