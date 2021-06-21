const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = ["left","center","right"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Text Align",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `title--text-${key}`,
    "@cq:styleLabel": `Text ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
})