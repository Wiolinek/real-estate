// const { connectToDatabase } = require('../../lib/mongodb');
// const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {

//     switch (req.method) {
//         case 'GET': {
//             return getPosts(req, res);
//         }
//         case 'POST': {
//             return addPost(req, res);
//         }
//         case 'PUT': {
//             return updatePost(req, res);
//         }

//     }
//   }


// import mongodb from '../../lib/mongodb'
// import User from '../../models/User'

// export default async function handler (req, res) {
//   const { method } = req

//   await mongodb()

//   switch (method) {
//     case 'GET':
//       try {
//         const users = await User.find({})
//         res.status(200).json({ success: true, data: users })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     case 'POST':
//       try {
//         const user = await User.create(req.body)
//         res.status(201).json({ success: true, data: user })
//       } catch (error) {
//         res.status(400).json({ success: false })
//       }
//       break
//     default:
//       res.status(400).json({ success: false })
//       break
//   }
// }

import mongodb from '../../lib/mongodb';
import Region from '../models/region';

mongodb();

export default async (req, res) => {
  // res.json({test: 'test'})
  try {
    const regions = await Region.find({});
    res.status(200).json(regions);
  } catch (error) {
    res.status(400).json({success: false});
  }
}