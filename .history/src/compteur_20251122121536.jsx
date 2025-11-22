import { useCallback, useState } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0)
    const [spend, setSpend] = useState([]);

    // tableau mise à jour avec date et number
    const addSpend = () => {
        setSpend([...spend, {date, number}]);
        console.log(set)

        // Suppression des données dans les inputs
        setDate = ("");
        setNumber = (0);
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
            <button className="submit" onClick={addSpend}>Ajouter</button>
        </div>
    )
}

export default Compteur;