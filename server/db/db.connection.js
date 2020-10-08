

export default function(admin, serviceAccountKey){

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccountKey)
    })
    return admin.firestore();    
}