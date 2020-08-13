const path = require('path')

module.exports = {
  //entry: {
  //  util1: './src/util/util-commonjs.js',
  //  util2: './src/util/util-esm.js',
  //},
  //output: {
  //  filename: '[name].js',
  entry: './src/index.js',
  output: {
    filename: 'lib.js',
    path: path.resolve(__dirname, 'dist'),
    //library: "this",
    library: {
      root: 'MyLibrary',
      amd: 'my-library',
      commonjs: 'my-common-library'
    },
    libraryTarget: 'umd',
  },
  //mode: 'development',
}
