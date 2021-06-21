const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Group Elements",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default - Non-Grouped",
      "@cq:styleId": "form:no-group",
    }),
    new CQStyle({
      "@cq:styleLabel": "Group",
      "@cq:styleId": "form:group",
    }),
  ]
})