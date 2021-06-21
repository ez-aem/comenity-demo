const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Background Image Blend Mode",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Normal",
      "@cq:styleId": "var:bg-blend-normal",
    }),
    new CQStyle({
      "@cq:styleLabel": "Luminosity",
      "@cq:styleId": "var:bg-blend-luminosity",
    }),
    new CQStyle({
      "@cq:styleLabel": "Multiply",
      "@cq:styleId": "var:bg-blend-multiply",
    }),
    new CQStyle({
      "@cq:styleLabel": "Overlay",
      "@cq:styleId": "var:bg-blend-overlay",
    }),
    new CQStyle({
      "@cq:styleLabel": "Soft Light",
      "@cq:styleId": "var:bg-blend-soft-light",
    }),
  ]
})