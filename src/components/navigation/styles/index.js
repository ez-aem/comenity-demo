const { CQStyleGroups } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  ...require("../../_common/styles/index"),
  require("../../_common/styles/flex-direction"),
  require("../../_common/styles/align-items"),
  require("../../_common/styles/justify"),
  require("../../_common/styles/gap"),
  require("../../_common/styles/grid-columns"),
  require("../../_common/styles/padding"),
  require("../../_common/styles/box-shadow"),
])