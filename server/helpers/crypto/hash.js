const bcrypt = require('bcrypt')


export default async function hash(input){
    try {
        
        const hash = await bcrypt.hash(input, 10)
        return {
            hashDone: true,
            hash
        }
        
    } catch (error) {
        return {
            hashDone: false,
            error
        }
    }
    
}


async function compare(input, hash){

    try {
        const valid = await bcrypt.compare(input, hash)
        if(!valid) return {
            comparisonDone : true,
            valid : false
        }

        return {
            comparisonDone : true,
            valid : true
        }

    } catch (error) {

        return {
            comparisonDone : false,
            error
        }
    }
}




