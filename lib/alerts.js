var util = require('./util');

module.exports = {
	'alert': function(color) {
		var tinted = 'color(' + util.unwrap_color(color) + ' tint(50%))';
		var shaded = 'color(' + util.unwrap_color(color) + ' shade(30%))';
		var dark = 'color(' + util.unwrap_color(color) + ' shade(55%))';
		return {
			'background-color': tinted,
			'color': dark,
			'border-color': shaded
		}
	}
}
