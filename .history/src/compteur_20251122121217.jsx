import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0)
    const [spend, setSpend] = useState([]);

    // tableau mise à jour avec date et number
    const addSpend = () => {
        setSpend([...spend, {date, number}]);
    }

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
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Montant du mois en €"
            />
            <button className="submit">Analyser</button>
        </div>
    )
}

export default Compteur;