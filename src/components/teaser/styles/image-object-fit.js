const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Image Fit", 
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": `None - Maintain Size and Aspect Ratio`,
      "@cq:styleId": `teaser--image:object-none`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Contain - Maintain Aspect Ratio but Don't Fill Space`,
      "@cq:styleId": `teaser--image:object-contain`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Cover - Maintain Aspect Ratio and Fill Space`,
      "@cq:styleId": `teaser--image:object-cover`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Fill - Ignore Aspect Ratio`,
      "@cq:styleId": `teaser--image:object-fill`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Scale Down - Maintain Aspect Ratio`,
      "@cq:styleId": `teaser--image:object-scale-down`,
    }),
  ]
});