module.exports = {
	'span': function(value) {
		value = value.replace(/\s*of\s*/, ' ').replace(/\s*offset\s*/, ' ').split(' ');
		if (value.length !== 2 && value.length !== 3) throw 'Invalid number of arguments to span, should be like `span: 2 of 3` or `span: 1 of 3 offset 1`';
		var result = {};
		result['width'] = '' + (100 / parseInt(value[1]) * parseInt(value[0])) + '% !important';
		if (value.length === 3) result['margin-left'] = '' + (100 / parseInt(value[1]) * parseInt(value[2])) + '%';
		return result;
	}
}
