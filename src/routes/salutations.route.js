// Nous avons besoin d'importer le module express pour utiliser le Router
import express from 'express';
// Importer le fichier de router du fichier salutations.route
import { AjouterSalutation, SalutationLangue, ListerSalutation } from '../controllers/salutations.controller.js';
// Nous créons un objet router qui va nous permettre de gérer les routes
const router = express.Router();   

router.post('/salutations', AjouterSalutation );
router.get('/salutations', SalutationLangue );
router.get('/salutations/liste', ListerSalutation );

export default router;