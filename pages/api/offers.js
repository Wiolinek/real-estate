import mongodb from '../../lib/mongodb';
import Offer from '../models/offer';

mongodb();

export default async (req, res) => {

  try {
    const offers = await Offer.find({});
    res.status(200).json({success: true, data: offers});
  } catch (error) {
    res.status(400).json({success: false, });
  }
}