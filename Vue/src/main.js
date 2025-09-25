import { createApp, h } from 'vue';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import App from './App.vue';

const app  = createApp({
    render: ()=>h(App)
});

app.mount('#app')
