<template>
    <Sidebar class="dark"/>
    <div style="padding-left: 256px" class="bg-[#444654] min-w-max h-[calc(100vh)]">
        <slot />
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue'
    import {GetOnLocalStorage} from "../utils";

    export default {
        name: "DefaultLayout",
        components: {Sidebar},
        mounted() {
            this.$store.commit('setChats',GetOnLocalStorage())
        }
    }
</script>

<style scoped>

</style>
