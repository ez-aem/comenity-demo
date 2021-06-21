const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ 
  "@cq:styleGroupLabel": "Padding", 
  "@cq:styleGroupMultiple": true, 
})

for (let key in theme.spacing) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - All Screen Sizes`,
    "@cq:styleId": `var:p-${key}`,
  }));
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Horizontal Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - All Screen Sizes`,
    "@cq:styleId": `var:px-${key}`,
  }));
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Vertical Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - All Screen Sizes`,
    "@cq:styleId": `var:py-${key}`,
  }));
  for (let screen in theme.screens) {
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - Screen ${screen.toUpperCase()}`,
      "@cq:styleId": `${screen}:var:p-${key}`,
    }));
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `Horizontal Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - Screen ${screen.toUpperCase()}`,
      "@cq:styleId": `${screen}:var:px-${key}`,
    }));
    styles.addStyle(new CQStyle({
      "@cq:styleLabel": `Vertical Padding ${key.charAt(0).toUpperCase() + key.slice(1)} - Screen ${screen.toUpperCase()}`,
      "@cq:styleId": `${screen}:var:py-${key}`,
    }));
  }
}

module.exports = styles
