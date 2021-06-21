const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = ["link","button","button-group","button-outline","button-outline-group"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Action Styles",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `teaser--action:${key}`,
    "@cq:styleLabel": `Action Style - ${key.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}`,
  }))
})