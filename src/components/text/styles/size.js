const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Font Size" })

for (let key in theme.fontSize) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Font Size ${key.charAt(0).toUpperCase() + key.slice(1)}`,
    "@cq:styleId": `var:text-${key}`,
  }))
}

module.exports = styles