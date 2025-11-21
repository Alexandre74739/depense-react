import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    return (
        <div className="compteur-controls"> 
            <input type="month" />
            <input 
                type="number" 
                placeholder="Montant du mois en €)"
            />
        </div>
    )
}

export default Compteur;