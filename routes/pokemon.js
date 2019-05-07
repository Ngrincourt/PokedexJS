let express = require('express');
let router = express.Router();
let Pokemon = require('./../models/Pokemon');

let Type = require('./../models/Type');

router.get('/', (request, response) => {
    // Populate dis à moongose de récupérer les types de chaque pokémon
    Pokemon.find({}).populate('types').then(pokemons => {
        response.render('pokemons/index.html', {pokemons: pokemons});
    })
});

router.get('/new', (request, response) => {
    Type.find({}).then(types => {
        let pokemon = new Pokemon();
        response.render('pokemons/edit.html', {pokemon: pokemon, types: types, endpoint: '/'});
    })
});

router.get('/edit/:id', (request, response) => {
    Type.find({}).then(types => {
        Pokemon.findById(request.params.id).then(pokemon => {
            response.render('pokemons/edit.html', {
                pokemon: pokemon,
                types: types,
                endpoint: '/' + pokemon._id.toString()
            });
        })
    })

});

router.get('/:id', (request, response) => {
    Pokemon.findById(request.params.id).populate('types').then(pokemon => {
            response.render('pokemons/show.html', {pokemon: pokemon})
        },
        err => response.status(500).send(err));
});

router.get('/delete/:id', (request, response) => {
        Pokemon.findOneAndRemove({_id: request.params.id}).then(() => {
            response.redirect('/');
        })
    }
);


router.post('/:id?', (request, response) => {
    new Promise((resolve, reject) => {
        if (request.params.id) {
            Pokemon.findById(request.params.id).then(resolve, reject);
        } else {
            resolve(new Pokemon())
        }
    }).then(pokemon => {
        pokemon.name = request.body.name;
        pokemon.description = request.body.description;
        pokemon.number = request.body.number;
        pokemon.types = request.body.types;

        if (request.file) {
            pokemon.picture = request.file.filename;
        }

        return pokemon.save();
    }).then(() => {
        response.redirect('/');
    })
});


// Permet d'exécuter des actions en fonction du path appelé dans le navigateur
module.exports = router;
