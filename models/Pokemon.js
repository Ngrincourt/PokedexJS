let mongoose = require('mongoose');

var pokemonSchema = new mongoose.Schema({
    name: String,
    number: Number,
    description: String,
    picture: String,
    types: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Type' // On dit que les objectID sont une reference vers le modèle type
        }
    ]
});

var Pokemon =mongoose.model('Pokemon', pokemonSchema);

module.exports= Pokemon;
