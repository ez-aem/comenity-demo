const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Icon Position",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Icon Only",
      "@cq:styleId": "button--icon-position:only",
    }),
    new CQStyle({
      "@cq:styleLabel": "Icon Before Text",
      "@cq:styleId": "button--icon-position:before",
    }),
    new CQStyle({
      "@cq:styleLabel": "Icon After Text",
      "@cq:styleId": "button--icon-position:after",
    }),
  ]
})