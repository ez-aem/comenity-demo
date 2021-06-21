const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Max Width" })
for (let key in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Max Width ${key.charAt(0).toUpperCase() + key.slice(1)}`,
    "@cq:styleId": `var:max-w-screen-${key}`,
  }))
}

module.exports = styles
