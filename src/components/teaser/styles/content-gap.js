const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = ["none","xs","sm","md","lg","xl","2xl"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Space Between Content Elements",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `teaser--gap:${key}`,
    "@cq:styleLabel": `Space Between Content Elements - ${key.charAt(0).toUpperCase() + key.slice(1)}`,
  }))
})