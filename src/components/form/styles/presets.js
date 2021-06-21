const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Default",
      "@cq:styleId": "form-container--preset:default",
    }),
    new CQStyle({
      "@cq:styleLabel": "Simple",
      "@cq:styleId": "form-container--preset:simple",
    }),
    new CQStyle({
      "@cq:styleLabel": "Underline",
      "@cq:styleId": "form-container--preset:underline",
    }),
    new CQStyle({
      "@cq:styleLabel": "Solid",
      "@cq:styleId": "form-container--preset:solid",
    }),
  ]
})