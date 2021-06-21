const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Display Mode",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default - AEM Grid",
      "@cq:styleId": "form-container--display:default",
    }),
    new CQStyle({
      "@cq:styleLabel": "Flex",
      "@cq:styleId": "form-container--display:flex",
    }),
    new CQStyle({
      "@cq:styleLabel": "CSS Grid",
      "@cq:styleId": "form-container--display:grid",
    }),
  ]
})