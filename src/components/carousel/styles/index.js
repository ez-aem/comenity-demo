const { CQStyleGroups } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  ...require("../../_common/styles/index"),
  require("./actions-visibility"),
  require("./actions-position"),
  require('./indicators-visibility'),
  require('./indicators-position'),
  require('./indicators-style'),
])