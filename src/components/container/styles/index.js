const { CQStyleGroups } = require("../../../../aem-blueprint/styles/index")

module.exports = new CQStyleGroups([
  require("./presets"),
  require("../../_common/styles/background-color"),
  require("../../_common/styles/backdrop-filter-blur"),
  require("../../_common/styles/blend"),
  require("../../_common/styles/animation-fade"),
  require("../../_common/styles/animation-zoom"),
  require("../../_common/styles/animation-duration"),
  require("../../_common/styles/animation-delay"),
  require("../../_common/styles/flex-grow"),
  require("../../_common/styles/max-width"),
  require("../../_common/styles/rounded"),
  require("./display"),
  require("../../_common/styles/flex-direction"),
  require("../../_common/styles/align-items"),
  require("../../_common/styles/justify"),
  require("../../_common/styles/gap"),
  require("../../_common/styles/grid-columns"),
  require("./equal-height"),
  require("../../_common/styles/padding"),
  require("../../_common/styles/box-shadow"),
  require("./toggle"),
])