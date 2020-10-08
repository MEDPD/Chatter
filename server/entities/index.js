import createUser from './User'
import createRoom from './Room'
import createMessage from './Message'

import { hashAdapter, sanitizeAdapter } from '../adapters'


const User = createUser({hashAdapter, sanitizeAdapter}) 


export default Object.freeze({
    User
})