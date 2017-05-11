var CustomObjectMgr = require("dw/object/CustomObjectMgr");
var Transaction = require("dw/system/Transaction");

function subscribe() {
	// Get data from form.
	var email = session.forms.newsletter.email.value
	var fname = session.forms.newsletter.fname.value
	var lname = session.forms.newsletter.lname.value

	// Create a newsletter custom object
	// we need to import customObjectManager
	try {

		Transaction.begin();
		var co = CustomObjectMgr.createCustomObject('NewsletterSubscription',
				email)

		// store dat to object,
		co.custom.firstName = fname;
		co.custom.lastName = lname;

		Transaction.commit()
	} catch (e) {
		Transaction.rollback();
		return null;
	}

	return co;
}

function subscribeWithDatabinding() {
	// Get data from form.
	// Create a newsletter custom object
	// we need to import customObjectManager
	try {

		Transaction.begin();
		var co = CustomObjectMgr.createCustomObject('NewsletterSubscription',
				session.forms.newsletter.email.value);
		sessions.forms.newsletter.copyTo(co);

		// store dat to object,
		//co.custom.firstName = fname;
		//co.custom.lastName = lname;

		Transaction.commit()
	} catch (e) {
		Transaction.rollback();
		return null;
	}

	return co;
}

exports.subscribe = subscribe;
exports.subscribeWDB = subscribeWithDatabinding;