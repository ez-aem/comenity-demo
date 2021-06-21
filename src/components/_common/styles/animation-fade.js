const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Animation - Fade In",
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": "Fade in Top",
      "@cq:styleId": "animate:fade-top",
      "@cq:styleClasses": "animate-in fade-top"
    }),
    new CQStyle({
      "@cq:styleLabel": "Fade in Right",
      "@cq:styleId": "animate:fade-right",
      "@cq:styleClasses": "animate-in fade-right"
    }),
    new CQStyle({
      "@cq:styleLabel": "Fade in Bottom",
      "@cq:styleId": "animate:fade-bottom",
      "@cq:styleClasses": "animate-in fade-bottom"
    }),
    new CQStyle({
      "@cq:styleLabel": "Fade in Left",
      "@cq:styleId": "animate:fade-left",
      "@cq:styleClasses": "animate-in fade-left"
    }),
  ]
})