const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    objectType: {
        type: String,
    },
    region: {
        type: String,
    },
    district: {
        type: String,
    },
    size: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
})

// module.export = mongoose.model('Offer', offerSchema);

export default mongoose.models['Offer'] || mongoose.model('Offer', offerSchema);