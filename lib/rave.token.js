
var chargeAccountToken = require('../services/rave.token.account.charge');
var chargeCardToken = require('../services/rave.token.card.charge');
var preauthCardToken = require('../services/rave.token.card.preauth');

function TokenCharge(RaveBase){


	this.card = function (data) {

		return chargeCardToken(data, RaveBase);

	}

  this.preauth = function (data) {

    return preauthCardToken(data, RaveBase);

  }

	this.account = function (data) {

		return chargeAccountToken(data, RaveBase);

	}


}
module.exports = TokenCharge;