<template>
    <div class="home">
        <quotation-name></quotation-name>
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
        }),

        methods: {

        },

        created () {

        },

        mounted () {

        }
    }
</script>
