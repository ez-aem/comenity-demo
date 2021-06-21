const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    // new CQStyle({
    //   "@cq:styleLabel": "Preset Name",
    //   "@cq:styleId": "accordion--preset:preset-name",
    // }),
    new CQStyle({
      "@cq:styleLabel": "Default",
      "@cq:styleId": "accordion--preset:border",
    }),
    new CQStyle({
      "@cq:styleLabel": "Flush",
      "@cq:styleId": "accordion--preset:border-0",
    }),
  ]
})