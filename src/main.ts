import { createApp } from 'vue';
import App from './App.vue';

import ComponentLibrary from 'ui-library-starter-2';

// import store, { key } from 'ui-library-starter-2/src/store/index';
//createApp(App).use(ComponentLibrary).use(store, key).mount('#app');

createApp(App).use(ComponentLibrary).mount('#app');
