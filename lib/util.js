var _ = require('lodash');
var balanced = require('balanced-match');

module.exports.unwrap_color = function(color) {
	return color.replace(/color\((.*)\)/, '$1');
}

module.exports.parse_balanced = function(input) {
	var parsed;
	var value = input;
	var options = {};
	while (parsed = balanced('(', ')', value)) {
		var pre = parsed.pre.split(/\s+/);
		options[pre[pre.length - 1].replace(/\s*/, '')] = parsed.body;
		value = parsed.post + ' ' + pre.slice(0, pre.length - 1).join(' ');
	}
	_.each(value.split(/\s+/), function(k) {
		options[k] = true;
	});
	return options;
}
