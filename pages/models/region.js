const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema({
    region: {
        type: String,
    }
})

// module.export = mongoose.model('Region', regionSchema);

export default mongoose.models['Region'] || mongoose.model('Region', regionSchema);