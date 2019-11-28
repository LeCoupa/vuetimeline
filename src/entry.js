/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import VueTimelineUpdate from "./components/VueTimelineUpdate.vue"

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  // Declare the component
  Vue.component("vue-timeline-update", VueTimelineUpdate)

  // Configure the theme to use (dark will always be the default theme)
  if (!Vue.prototype.$gb) {
    Vue.prototype.$gb = {}
  }

  Vue.prototype.$gb.vuetimeline = {}
  Vue.prototype.$gb.vuetimeline.theme = (options || {}).theme || "dark"
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
