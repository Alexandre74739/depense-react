import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    return (
        // AJOUT DE LA CLASSE compteur-controls
        <div className="compteur-controls"> 
            <input type="month" />
            <input 
                type="number" 
                placeholder="Montant du mois (0€)" // Ajout d'un placeholder
            />
        </div>
    )
}

export default Compteur;