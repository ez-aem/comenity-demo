const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Display",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default - Block",
      "@cq:styleId": "container:block",
    }),
    new CQStyle({
      "@cq:styleLabel": "Flex",
      "@cq:styleId": "container:flex",
    }),
    new CQStyle({
      "@cq:styleLabel": "Flex with Wrapping",
      "@cq:styleId": "container:flex-wrap",
      "@cq:styleClasses": "container:flex var:flex-wrap"
    }),
    new CQStyle({
      "@cq:styleLabel": "CSS Grid",
      "@cq:styleId": "container:grid",
    }),
  ]
})