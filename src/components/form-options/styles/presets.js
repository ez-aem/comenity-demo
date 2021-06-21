const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Presets",
  "cq:styles": [
    // new CQStyle({
    //   "@cq:styleLabel": "Preset Name",
    //   "@cq:styleId": "form-options--preset:preset-name",
    // }),
  ]
})