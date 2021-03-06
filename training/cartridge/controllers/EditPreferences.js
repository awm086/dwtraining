/**
* Description of the Controller and the logic it provides
*
* @module  controllers/HelloWorld
*/

'use strict';

// IMporting a ccd class.
var ISML = require('dw/template/ISML');
// Importing a script.
var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
	// check documentaion on help content via eclipse.
	ISML.renderTemplate('helloWorld.isml', 
			{username: "ali"}
	);
}

function thisUserName() {
	return "ali2";
}
exports.Start = guard.ensure([ 'get'], start);
//exports.Start = guard.ensure([ 'get', 'https', 'loggedIn' ], start);
