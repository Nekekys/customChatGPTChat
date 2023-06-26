export const SaveOnLocalStorage = (chats) => {
    localStorage.setItem('chats', JSON.stringify(chats))
}
export const GetOnLocalStorage = () => {
    return JSON.parse(localStorage.getItem('chats'))
}
