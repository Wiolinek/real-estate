const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
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
    name: {
        type: String,
        required: [true, 'put your name'],
    },
    phone: {
        type: String,
        required: [true, 'put your phone number'],
    },
    email: {
        type: String,
        required: [true, 'put your emai laddress'],
    },
}, {collection: 'clients'})


export default mongoose.models['Client'] || mongoose.model('Client', clientSchema);