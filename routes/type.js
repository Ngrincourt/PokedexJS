let express = require('express');
let router = express.Router();
let Type = require('./../models/Type');

router.get('/type/:type', (request, response) => {
    Type.findOne({name: request.params.type}).populate('pokemons').then(type => {
        if (!type) return response.status(404).send('Type introuvable');

        response.render('types/show.html', {
            type: type,
            pokemons: type.pokemons
        });
    });
});

// Permet d'exécuter des actions en fonction du path appelé dans le navigateur
module.exports = router;
