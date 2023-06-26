<template>
    <div>
        <div class="p-3 flex" :class="data.user && 'bg-[#343541]'">
            <div>
                <div v-if="data.user" class="block w-[36px] min-w-[36px] h-[36px] rounded-full bg-[#3b5998]"></div>
                <img v-else class="w-[72px] max-w-[36px] rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png" alt="Rounded avatar">
            </div>
            <div class="ml-4 flex">
                {{ data.message }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageElement",
        props: {
            data: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>
