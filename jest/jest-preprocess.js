const babelOptions = {
  presets: ['babel-preset-gatsby', /* replace with your babel presets here */],
  // add @babel/preset-typescript above for typescript support
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);