var path = require('path');
var paths = require('./paths');

module.exports = {
  filename: '',
  filenameRelative: '',
  sourceMap: true,
  sourceRoot: '',
  moduleRoot: path.resolve('src').replace(/\\/g, '/'),
  moduleIds: false,
  comments: false,
  compact: false,
  code:true,
  presets: [ 'es2015', 'react', 'stage-0'],
  plugins: [
    'syntax-flow',
    'transform-decorators-legacy',
    ['babel-dts-generator', {
        packageName: paths.packageName,
        typings: '',
        suppressModulePath: true,
        suppressComments: false,
        memberOutputFilter: /^_.*/
    }]
  ]
};
