import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'uno.css'

import { createMUI } from 'shuimo-ui'
import 'shuimo-ui/dist/style.css'

const app = createApp(App)
app.use(createMUI())
app.mount('#app')
