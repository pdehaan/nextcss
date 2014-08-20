var util = require('./util');

module.exports = {
	'alert': function(color) {
		var tinted = 'color(' + util.unwrap_color(color) + ' tint(55%))';
		var shaded = 'color(' + util.unwrap_color(color) + ' shade(15%))';
		var dark = 'color(' + util.unwrap_color(color) + ' shade(55%))';
		return {
			'inherit': '%alert-base',
			'background-color': tinted,
			'color': dark,
			'border-color': shaded
		}
	}
}
