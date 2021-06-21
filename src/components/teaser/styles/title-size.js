const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Title Font Size",
  "cq:styles": Object.keys(theme.fontSize).map(key => new CQStyle({
    "@cq:styleId": `teaser--title:${key}`,
    "@cq:styleLabel": `Title Font Size ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
})