import { useState, useEffect } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0);
    const [spend, setSpend] = useState([]);

    useEffect(() => {
        console.log("Dépenses :", spend);
    }, [spend]);

    const addSpend = () => {
        // On ajoute une carte
        setSpend([...spend, { date, number }]);

        // On vide les inputs
        setDate("");
        setNumber(0);
    };

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

            {/* Affichage des cards */}
            <div className="cards-container">
                {spend.map((item, index) => (
                    <div key={index} className="card">
                        <p><strong>Date :</strong> {item.date}</p>
                        <p><strong>Dépense :</strong> {item.number} €</p>
                        <button className="delete-btn">Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Compteur;
