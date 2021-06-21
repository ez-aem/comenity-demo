const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Indicators Visibility",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Always Hidden",
      "@cq:styleId": "carousel--indicators:none",
    }),
    new CQStyle({
      "@cq:styleLabel": "Visible on Hover",
      "@cq:styleId": "carousel--indicators:hover",
    }),
    new CQStyle({
      "@cq:styleLabel": "Always Visible",
      "@cq:styleId": "carousel--indicators:visible",
    }),
  ]
})