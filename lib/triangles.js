/*! nextcss/triangles
 * Based on
 *   https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_triangle.scss
 */

var util = require('./util');

module.exports = {
	'triangle': function(value) {
		var options = util.parse_balanced(value);
		var width  = options.width  || options.size || '1em';
		var height = options.height || options.size || '1em';
		var bg = options.bgcolor || 'transparent';
		var fg = options.fgcolor || options.color || 'var(--black)';
		var style = {
			'display': 'inline-block',
			'user-select': 'none'
		};
		if (options.up || options.down || options.left || options.right) {
			width  = 'calc(' + width  + ' / 2)';
			height = 'calc(' + height + ' / 2)';
			var order = ['left', 'right', 'top']; // down
			if (options.up) order = ['left', 'right', 'bottom'];
			else if (options.right) order = ['top', 'bottom', 'left'];
			else if (options.left) order = ['top', 'bottom', 'right'];
			style['border-' + order[0]] = width  + ' solid ' + bg;
			style['border-' + order[1]] = width  + ' solid ' + bg;
			style['border-' + order[2]] = height + ' solid ' + fg;
		} else if (options['up-right'] || options['up-left']) {
			style['border-top']   = height + ' solid ' + fg;
		} else if (options['down-right'] || options['down-left']) {
			style['border-bottom'] = height + ' solid ' + fg;
		}
		if (options['up-right'] || options['down-right']) {
			style['border-left']  = width + ' solid ' + bg;
		} else if (options['up-left'] || options['down-left']) {
			style['border-right'] = width + ' solid ' + bg;
		}
		return style;
	}
}
