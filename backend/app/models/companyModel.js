const {Schema, model} = require('mongoose');

const companySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    employeeCount: {
        type: Number,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    }
})

module.exports = model('companies', companySchema);