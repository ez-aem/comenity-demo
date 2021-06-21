const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Toggle Container",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Toggle state Open",
      "@cq:styleId": "button--toggle:open",
    }),
    new CQStyle({
      "@cq:styleLabel": "Toggle state Closed",
      "@cq:styleId": "button--toggle:closed",
    }),
  ]
})