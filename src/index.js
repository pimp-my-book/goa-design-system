import Vue from 'vue'
require('./assets/tailwind.css')
import DisplayXLarge from './components/typogrpahy/DisplayXLarge.vue'
import DisplayLarge from './components/typogrpahy/DisplayLarge.vue'
import DisplaySmall from './components/typogrpahy/DisplaySmall.vue'
import FeatureText from './components/typogrpahy/FeatureText.vue'


const Components = {
    DisplayXLarge,
    DisplayLarge,
    DisplaySmall,
    FeatureText
}
Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components