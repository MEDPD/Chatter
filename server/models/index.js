import createUser from './User'
import { dbAdapter } from '../adapters'

const User = createUser({dbAdapter}) 


export default Object.freeze({
    User
})