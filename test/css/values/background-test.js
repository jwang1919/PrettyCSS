"use strict";
var util = require('./util');

exports.batch = util.makeVows('background', {
	// Test bg-layer value 
	'#fff': {
		'tokens': ['HASH'],
		'toString': '#fff',
		'unparsed': [],
		'warnings': []
	},
	'#fff, #000, #f00, blue': {
		'tokens': ['HASH', 'OPERATOR', 'S', 'HASH', 'OPERATOR', 'S', 'HASH', 'OPERATOR', 'S', 'IDENT'],
		'toString': '#fff, #000, #f00, blue',
		'unparsed': [],
		'warnings': ['illegal_value', 'illegal_value', 'illegal_value']
	},
	'url(a)': {
		'tokens': ['URL'],
		'toString': 'url(a)',
		'unparsed': [],
		'warnings': []
	},
	'url(a) alsjdjd': {
		'tokens': ['URL','S', 'IDENT'],
		'toString': 'url(a)',
		'unparsed': ['IDENT'],
		'warnings': []
	},
	'ahaskdfhsdf ':{
		'tokens': ['IDENT', 'S'],
		'toString': null,
		'unparsed': ['IDENT','S'],
		'warnings': []
	}
	
});
