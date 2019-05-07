let mongoose = require('mongoose');

let typeSchema = new mongoose.Schema({
    name: String,
    color: {
        type: String,
        default:'red'
    }
});

// Virtual permette de calculer des champs ou de définir des relations entres les objets

typeSchema.virtual('pokemons', {
    ref: 'Pokemon',
    localField: '_id',
    foreignField: 'types'
});

var Type = mongoose.model('Type', typeSchema);

module.exports = Type;
