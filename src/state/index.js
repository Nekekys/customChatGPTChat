import {createStore} from 'vuex'
import axios from "axios";
import {SaveOnLocalStorage} from "../utils";

const APIKey = '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'

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
            console.log(data)
           state.chats =  data
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
            const APIBody = {
                "model": "text-davinci-003",
                "prompt": data.message,
                "temperature": 0.9,
                "max_tokens": 600,
                "top_p": 1,
                "frequency_penalty": 0.0,
                "presence_penalty": 0.6,
                "stop": [" Human:", " AI:"]
            }
            axios({
                method: 'post',
                url: 'https://api.openai.com/v1/completions',
                data: JSON.stringify(APIBody),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${APIKey}`
                }
            }).then(res => {
                context.commit('addMessage', {message: res.data.choices[0].text, id: data.id, user: false})
                context.commit('endLoading')
            })
        }
    }
})
