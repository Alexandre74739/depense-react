import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    return (
        <div className="compteur-controls"> 
            <input type="date" />
            <input type="number" placeholder="Montant du mois en €" />
            <button className="">Analyser</button>
        </div>
    )
}

export default Compteur;