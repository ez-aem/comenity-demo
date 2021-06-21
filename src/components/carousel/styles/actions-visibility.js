const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Previous/Next Visibility",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Always Hidden",
      "@cq:styleId": "carousel--actions:none",
    }),
    new CQStyle({
      "@cq:styleLabel": "Visible on Hover",
      "@cq:styleId": "carousel--actions:hover",
    }),
    new CQStyle({
      "@cq:styleLabel": "Always Visible",
      "@cq:styleId": "carousel--actions:visible",
    }),
  ]
})