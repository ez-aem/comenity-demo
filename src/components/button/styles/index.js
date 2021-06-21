const { CQStyleGroups } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  ...require("../../_common/styles/index"),
  require("./icons"),
  require("./outline"),
  require("./font-size"),
  require("./rounded"),
  require("./sr-only"),
  require("./toggle"),
])