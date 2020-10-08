const express = require('express')
const app = express()
// import {User} from './entities'


// console.log(db)

app.get('/', async (req, res) =>{

   
    // const user = new User("med", "ouioui")
     
    
    // if(! await user.save()) return res.status(500).json({
    //     message: 'we are sorry, this was an Internal server error, please try again later! '
    // })

    // else res.send('GoodBye ...')
})


// TODO 
     // ! make a controller adapter factory and a controller Adapter for all controllers 
    // ! make the Registrycontroller and the LoginController
   // ! inside the controllers call the use case function
  // ! inside the use case call entity (do the business logic and )
 // ! call the DAO (Data Access Object) to add the entity.doc() to the DB
// ! return a response with a body equial to entity.model()


module.exports = app;








// app.get('/addDoc', async (req, res) =>{
//    const docRef = db.collection('users').doc()
   
//    const doc1 = await docRef.set({
//        usrename: 'med',
//        password: '14785'
//    })

//    if(!doc1){
//         res.status(500)
//         res.json({
//             msg: 'error'
//         })
//    }else {
//         res.status(200)
//         res.json(doc1)
//    }
// })

// app.get('/docs', async (req, res) =>{
//     const snapShot = await db.collection('users').get()
//     const users = await db.collection('users')
//     if(!snapShot){
//         console.log('snapShot empty.......')
//         res.status(500).json({
//             msg: 'err ..'
//         })
//     }
//     else{
        
//         snapShot.forEach(user => {
//             console.log(user.id, " ",  user.data())
//             // users.doc(user.id).collection('messages').doc().set({
//             //     userId : user.id,
//             //     body: 'Hello Guys'
//             // })
//         });
//         res.status(200).json({
//             msg:'naadi'
//         })
//     } 
    
// })

// app.get('/msg', async (req, res) =>{
//     const snapShot = await db.collection('users').get()
//     const users = await db.collection('users')
    

//     if(!snapShot){
//         console.log('snapShot empty.......')
//         res.status(500).json({
//             msg: 'err ..'
//         })
//     }

//     else{
        
//         snapShot.forEach( async user => {
//             console.log(user.id, " ",  user.data())
//             // const messages = await users.doc(user.id).collection('messages').get()
//                 console.log("|\n".repeat(10))
//             // messages.forEach(message => {
//             //     console.log(message.id, " ", message)
//             // })
//             const sub_collections = await users.doc(user.id).listCollections() 
//             sub_collections.forEach( async sub_c => {
//                 console.log(sub_c.parent.id)
//                 const doc_parent = await sub_c.parent.get()
//                 console.log(doc_parent.id, doc_parent.data())
//             })
//         });
//         res.status(200).json({
//             msg:'naadi'
//         })
//     } 
    
// })
