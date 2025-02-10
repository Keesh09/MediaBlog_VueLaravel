// Define Vue feature flags
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Define feature flags
if (process.env.NODE_ENV === 'production') {
  (window as any).__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;
}

createApp(App).use(store).use(router).mount('#app')
