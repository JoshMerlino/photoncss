const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: [
		"./src/js/index.js",
		"./src/less/index.less",
	],
	output: {
		path: __dirname + "/dist",
		filename: "./photon.js"
	},
	module: {
        rules: [ {
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
        }, {
			test: /\.css/i,
			use: [ { loader: MiniCssExtractPlugin.loader, options: { publicPath: "./" } }, "css-loader" ]
        }, {
			test: /\.less/i,
			use: [ { loader: MiniCssExtractPlugin.loader, options: { publicPath: "./" } }, "css-loader", {
				loader: "less-loader",
				options: {
				    lessOptions: {
						plugins: [
							require("less-plugin-glob")
						]
				    },
				}
			}]
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: [ {
				loader: "file-loader",
				options: { name: "font/[contenthash].[ext]" }
			} ]
		}, {
			test: /\.(txt|md|pem|raw)$/,
			use: [ "raw-loader" ]
		} ]
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: "photon.css"
		}),
	]
};
