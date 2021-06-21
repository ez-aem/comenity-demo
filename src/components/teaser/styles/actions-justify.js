const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Actions Alignment", 
  "cq:styles": [
    new CQStyle({
      "@cq:styleLabel": `Justify Start`,
      "@cq:styleId": `teaser--actions:justify-start`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Justify End`,
      "@cq:styleId": `teaser--actions:justify-end`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Justify Center`,
      "@cq:styleId": `teaser--actions:justify-center`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Justify Between`,
      "@cq:styleId": `teaser--actions:justify-between`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Justify Around`,
      "@cq:styleId": `teaser--actions:justify-around`,
    }),
    new CQStyle({
      "@cq:styleLabel": `Justify Evenly`,
      "@cq:styleId": `teaser--actions:justify-evenly`,
    }),
  ]
});



module.exports = styles;