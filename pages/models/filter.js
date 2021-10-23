const mongoose = require('mongoose');

const filterSchema = new mongoose.Schema({
    objectType: {
        type: String,
        required: [true, 'choose the object type'],
    },
    region: {
        type: String,
        required: [true, 'choose the region'],
    },
    district: {
        type: String,
        required: [true, 'choose the ditrict'],
    },
})

// module.export = mongoose.model('Filter', filterSchema);

export default mongoose.models['Filter'] || mongoose.model('Filter', filterSchema);