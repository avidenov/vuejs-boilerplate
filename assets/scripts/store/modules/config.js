import * as types from '../mutation-types'

let apiUrl = 'https://api.vuejs-boilerplate.com';

if(window.apiUrl) {
    apiUrl = window.apiUrl;
}

// state
export const state = {
    api: {
        baseUrl: apiUrl,
        version: 'v1',
        url: apiUrl + '/v1'
    },
};

// getters
export const getters = {
    apiBaseUrl: state => state.api.baseUrl,
    apiVersion: state => state.api.version,
    apiUrl: state => state.api.url,
};
