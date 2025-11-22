import { useState } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0);
    const [spend, setSpend] = useState([]);

    return (
        <div className="compteur-controls">
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <input
                type="number"
                value={number}
                placeholder="Montant du mois en €"
                onChange={(e) => setNumber(Number(e.target.value))}
            />

            <button
                className="submit"
                onClick={() => {
                    console.log("Date :", date, "Montant :", number);
                }}
            >
                Analyser
            </button>
        </div>
    );
}

export default Compteur;
