const plugin = require('tailwindcss/plugin');

module.exports = plugin(({ addBase, theme }) => {
  for (let mode in theme('colors')) {
    let styles = { [`.${mode}`]: {}};
    for (let colorName in theme(`colors.${mode}`)) {
      let colors = {};
      for (let colorVariant in theme(`colors.${mode}.${colorName}`)) {
        colors[`--color-${colorVariant}`] = theme(`colors.${mode}.${colorName}.${colorVariant}`);
      }
      if (colorName === ':root') styles[`.${mode}`] = colors;
      else styles[`.${mode}`][`.${colorName}`] = colors;
    }
    addBase(styles);
  }
});