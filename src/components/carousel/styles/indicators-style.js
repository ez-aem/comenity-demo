const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Indicators Style",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Dots - Filled",
      "@cq:styleId": "carousel--indicators:dots-filled",
    }),
    new CQStyle({
      "@cq:styleLabel": "Dots - Outlined",
      "@cq:styleId": "carousel--indicators:dots-outlined",
    }),
    new CQStyle({
      "@cq:styleLabel": "Lines - Horizontal",
      "@cq:styleId": "carousel--indicators:lines-horizontal",
    }),
    new CQStyle({
      "@cq:styleLabel": "Lines - Vertical",
      "@cq:styleId": "carousel--indicators:lines-vertical",
    }),
  ]
})