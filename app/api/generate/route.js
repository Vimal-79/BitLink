import clientPromise from "@/lib/mongo";

export async function GET(request) {
}


export async function POST(request) {
    const body = await request.json();
    console.log(body)

    try {
        const client = await clientPromise;
        const db = client.db("BitLink")
        const collection = db.collection("Links")

        const shorturl = await collection.findOne({ "shortURL": body.shortURL })
        if (shorturl) {
            return Response.json({ message: 'already exists', success: false, status: "failed" }, { status: 409 })
        }

        await collection.insertOne({
            "url": body.url,
            "shortURL": body.shortURL
        })

        return Response.json({ success: true, message: "links generated successfully", "url": body.url, "shortURL": body.shortURL })
    } catch (error) {
        console.error('MongoDB connection or operation failed:', error)
        return Response.json(
            {
                success: false,
                message: 'Database timeout or connection error. Please try again later.',
            },
            { status: 503 }
        )
    }
}
