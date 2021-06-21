const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Label Position",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Above",
      "@cq:styleId": "form--label:above",
    }),
    new CQStyle({
      "@cq:styleLabel": "Beside",
      "@cq:styleId": "form--label:above",
    }),
    new CQStyle({
      "@cq:styleLabel": "Screen Reader Only",
      "@cq:styleId": "form--label:sronly",
    }),
  ]
})