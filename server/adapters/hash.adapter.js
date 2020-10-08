import bcrypt from 'bcrypt'
import {InternalServerError } from '../helpers/errors'

export default async function hash(input){
    try {
        
        const hash = await bcrypt.hash(input, 10)
        return hash
        
    } catch (error) {
        console.log(error)
         throw new InternalServerError()
        
    }
    
}


async function compare(input, hash){

    try {
        const valid = await bcrypt.compare(input, hash)
        if(valid) return true
        return false

    } catch (error) {
        
        console.log(error)
        throw new InternalServerError()     
    }
}




