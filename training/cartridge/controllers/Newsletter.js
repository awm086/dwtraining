/**
 * Description of the Controller and the logic it provides
 *
 * @module  controllers/newsletter
 */

'use strict';

// IMporting a ccd class.
var ISML = require('dw/template/ISML');
// Importing a script.
var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
	var newsletterForm = session.forms.newsletter;
	newsletterForm.clearFormElement();
	
	displayForm();
	
}

function displayForm() {
	ISML.renderTemplate('newsletter/newslettersignup', {
		ContinueURL : dw.web.URLUtils.https('Newsletter-HandleForm'),
	});
}

function handleForm() {
    var TriggeredAction = request.triggeredFormAction;
    
    if (TriggeredAction != null) {
    	// submitted 
    	if (TriggeredAction.formId == 'subscribe') 
    	{
    		var signup = require('~/cartridge/scripts/signup.js')
    		var NS = signup.subscribeWDB();
    		if (NS == null) {
    			session.forms.newsletter.email.invalidateFormElement();
    			displayForm();
    		}
    		else {
    			ISML.renderTemplate('newsletter/newslettersuccessV2.isml',{Subscription: NS});
    		}
    		
    	}
    }else {
    	displayForm();
    }
}




exports.Start = guard.ensure([ 'get' ], start);
exports.HandleForm = guard.ensure([], handleForm);
