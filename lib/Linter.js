"use strict";

const initialKnownSchemas = {
	"http://json-schema.org/draft-07/schema#": {},
}

exports.Linter = Linter;
function Linter(selfURI, schema){
	this.metaschemas = initialKnownSchemas;
	this.rules = {};
}
