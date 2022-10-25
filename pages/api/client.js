import mongodb from '/lib/mongodb'
import Client from '/models/client'


export default async function (req, res) {
    await mongodb()

  try {
    const client = await new Client(req.body.values)
    await client.save()

    res.status(201).json({ success: true, data: client })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}