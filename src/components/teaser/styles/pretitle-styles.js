const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = ["header","footer","tag","pill"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Pretitle Styles",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `teaser--pretitle:${key}`,
    "@cq:styleLabel": `Pretitle Style - ${key.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}`,
  }))
})