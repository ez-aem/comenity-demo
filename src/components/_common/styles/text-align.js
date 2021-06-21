const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Text Align",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Left",
      "@cq:styleId": "text-left",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center",
      "@cq:styleId": "text-center",
    }),
    new CQStyle({
      "@cq:styleLabel": "Right",
      "@cq:styleId": "text-right",
    }),
  ]
})