var _ = require('lodash');
var util = require('./util');

function buttonStyle(value) {
	var options = util.parse_balanced(value);
	var bg = util.unwrap_color(options.bgcolor || 'var(--black)');
	var fg = util.unwrap_color(options.fgcolor || 'var(--white)');
	var style = {
		'background-color': 'color(' + bg + ')',
		'color': 'color(' + fg + ')'
	};
	if (options.gradient) {
		style['background-image'] = 'linear-gradient(to bottom, color(' + bg + ' tint(10%)), color(' + bg + ' shade(15%)))';
		style['text-shadow'] = 'color(' + bg + ' shade(30%)) 0 1px'
	} else if (options['shade-gradient']) {
		style['background-image'] = 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.05) 40%, rgba(0, 0, 0, 0.1))';
	}
	if (options.borderonly) {
		var bordercolor = typeof options.borderonly === 'string' ? options.borderonly : fg;
		style['border'] = 'color(' + bordercolor + ') solid 2px';
	} else if (options.bordered) {
		style['border'] = 'color(' + bg + ' shade(30%)) solid 1px';
	} else {
		style['border'] = 'transparent solid 1px';
	}
	if (options.circle) {
		var size = typeof options.circle === 'string' ? options.circle : '9em';
		_.each(['border-radius', 'width', 'height', 'line-height'], function(prop) {
			style[prop] = size;
		});
		style['padding'] = '0';
		style['overflow'] = 'hidden';
	} else if (options.pill) {
		style['border-radius'] = '50em';
	} else if (options.rounded) {
		style['border-radius'] = '4px';
	}
	return style;
}

module.exports = {
	'button': function(value) {
		var result = buttonStyle(value);
		result['inherit'] = '%button-base'
		return result;
	},
	'button-style': buttonStyle
}
