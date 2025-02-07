import db from '../config/db.js';


const ajouterUneSalutation = (code_langue, langue, message) => {
    return new Promise((resolve, reject) => {

        const requete = 'INSERT INTO salutions(code_langue, langue, message) VALUES(?,?,?)';
        const params = [code_langue, langue, message]

        db.query(requete, params, (erreur, resultat) => {
            if(erreur){
                reject(erreur);
            }
            else{
                resolve(resultat);
            }
        })
    })
}

const listerLesSalutations = () => {
    return new Promise((resolve, reject) => {
        const requete = "SELECT code_langue, langue, message FROM salutations";

        db.query(requete, (erreur, resultat) => {
            if (erreur) {
                reject(erreur);
            } else {
                resolve(resultat);
            }
        });
    });
}

const envoyerParLangue = (code_langue) =>{
    return new Promise((resolve, reject) => {
        
        const requete = "SELECT message FROM salutations WHERE code_langue = ? ORDER BY RAND() LIMIT 1";
        const params = [code_langue];

        db.query(requete, params, (erreur, resultat) => {
            if(erreur){
                reject(erreur);
            }
            else{
                if (resultat && resultat.length > 0) {
                    resolve(resultat[0].message);
                } else {
                    resolve("Aucun Message trouvé pour cette langue");
                }
            }
        })
    })
}

const envoyerSansLangue = () =>{
    return new Promise((resolve, reject) => {
        
        const requete = "SELECT message FROM salutations ORDER BY RAND() LIMIT 1";

        db.query(requete, (erreur, resultat) => {
            if(erreur){
                reject(erreur);
            }
            else{
                if (resultat && resultat.length > 0) {
                    resolve(resultat[0].message);
                } else {
                    resolve(null);
                }
            }
        })
    })
}

export {
    ajouterUneSalutation,
    listerLesSalutations,
    envoyerParLangue,
    envoyerSansLangue
}