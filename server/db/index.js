const admin = require('firebase-admin')
const serviceAccountKey = require('./ServiceAccountKey.json')
import connection from './db.connection'



const db = connection(admin, serviceAccountKey);


export default db;



