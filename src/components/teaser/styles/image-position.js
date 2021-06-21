const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Image Position", 
  "@cq:styleGroupMultiple": true 
});

styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Left - All Screen Sizes`,
  "@cq:styleId": `var:flex-row`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Top - All Screen Sizes`,
  "@cq:styleId": `var:flex-col`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Right - All Screen Sizes`,
  "@cq:styleId": `var:flex-row-reverse`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Bottom - All Screen Sizes`,
  "@cq:styleId": `var:flex-col-reverse`,
}))

for (let screen in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Left - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-row`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Top - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-col`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Right - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-row-reverse`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Bottom - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-col-reverse`,
  }))
}

module.exports = styles;