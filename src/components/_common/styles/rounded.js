const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Round Corners" })
for (let key in theme.borderRadius) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Rounded ${key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()}`,
    "@cq:styleId": ` var:rounded${key === 'DEFAULT' ? '' : `-${key}`}`,
  }))
}

module.exports = styles
