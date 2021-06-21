const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = [25,50,75,"icon","icon-lg","icon-xl"];

module.exports = new CQStyleGroup({
  "@cq:styleGroupLabel": "Image Size",
  "cq:styles": styles.map(key => new CQStyle({
    "@cq:styleId": `teaser--image-size:${key}`,
    "@cq:styleLabel": `Image Size - ${typeof key === "number" ? `${key}%` : key.charAt(0).toUpperCase() + key.slice(1) }`
  }))
})
