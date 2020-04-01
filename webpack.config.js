const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
	mode: "production",
    entry: {
		"photon": [ "./src/js/photon.js", "./src/less/photon.less" ],
		"photon.min": [ "./src/js/photon.js", "./src/less/photon.less" ]
	},
    output: {
        filename: "[name].js",
		path: path.join(__dirname, "./dist")
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
					plugins: ["@babel/plugin-proposal-optional-catch-binding"],
                    presets: ["@babel/preset-env"]
                }
            }
        }, {
			test: /\.less/i,
			use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader" ]
		}, {
			test: /\.woff2/i,
			use: {
				loader: "file-loader",
				options: {
          			name: "[name].[ext]",
					outputPath: "fonts"
        		},
			}
		}]
    },
	resolve: {
		extensions: [".js"],
        alias: {
            "photoncss": path.join(__dirname, "./src/js/photon.js"),
            "@photoncss": path.join(__dirname, "./modules"),
        }
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: "photon.css"
		}),
		new MiniCssExtractPlugin({
			filename: "photon.min.css"
		}),
	],
	optimization: {
    	minimizer: [
			new UglifyJsPlugin({
				test: /\.min\.js(\?.*)?$/i,
				extractComments: /^\**!|@preserve|@license|@cc_on/i,
				uglifyOptions: {
		          	warnings: false,
		          	mangle: true,
		          	ie8: false,
		          	keep_fnames: false,
					minify: true
		        },
			}),
			new OptimizeCSSAssetsPlugin({
				assetNameRegExp: /\.min\.css(\?.*)?$/i,
				extractComments: /^\**!|@preserve|@license|@cc_on/i,
			})
		],
	    namedModules: false,
	    namedChunks: false,
	    nodeEnv: "production",
	    flagIncludedChunks: true,
	    occurrenceOrder: true,
	    sideEffects: true,
	    usedExports: true,
	    concatenateModules: true,
	    splitChunks: {
	        hidePathInfo: true,
	        minSize: 30000,
	        maxAsyncRequests: 5,
	        maxInitialRequests: 3,
	    },
	    noEmitOnErrors: true,
	    checkWasmTypes: true,
	    minimize: true,
	}
}
