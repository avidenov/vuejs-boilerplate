import * as types from '../mutation-types'

export const state = {
    quotation: null
};

export const mutations = {
    [types.FETCH_QUOTATION_SUCCESS] (state, {quotation}) {
        state.quotation = quotation;
    },

    [types.STORE_QUOTATION_SUCCESS] (state, {quotation}) {
        // state.quotation = { ...quotation};
        state.quotation = null;
        state.quotation = quotation;
    }
};

export const actions = {
    fetchQuotation: async function({commit, dispatch, rootState}) {
        if(state.quotation) {
            return;
        }

        // get quotation from api
        let quotationObjectFromApi = {
            order: 3,
            name: 'First Quotation'
        };

        commit(types.FETCH_QUOTATION_SUCCESS, {quotation: quotationObjectFromApi})
    },

    storeQuotation: async function({commit, dispatch, rootState}, quotation) {

        // call to store the quotation in the DB
        // here we can return the whole quotation object if we want
        // after we've modified it as needed to be in the backend
        let quotationObjectFromApi = quotation;
        quotationObjectFromApi.new_param = 'Added after saving';

        commit(types.STORE_QUOTATION_SUCCESS, {quotation: quotationObjectFromApi})
    }
};

export const getters = {
    'getQuotation': state => state.quotation
};