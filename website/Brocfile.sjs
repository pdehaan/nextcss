brequire rework;
brequire autoprefixer;
brequire source_map;
brequire file_mover;

var css = 'css'
	-> rework({
		sourcemap: true,
		compress: true,
		use: function(r) {
			r.use(require('nextcss')({root: './css'}));
		}
	})
	-> autoprefixer
	-> file_mover({
		files: {
			'main.css': 'bundle.css' // Browsers are confused when the original and compiled files have the same name
		}
	})
	-> source_map.extract;

module.exports = css +++ 'html' +++ 'prism';
