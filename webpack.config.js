// Original Version
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
 // config object
 template: __dirname + '/app/index.html',
 filename: 'index.html',
 inject: 'body'
});

module.exports = {
 entry: __dirname + '/app/index.js',
 module: {
	 loaders: [
		 {
			 test: /\.js$/, // regexp
			 exclude: /node_modules/,
			 loader: 'babel-loader'
		 }
	 ]
 },
 output: {
	 filename: 'transformed.js',
	 path: __dirname + '/build'
 },
 plugins: [HTMLWebpackPluginConfig]
};


// New Version - debug later
/*
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
		// template: __dirname + '/app/index.html',
    filename: "[name].css",
		path: __dirname + '/build/css'
    // disable: process.env.NODE_ENV === "development"
});

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	// config object
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/, // regexp
				exclude: /node_modules/,
				loader: 'babel-loader'
			},

		]
	},
	//  rules: [{
  //           test: /\.scss$/,
  //           use: [{
  //               loader: "style-loader" // creates style nodes from JS strings
  //           }, {
  //               loader: "css-loader" // translates CSS into CommonJS
  //           }, {
  //               loader: "sass-loader" // compiles Sass to CSS
  //           }]
  //       }],

	// rules: [
	// 	{
	// 	// Sass loader
	// 		test: /\.scss$/,
	// 		use: ExtractTextPlugin.extract({
  //         fallback: 'style-loader',
  //         //resolve-url-loader may be chained before sass-loader if necessary
  //         use: ['css-loader', 'sass-loader']
	// 		// loaders: ['style-loader', 'css-loader', 'sass-loader']
	// 	})
	// ],
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	plugins: [
		HTMLWebpackPluginConfig,
		// extractSass
		// new ExtractTextPlugin('build/style.css', {
	  //           allChunks: true
	  //       })

		// new ExtractTextPlugin("style.css")

		// new ExtractTextPlugin({
	  //   filename:  (getPath) => {
	  //     return getPath('build/[name].css').replace('css/js', 'css');
	  //   },
	  //   allChunks: true
  	// })
	]
};

*/
