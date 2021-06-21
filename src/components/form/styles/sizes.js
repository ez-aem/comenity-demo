const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Sizes",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default",
      "@cq:styleId": "form-container--size:default",
    }),
    new CQStyle({
      "@cq:styleLabel": "Small",
      "@cq:styleId": "form-container--size:small",
    }),
    new CQStyle({
      "@cq:styleLabel": "Large",
      "@cq:styleId": "form-container--size:large",
    }),
  ]
})