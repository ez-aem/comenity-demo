const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Orientation",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Horizontal",
      "@cq:styleId": "tabs:horizontal",
    }),
    new CQStyle({
      "@cq:styleLabel": "Vertical",
      "@cq:styleId": "tabs:vertical",
    }),
  ]
})