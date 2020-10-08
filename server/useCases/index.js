import message, {
    getMessage,
    addMessage,
    listMessages,
    editMessage, 
    deleteMessage
 } from './message'
import user, {
    getUser,
    addUser,
   listUsers,
   editUser, 
   deleteUser
} from './user'
import room, {
    getRoom,
    addRoom,
   listRooms,
   editRoom, 
   deleteRoom
} from './room'


export {
    getMessage,
    addMessage,
    listMessages,
    editMessage, 
    deleteMessage,
    getRoom,
    addRoom,
    listRooms,
    editRoom, 
    deleteRoom,
    getUser,
    addUser,
    listUsers,
    editUser, 
    deleteUser
}


export default Object.freeze({
    message,
    user,
    room
})