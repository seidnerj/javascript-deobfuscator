const path = require('path');

module.exports = {
    entry: './src/index.ts',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'deobfuscator.js',
        path: path.resolve(__dirname, 'web'),
        globalObject: 'this',
        library: {
          name: 'deobfuscator',
          type: 'umd',
        },        
    }
};
