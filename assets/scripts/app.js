'use strict';
import style from 'styles/main.scss';

import { axios } from './plugins';
import Vue from 'vue';
import router from './router';
import store from './store';
import QuotationTool from './quotation-tool';

Vue.config.productionTip = false;

new Vue({
    store,
    router,
    ...QuotationTool
});
