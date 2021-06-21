const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Grid Columns", 
  "@cq:styleGroupMultiple": true, 
})

for (let key in theme.gridTemplateColumns) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `${key.charAt(0).toUpperCase() + key.slice(1)} Grid Column - All Screen Sizes`,
    "@cq:styleId": `var:grid-cols-${key}`,
  }))
  for (let screen in theme.screens) {
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `${key.charAt(0).toUpperCase() + key.slice(1)} Grid Column - Screen ${screen.toUpperCase()}`,
      "@cq:styleId": `${screen}:var:grid-cols-${key}`,
    }))
  }
}

module.exports = styles
