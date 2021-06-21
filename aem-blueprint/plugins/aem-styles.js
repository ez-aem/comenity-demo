const plugin = require('tailwindcss/plugin')
const { resolve } = require('path')
const { writeFileSync } = require('fs')

module.exports = (stylesPath) => plugin(({ addBase, theme }) => {
  const styles = require(resolve(process.cwd(),stylesPath))
  for (let component in styles) { styles[component] = styles[component].format(); }
  writeFileSync(`./src/styles/index.json`,JSON.stringify(styles,null,2))
})