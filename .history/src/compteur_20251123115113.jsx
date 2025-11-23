import { useCallback, useState, useEffect } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0)
    const [spend, setSpend] = useState([]);

    // Converti une date en format JJ/MM/AAAA
    const formatDate = (dateString) => {
        if (!dateString) return "";
        const dateObj = new Date(dateString);
        const day = String(dateObj.getDate()).padStart(2, "0");
        const month = String(dateObj.getMonth() + 1).padStart(2, "0");
        const year = dateObj.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Vérifie qu'il y ait une date et un nombre de remplis dans les inputs
    const isValid = date !== "" && number !== "";

    // tableau mise à jour avec date et number
    const addSpend = () => {
        if (!isValid) return;
        setSpend([...spend, { date, number }]);

        // Suppression des données dans les inputs
        setDate("");
        setNumber(0);
    }

    return (
        <div className="compteur-controls">
            <div className="main-items">
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
                <button 
                    className="submit" 
                    onClick={addSpend}
                    disabled={!isValid}
                >
                    Ajouter
                </button>

            </div>
            {/* Affichage des cards */}
            <div className="card-container">
                {spend.map((item, index) => (
                    <div key={index} className="card">
                        <p>{formatDate(item.date)}</p>
                        <p>Dépense : {item.number} €</p>
                        <button className="delete-btn">X</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Compteur;