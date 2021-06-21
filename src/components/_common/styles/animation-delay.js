const { CQStyle, CQStyleGroup } = require("../../../../aem-blueprint/styles/index")
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require('../../../../tailwind.config')
const { theme } = resolveConfig(tailwindConfig)

const styles = new CQStyleGroup({ "@cq:styleGroupLabel": "Animation - Delay" })

for (let key in theme.transitionDuration) {
  styles.addStyle(new CQStyle({
    "@cq:styleLabel": `Delay ${key}ms`,
    "@cq:styleId": `delay-${key}`,
  }))
}

module.exports = styles