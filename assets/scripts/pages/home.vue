<template>
    <div class="home" v-if="quotation">
        <quotation-name :quotation="quotation"></quotation-name>

        <hr>
        Quotation summary: <br>
        Name: {{ quotation.name }} <br>
        Order: {{ quotation.order }} <br>

        <span v-if="quotation.new_param">{{ quotation.new_param}}</span>

        <button @click="saveQuotation">Submit</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import QuotationName from '../components/quotation-name';

    export default {
        components: {
            QuotationName
        },

        data: () => ({

        }),

        computed: mapGetters({
            apiUrl: 'apiUrl',
            quotation: 'getQuotation',
        }),

        methods: {
            loadQuotation: async function() {
                this.$store.dispatch('fetchQuotation');
            },

            saveQuotation: async function() {
                this.$store.dispatch('storeQuotation', this.quotation).then(() => {
                    console.log('something after storing the quotation');
                    console.log('updated quotation', this.quotation);
                })
            }
        },

        created () {

        },

        mounted () {
            this.loadQuotation();
        }
    }
</script>
