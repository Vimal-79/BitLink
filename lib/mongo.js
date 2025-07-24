
import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://BitLink:eJtIstkdiupIcYY7@cluster.x5vqvcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";
// const options = {
//     useNewUrlParser: true,
// }

let client
let clientPromise

if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
}
clientPromise = global._mongoClientPromise
client = new MongoClient(uri)
clientPromise = client.connect()


export default clientPromise
