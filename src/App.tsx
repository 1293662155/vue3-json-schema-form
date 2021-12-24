import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const logoUrl = require('./assets/logo.png')

export default defineComponent({
  name: 'App',
  setup() {
    const show = ref(false)

    const toggleShow = () => {
      show.value = !show.value
    }

    return () => {
      return (
        <div id="app">
          <img alt="My Vue logo" src={logoUrl} />
          {show.value && (
            <HelloWorld msg="Welcome to Your Vue.js + TypeScript App!!!"></HelloWorld>
          )}
          <button onClick={toggleShow}>toggle</button>
        </div>
      )
    }
  },
})
