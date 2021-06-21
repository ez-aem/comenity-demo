const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Background Color" })

for (let key in theme.colors.light) {
  if (key !== ":root") {
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `Background Color ${key.charAt(0).toUpperCase() + key.slice(1)}`,
      "@cq:styleId": key,
    }))
  }
}

module.exports = styles