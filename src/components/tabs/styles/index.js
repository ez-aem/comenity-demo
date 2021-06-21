const { CQStyleGroups } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  ...require("../../_common/styles/index"),
  require("./orientation"),
])