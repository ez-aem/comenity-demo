const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Justify Content", 
  "@cq:styleGroupMultiple": true 
});

styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify Start - All Screens`,
  "@cq:styleId": `var:justify-start`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify End - All Screens`,
  "@cq:styleId": `var:justify-end`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify Center - All Screens`,
  "@cq:styleId": `var:justify-center`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify Between - All Screens`,
  "@cq:styleId": `var:justify-between`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify Around - All Screens`,
  "@cq:styleId": `var:justify-around`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Justify Evenly - All Screens`,
  "@cq:styleId": `var:justify-evenly`,
}))

for (let screen in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify Start - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-start`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify End - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-end`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify Center - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-center`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify Between - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-between`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify Around - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-around`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Justify Evenly - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:justify-evenly`,
  }))
}

module.exports = styles;