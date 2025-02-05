// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';
// Importer le fichier de router du fichier salutations.route
import salutations from '../models/salutations.models.js';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();   

router.get('/salutations/liste', (req, res) => {
    res.status(200);
    res.send(JSON.stringify(salutations));
});

// Router vers /api/salutations/ sans requête
router.get('/salutations', (req, res) => {
    // Récupère les paramètres de la requête ?langue
    const langue = req.query.langue;

    if(langue != ""){
        //insérer dans la constante une salutation random parmis celle contenu dans la langue
        let salutationFiltre = salutations.filter(salutation => salutation.langue === langue);
        //Si le tableau filtré est vide: resend 404 langue non supporté
            let indexAleatoire = Math.floor(Math.random() * salutationFiltre.length)
            res.status(200);
            res.send(salutationFiltre[indexAleatoire].message);
        }
        //Envoyer une salutation aléatoire dans la langue
    else{
        res.status(404);
        res.send("Langue non supporté. Entrez exemple: fr");
    }
});

router.post('/salutations', (req, res) => {
    const code_langue = req.body.code_langue;
    const langue = req.body.langue;
    const message = req.body.message;
    
    if(!req.body.langue ||!req.body.code_langue || !req.body.message){
        console.log(" un argument est absent")
    }
    else{
        ajouterSalutation(req.body.code_langue, req.body.langue, req.body.message)
    }
})

export default router;