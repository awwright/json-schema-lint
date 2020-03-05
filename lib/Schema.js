"use strict";

module.exports.Schema = Schema;

function Schema(baseURI, object){
	this.baseURI = baseURI;
	// copy known keywords into `this`
	this.type = object.type;
	// ... etc
	this.unknownKeywords = {};
}
