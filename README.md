Projet NodeJS

Tutoriel disponible ici : https://www.youtube.com/watch?v=_N5xsboU2Ms&t=856s

Installation : 

- Installer Node.js : https://nodejs.org/en/
	
- Installer MongoDB Comunity Edition : https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
	-> Garder coché Install MongoDB as a Service
	-> Pour mettre en variable environnement : 
		-> CE PC -> Propriété -> Paramètre Système Avancée -> Variables environnements -> Path -> Modifier -> Nouveau -> 
			-> Ajouter le path du répertoire ou se trouve le exe de mongo D:\Programme\MongoDB\bin
		-> Verifier que mongo est bien installer en allant dans l'invit de command et en tapant mongo 
		-> Créer un dossier data a la base du disque dur, puis un dossier db a l'intérieur du dossier db a l'intérieur de data (D:\data\db)
		-> Vérifier que tout fonctionne correctement en tapant la commande mongod -- version
		-> Run la DB en tapant mongod 

- Création de la DataBase
	-> Taper mongo dans l'invite de commande (si vous voulez utiliser la ligne commande) 
	-> Créer une database pokedex en utilisant compass ou la ligne de commande (use pokedex) 
	-> Créer deux collections pokemons et types (db.pokemons et db.types) 
	-> Inserer des types avec la commande db.types.insert({name:"normal", color:"grey"})

- Récupération du projet 
	- Se placer dans le repertoire du projet avec l'invite de commande 
	- Taper npm install dans l'invite de commande 
	- Taper mongod pour lancer mongoDB
	- Taper node app.js pour lancer le serveur
	- Se rendre à l'adresse suivante : http://localhost:3000/
	
