<template>
    <div class="quotation-tool">
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        el: '#quotation-tool',

        components: {

        },

        data: () => ({

        }),

        computed: mapGetters({
            apiUrl: 'apiUrl',
        }),

        mounted: function() {

        },

        methods: {
            getLoggedUser: function() {

            }
        },
    }
</script>