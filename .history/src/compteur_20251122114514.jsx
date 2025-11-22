import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState()
    const [spend, setSpend] = use

    return (
        <div className="compteur-controls"> 
            <input type="date" />
            <input type="number" placeholder="Montant du mois en €" />
            <button className="submit">Analyser</button>
        </div>
    )
}

export default Compteur;