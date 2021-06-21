const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({
  "@cq:styleGroupLabel": "Align Items",
  "@cq:styleGroupMultiple": true,
})

styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Items Start - All Screen Sizes`,
  "@cq:styleId": `var:items-start`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Items End - All Screen Sizes`,
  "@cq:styleId": `var:items-end`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Items Center - All Screen Sizes`,
  "@cq:styleId": `var:items-center`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Items Baseline - All Screen Sizes`,
  "@cq:styleId": `var:items-baseline`,
}))
styles.addStyle(new CQStyle({
  "@cq:styleLabel": `Items Stretch - All Screen Sizes`,
  "@cq:styleId": `var:items-stretch`,
}))

for (let screen in theme.screens) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Items Start - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:items-start`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Items End - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:items-end`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Items Center - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:items-center`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Items Baseline - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:items-baseline`,
  }))
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Items Stretch - Screen ${screen.toUpperCase()}`,
    "@cq:styleId": `${screen}:var:items-stretch`,
  }))
}

module.exports = styles