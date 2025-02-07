
// Importer le fichier de router du fichier salutations.route
import {ajouterUneSalutation, listerLesSalutations, envoyerParLangue, envoyerSansLangue} from '../models/salutations.models.js';

const AjouterSalutation = (req, res) => {
        const code_langue = req.body.code_langue;
        const langue = req.body.langue;
        const message = req.body.message;
        
        if(!req.body.langue ||!req.body.code_langue || !req.body.message){
            console.log(" Un argument est absent")
            res.status(469);
            res.send("Il doit y avoir 3 arguments: code_langue(ex. fr), langue (ex.francais) et un message(ex. Bonjour)");
        }
        else{
            ajouterUneSalutation(req.body.code_langue, req.body.langue, req.body.message)
        }
}

//Ne fonctionne pas
const SalutationLangue = (req, res) => {
        // Récupère les paramètres de la requête ?langue
        const langue = req.query.langue;
    
        if(langue != ""){
                res.status(200);
                res.send(envoyerParLangue(langue));
            }
        else{
            res.send(envoyerSansLangue());
        };
}

//Merci Chatgpt pour le .then et .catch
const ListerSalutation = (req, res) => {
    listerLesSalutations()
        .then(salutations => {
            res.status(200).json(salutations); // Envoi des salutations en JSON
        })
        .catch(erreur => {
            res.status(500).json({ message: "Erreur lors de la récupération des salutations", erreur });
        });
}


export { AjouterSalutation, SalutationLangue, ListerSalutation };