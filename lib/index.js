var _ = require('lodash');
var myth = require('myth');
var mixin = require('rework-plugin-mixin');
var references = require('rework-plugin-references');
var ease = require('rework-plugin-ease');
var inherit = require('rework-inherit');
var clone = require('rework-clone');
var reworkNPM = require('rework-npm');

module.exports = function(options) {
	return function(stylesheet, rework) {
		rework.use(reworkNPM({
			root: options.root
		}));
		rework.use(inherit());
		rework.use(clone());
		rework.use(references());
		rework.use(ease());
		rework.use(mixin(_.merge(
			require('./buttons'),
			require('./alerts'),
			require('./triangles')
		)));
		rework.use(myth({features: {
			'import': false, // rework-npm is better
			prefixes: false  // use autoprefixer separately
		}}));
	}
}
