const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Indicators Position",
  "@cq:styleGroupMultiple": true,
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Overlay Carousel Panel",
      "@cq:styleId": "carousel--indicators-position:overlay",
    }),
    new CQStyle({
      "@cq:styleLabel": "Top",
      "@cq:styleId": "carousel--indicators-position:top",
    }),
    new CQStyle({
      "@cq:styleLabel": "Right",
      "@cq:styleId": "carousel--indicators-position:right",
    }),
    new CQStyle({
      "@cq:styleLabel": "Bottom",
      "@cq:styleId": "carousel--indicators-position:bottom",
    }),
    new CQStyle({
      "@cq:styleLabel": "Left",
      "@cq:styleId": "carousel--indicators-position:left",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center - Horizontal",
      "@cq:styleId": "carousel--indicators-position:center-x",
    }),
    new CQStyle({
      "@cq:styleLabel": "Center - Vertical",
      "@cq:styleId": "carousel--indicators-position:center-y",
    }),
  ]
})