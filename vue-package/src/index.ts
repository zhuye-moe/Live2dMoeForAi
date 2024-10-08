import { App } from 'vue';
import Live2dMoeForAi from './components/Live2DMoeForAI.vue';

export default {
  install(app: App) {
    app.component('Live2dMoeForAi', Live2dMoeForAi);
  }
};
