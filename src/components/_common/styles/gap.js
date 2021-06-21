const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Gap Between Children", 
  "@cq:styleGroupMultiple": true, 
})

for (let key in theme.gap) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Gap ${key.charAt(0).toUpperCase() + key.slice(1)} - All Screen Sizes`,
    "@cq:styleId": `var:gap-${key}`,
  }))
  for (let screen in theme.screens) {
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `Gap ${key.charAt(0).toUpperCase() + key.slice(1)} - Screen ${screen.toUpperCase()}`,
      "@cq:styleId": `${screen}:var:gap-${key}`,
    }))
  }
}

module.exports = styles
