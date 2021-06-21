const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = ["none","xs","sm","md","lg","xl","2xl"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Padding Around Content",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `teaser--content-p:${key}`,
    "@cq:styleLabel": `Content Padding - ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
})