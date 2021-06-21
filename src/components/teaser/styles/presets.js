const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Card Horizontal",
      "@cq:styleId": "teaser--preset:card teaser--rounded:DEFAULT var:rounded teaser:border teaser--gap:2",
    }),
    new CQStyle({
      "@cq:styleLabel": "Card Vertical",
      "@cq:styleId": "teaser--preset:card teaser--rounded:DEFAULT var:rounded teaser:border teaser--gap:2",
    }),
  ]
})