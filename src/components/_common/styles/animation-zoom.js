const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Animation - Zoom",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Zoom In",
      "@cq:styleId": "animate:zoom-in",
      "@cq:styleClasses": "animate-in zoom-in"
    }),
    new CQStyle({
      "@cq:styleLabel": "Zoom Out",
      "@cq:styleId": "animate:zoom-out",
      "@cq:styleClasses": "animate-in zoom-out"
    }),
  ]
})