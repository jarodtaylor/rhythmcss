var postcss = require('postcss');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        calc: {
          precision: 10
        }
      }
    })
  ]
};
