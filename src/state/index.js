import {createStore} from 'vuex'
import axios from "axios";
import {SaveOnLocalStorage} from "../utils";

const APIKey = '123'

export default createStore({
    state: {
        chats: [],
        isLoading: false
    },
    getters: {
        getChatForId: (state) => (id) => {
            return state.chats.find(elem => elem.id == id)
        }
    },
    mutations: {
        setChats (state, data) {
           state.chats = data ? data : []
        },
        add (state, data) {
            state.chats.push({
                id: data.id,
                name: 'chat' + String(state.chats.length+1),
                messages: [{
                    user: true,
                    id: 1,
                    message: data.message
                }]
            })
            SaveOnLocalStorage(state.chats)
        },
        addMessage (state, data) {
            state.chats = state.chats.map(element => {
                if(element.id == data.id){
                    element.messages = [...element.messages, {
                        user: data.user,
                        id: Date.now(),
                        message: data.message
                    }]
                }
                return element
            })
            SaveOnLocalStorage(state.chats)
        },
        startLoading (state) {
            state.isLoading = true
        },
        endLoading (state) {
            state.isLoading = false
        }
    },
    actions: {
        SendMessage (context, data) {
            context.commit('startLoading')
            axios({
                method: 'get',
                url: `https://custom-chat-gpt-chat.vercel.app/api/handler?message=${data.message}`,
            }).then(res => {
                context.commit('addMessage', {message: res.data.choices[0].text, id: data.id, user: false})
                context.commit('endLoading')
            })
        }
    }
})
