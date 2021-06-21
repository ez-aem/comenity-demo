const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Space Between Image and Content",
  "cq:styles": Object.keys(theme.padding).map(key => new CQStyle({
    "@cq:styleId": `var:space-${key}`,
    "@cq:styleClasses": `var:m-${key}`,
    "@cq:styleLabel": `Space Between Image and Content- ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
})