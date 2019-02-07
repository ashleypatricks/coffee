const mongoose = require('mongoose');

let CoffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        trim: true,
        minLength: 1,
        unique: true, 
    },
    bean_size: {
        type: String,
        require: false,
        minLength: 1
    },
    quality_potential: {
        type: String,
        require: false,
        minLength: 1
    },
    yield: {
        type: String,
        require: false,
        minLength: 1
    },
    disease_resistancy: [
    { 
        leaf_rust: {
            type: String,
            required: false
        },
        coffee_berry_disease: {
            type: String,
            required: false
        },
        nematodes: {
            type: String,
            required: false
        },
    }
    ],
    producing_countries: [
        {
            type: String,
            required: false
        }
    ]
});

let Coffee = mongoose.model('Coffee', CoffeeSchema);


module.exports = {
    Coffee
}