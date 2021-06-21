const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Box Shadow" })
for (let key in theme.boxShadow) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Shadow ${key.charAt(0).toUpperCase() + key.slice(1)}`,
    "@cq:styleId": `var:shadow-${key}`
  }))
}

module.exports = styles
