module.exports = {
	'span': function(value) {
		value = value.replace(/\s*of\s*/, ' ').split(' ');
		if (value.length !== 2) throw 'Invalid number of arguments to span, should be like `span: 2 of 3`';
		return {
			'flex': '0 0 ' + (100 / parseInt(value[1]) * parseInt(value[0])) + '%'
		}
	}
}
