const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Flex Direction", 
  "@cq:styleGroupMultiple": true 
});

styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Horizontal - All Screen Sizes`,
  "@cq:styleId": `var:flex-row`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Vertical - All Screen Sizes`,
  "@cq:styleId": `var:flex-col`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Horizontal Reverse - All Screen Sizes`,
  "@cq:styleId": `var:flex-row-reverse`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Vertical Reverse - All Screen Sizes`,
  "@cq:styleId": `var:flex-col-reverse`,
}))

for (let screen in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Horizontal - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-row`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Vertical - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-col`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Horizontal Reverse - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-row-reverse`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Vertical Reverse - Screen ${screen}`,
    "@cq:styleId": `${screen}:var:flex-col-reverse`,
  }))
}

module.exports = styles;