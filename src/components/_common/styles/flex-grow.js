const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Flex Grow",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Don't Fill Space",
      "@cq:styleId": "flex-grow-0",
    }),
    new CQStyle({
      "@cq:styleLabel": "Fill Flexible Space",
      "@cq:styleId": "flex-grow",
    }),
  ]
})

module.exports = styles
