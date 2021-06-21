const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styleGroup = new CQStyleGroup({
  "@cq:styleGroupLabel": "Round Corners",
  "@cq:styleGroupMultiple": true,
});

Object.keys(theme.borderRadius).forEach(key => {
  styleGroup.addStyle(new CQStyle({
    "@cq:styleId": `teaser--rounded:${key}`,
    "@cq:styleClasses": `teaser--rounded:${key} var:rounded${key === 'DEFAULT' ? '' : `-${key}`}`,
    "@cq:styleLabel": `Rounded - ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
  styleGroup.addStyle(new CQStyle({
    "@cq:styleId": `teaser--rounded-image:${key}`,
    "@cq:styleClasses": `teaser--rounded-image:${key} var:rounded${key === 'DEFAULT' ? '' : `-${key}`}`,
    "@cq:styleLabel": `Rounded Image - ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
  styleGroup.addStyle(new CQStyle({
    "@cq:styleId": `teaser--rounded-content:${key}`,
    "@cq:styleClasses": `teaser--rounded:${key} var:rounded${key === 'DEFAULT' ? '' : `-${key}`}`,
    "@cq:styleLabel": `Rounded Content - ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
});

module.exports = styleGroup;