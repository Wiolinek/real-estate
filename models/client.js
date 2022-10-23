const mongoose = require('mongoose');
// import dynamic from 'next/dynamic';

const clientSchema = new mongoose.Schema({
    estateType: {
        type: String,
        required: [true, 'choose the estate type'],
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
        required: [true, 'put your email address'],
    },
}, {collection: 'clients'})


export default mongoose.models['Client'] || mongoose.model('Client', clientSchema);