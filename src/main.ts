import { createApp } from 'vue';
import App from './App.vue';

import ComponentLibrary from 'ui-library-starter-2';
import 'ui-library-starter-2/dist/ui-library-starter-2.css';

createApp(App).use(ComponentLibrary).mount('#app');
