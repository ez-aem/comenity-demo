const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Flex Direction",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Horizontal",
      "@cq:styleId": "container:flex-row",
      "@cq:styleClasses": "var:flex-row"
    }),
    new CQStyle({
      "@cq:styleLabel": "Vertical",
      "@cq:styleId": "container:flex-col",
      "@cq:styleClasses": "var:flex-col"
    }),
    new CQStyle({
      "@cq:styleLabel": "Horizontal Reverse",
      "@cq:styleId": "container:flex-row-reverse",
      "@cq:styleClasses": "var:flex-row-reverse"
    }),
    new CQStyle({
      "@cq:styleLabel": "Vertical Reverse",
      "@cq:styleId": "container:flex-col-reverse",
      "@cq:styleClasses": "var:flex-col-reverse"
    }),
  ]
})