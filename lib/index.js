var _ = require('lodash');
var myth = require('myth');
var mixin = require('rework-plugin-mixin');
var macro = require('rework-macro');
var palette = require('rework-palette');
var references = require('rework-plugin-references');
var ease = require('rework-plugin-ease');
var inherit = require('rework-inherit');
var clone = require('rework-clone');
var parent = require('rework-parent');
var reworkNPM = require('rework-npm');

module.exports = function(options) {
	return function(stylesheet, rework) {
		rework.use(reworkNPM({
			root: options.root
		}));
		rework.use(parent);
		rework.use(macro);
		rework.use(mixin(_.merge(
			require('./alerts'),
			require('./buttons'),
			require('./grid'),
			require('./triangles')
		)));
		rework.use(inherit());
		rework.use(clone());
		rework.use(references());
		rework.use(ease());
		rework.use(palette());
		rework.use(myth({features: {
			'import': false, // rework-npm is better
			prefixes: false  // use autoprefixer separately
		}}));
	}
}
