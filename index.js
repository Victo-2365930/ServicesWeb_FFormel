// Importer le module express
import express from 'express';

// Importer morgan
import morgan from 'morgan';

// Importer le fichier de router du fichier salutations.route
import salutationRouter from './src/routes/salutations.route.js';

// Créer une application express
const app = express();
const PORT = 3000;

//Déclaration des Middlewares
app.use(express.json());

// On associe la route /api au router importé
app.use('/api/', salutationRouter);

app.get('/api', (req, res) => {
    res.send("<h1>Mon premier serveur web sur express !</h1>");
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});