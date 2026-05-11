import clientPromise from "@/lib/mongo"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db('BitLink')
    const collection = db.collection('Feedback')

    await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    })

    return Response.json({ success: true, message: 'Feedback submitted successfully.' })
  } catch (error) {
    console.error('Feedback API error:', error)
    return Response.json(
      { success: false, message: 'Unable to save Feedback. Please try again later.' },
      { status: 500 }
    )
  }
}
