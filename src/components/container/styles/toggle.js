const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Toggle",
  "@cq:styleGroupMultiple": true,
})
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Toggle Target`,
  "@cq:styleId": `container--toggle:target`,
}))
for (let key in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Toggle Visibility at ${key.charAt(0).toUpperCase() + key.slice(1)} Screen Size`,
    "@cq:styleId": `container--toggle:${key}`,
  }))
}

module.exports = styles
