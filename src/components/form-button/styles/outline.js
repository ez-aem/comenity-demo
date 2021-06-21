const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Button Outline",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Outline",
      "@cq:styleId": "button:outline",
    }),
  ]
})