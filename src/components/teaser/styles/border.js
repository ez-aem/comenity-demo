const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Border",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Border",
      "@cq:styleId": "teaser:border",
    }),
    new CQStyle({
      "@cq:styleLabel": "Image Border",
      "@cq:styleId": "teaser:image-border",
    }),
    new CQStyle({
      "@cq:styleLabel": "Content Border",
      "@cq:styleId": "teaser:content-border",
    }),
  ]
})