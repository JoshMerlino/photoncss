module.exports = {
    entry: "./src/js/photon.js",
    output: {
        filename: "photon.js",
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
        }]
    },
	resolve: {
		extensions: [".js"],
        alias: {
            "photoncss": path.join(__dirname, "./src/js/photon.js"),
            "@photoncss": path.join(__dirname, "./modules"),
        }
    }
}
