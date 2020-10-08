import { 
    InvalidPropertyError, 
    RequiredParameterError,
    UniqueConstraintError
} from '../helpers/errors';

export default function ({ dbAdapter }){
return class User {
    
    constructor({ username = new RequiredParameterError('password'),
                  passwaord = new RequiredParameterError('password')}){
        let _username = username
        let _passwaord = passwaord
        
        this.username = () => _username
        this.setUsername = (username) => {
            if(this.isValidUsername(username))
            _username = username
        }

        this.passwaord = () => _passwaord 
        this.setPassword = () => {

        }
        Object.preventExtensions(this);
        Object.freeze(this)
    }
    isValidUsername(username){
        if(!typeof username === 'string' ) 
            new InvalidPropertyError('Invalid Value for username, it should be string ')
        if(username.length < 4) 
            new InvalidPropertyError('Invalid Value for username, username should include more than 4 letters')
        
        // const user = db.dbAdapter.find({ username })
        // if(user) new UniqueConstraintError('username')
            
    }
    async save(){   
        console.log(users)
        if(!users) return false

        try {
            await users.doc().add(this)
            return true
        } catch (error) {
        console.log({
            func: 'User.save',
            error
        })
            return false
        }
    }

    // show(){
    //     console.log( "Class User -> "); console.log(this)
    // }
}
}


// console.log('_'.repeat(22))
// console.log(db)
// console.log('_'.repeat(22))
// console.log(getCollection)
// console.log('_'.repeat(22)) 


