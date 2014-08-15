module.exports.unwrap_color = function(color) {
	return color.replace(/color\((.*)\)/, '$1');
}
