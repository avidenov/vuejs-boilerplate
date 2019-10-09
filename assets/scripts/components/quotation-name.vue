<template>
    <div class="quotation-name">
        <div class="quotation-order">
            <label for="quotation-order">#</label>
            <input type="text" v-model="quotation.order" id="quotation-order">
        </div>
        <div class="quotation-name-input">
            <label for="quotation-name">Quotation name</label>
            <input type="text" v-model="quotation.name" id="quotation-name">
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'

    export default {

        props: ['quotation'],

        methods: {

        },
    }
</script>
