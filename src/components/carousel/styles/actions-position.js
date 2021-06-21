const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Previous/Next Position",
  "@cq:styleGroupMultiple": true,
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Overlay Carousel Panel",
      "@cq:styleId": "carousel--actions-position:overlay",
    }),
    new CQStyle({
      "@cq:styleLabel": "Top",
      "@cq:styleId": "carousel--actions-position:top",
    }),
    new CQStyle({
      "@cq:styleLabel": "Right",
      "@cq:styleId": "carousel--actions-position:right",
    }),
    new CQStyle({
      "@cq:styleLabel": "Bottom",
      "@cq:styleId": "carousel--actions-position:bottom",
    }),
    new CQStyle({
      "@cq:styleLabel": "Left",
      "@cq:styleId": "carousel--actions-position:left",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center - Horizontal",
      "@cq:styleId": "carousel--actions-position:center-x",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center - Vertical",
      "@cq:styleId": "carousel--actions-position:center-y",
    }),
  ]
})