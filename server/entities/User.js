import { 
    InvalidPropertyError, 
    UniqueConstraintError
} from '../helpers/errors';

import { RequireParam } from '../helpers'
import {Room} from './Room'
import requiredParam from '../helpers/RequireParam';

export default function ({ hashAdapter, sanitizeAdapter }){
return class User {
    
    constructor({ username = RequireParam('password'),
                  password = RequireParam('password'),
                  rooms = []}){
        let _username
        let _password
        
        // _username = sanitizeAdapter.sanitize(username)
        // password = sanitizeAdapter.sanitize(password)
        
        _password = hashAdapter.hash(password)

          
        let _rooms = rooms          
        // getters *********
        this.username = () => _username
        this.password = () => _password 
        this.rooms = () => _rooms
        // setters *******
        this.setUsername = (username) => {
            if(this.isValidUsername(username))
            _username = username
        }

        this.setPassword = (password) => {
            _password =  password
        }
        this.addRoom = (room) => {
            
        }
        // Object.seal(this);
        Object.freeze(this)
    }

    
    // class functions *****************
    isValidUsername(username){
        
        if(!typeof username === 'string' ) 
            new InvalidPropertyError('Invalid Value for username, it should be string ')
        if(username.length < 4) 
            new InvalidPropertyError('Invalid Value for username, username should include more than 4 letters')
        
        // const user = db.dbAdapter.find({ username })
        // if(user) new UniqueConstraintError('username')
        return true
    }
    
    // give to the database to store it 
    doc(){
        return Object.freeze({
            username : this.username(),
            password : this.password(), //! on donne pas le password
            rooms: this.rooms() 
        })
    }

    // give it the view
    model(){

        class UserModel{
            constructor({username = requiredParam('username'), rooms = RequireParam('rooms')}){
                    this.username = username,
                    this.rooms  = rooms()               
            }
        }
        
        return new UserModel(this.username(), this.rooms()) 
    }
}
}


// console.log('_'.repeat(22))
// console.log(db)
// console.log('_'.repeat(22))
// console.log(getCollection)
// console.log('_'.repeat(22)) 


