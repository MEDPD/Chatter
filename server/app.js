const express = require('express')
const app = express()

// console.log(db)




module.exports = app;







// app.get('/', (req, res) =>{
//     res.send('GoodBye ...')
// })

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
