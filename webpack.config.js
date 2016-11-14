module.exports = {
    entry: './src/js/main.jsx',
    output: {
        filename: './root/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react', "stage-1"]
                }
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    }
};
