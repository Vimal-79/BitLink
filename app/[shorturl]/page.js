import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongo"


export default async function Page({ params }) {
    const { shorturl } = await params
    
    
    const client = await clientPromise;
    const db = client.db("BitLink")
    const collection = db.collection("Links")

    const doc = await collection.findOne({ "shortURL": shorturl })

    if(doc){
        // console.log(doc.url)
        redirect(doc.url)
    }
    else{
        redirect(process.env.NEXT_PUBLIC_BASE_PATH)
    }
}