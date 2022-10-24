import mongodb from '/lib/mongodb'
import Client from '/models/client'


export default async (req, res) => {
    await mongodb()

  try {
    const client = new Client(req.body.values)
    client.save()

    res.status(201).json({ success: true, data: client })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}