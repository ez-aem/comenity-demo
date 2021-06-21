const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Blur Beneath" })

for (let key in theme.backdropBlur) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Blur ${key}`,
    "@cq:styleId": `backdrop-blur${key === "DEFAULT" ? "" : `-${key}`}`,
    "@cq:styleClasses": `backdrop-filter backdrop-blur${key === "DEFAULT" ? "" : `-${key}`}`,
  }))
}

module.exports = styles