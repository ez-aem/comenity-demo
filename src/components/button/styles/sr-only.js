const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Screen Reader Only",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Screen Reader Only",
      "@cq:styleId": "button--sr-only",
      "@cq:styleClasses": "sr-only",
    }),
  ]
})