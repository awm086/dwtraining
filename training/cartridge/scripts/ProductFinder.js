var ProductMgr = require('dw/catalog/ProductMgr');

var find = function (productId) {
	return ProductMgr.getProduct(productId)
}

exports.find = find;
