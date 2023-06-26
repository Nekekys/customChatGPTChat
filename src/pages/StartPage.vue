<template>
    <div class="flex flex-col items-center dark">
        <div class="h-[calc(100vh-5rem)] w-[calc(100vw-256px)] overflow-y-auto pt-5 text-white">
            <h3 class="text-center">Send your message for starting chat</h3>
        </div>
        <div class="w-[calc(100%-2rem)]">
            <form>
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Send</label>
                <div class="relative">
                    <input v-model="message" type="search" id="search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write message" required>
                    <button @click.prevent="submitFrom" type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StartPage",
        data() {
            return { message: '' }
        },
        methods: {
            submitFrom() {
                const chatId = Date.now()
                this.$store.commit('add', {message: this.message, id: chatId})
                this.message= ''
                this.$router.push(`/chat/${chatId}`)
            }
        }
    }
</script>

<style scoped>

</style>
