import createUser from './User'
import createRoom from './Room'
import createMessage from './Message'

import { hashAdapter, sanitizeAdapter } from '../adapters'


const User = createUser({hashAdapter, sanitizeAdapter}) 
const Room = createRoom({})
const Message = createMessage({})


export {
    User,
    Room,
    Message
}


export default Object.freeze({
    User,
    Room,
    Message
}) 