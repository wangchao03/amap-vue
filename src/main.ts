// 需要添加chrome插件 vue devtools bete版 并禁用原来的devtools

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';

import { Button, message } from 'ant-design-vue';

const app = createApp(App);
app.use(store).use(router).mount('#app');

/* Automatically register components under Button, such as Button.Group */
app.use(Button);

app.config.globalProperties.$message = message;
