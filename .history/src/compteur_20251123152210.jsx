import { useCallback, useState, useEffect } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState(0)
    const [spend, setSpend] = useState([]);
    const [total, setTotal] = useState(0);

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

    // Tableau mise à jour avec date et number
    const addSpend = () => {
        if (!isValid) return;

        const newSpend = {
            id: Date.now(),   // identifiant unique
            date,
            number: parseFloat(number)
        };

        setSpend([...spend, newSpend]);

        // Calcul le total des dépenses
        setTotal(prevTotal => prevTotal + newSpend.number);

        // Réinitialise les inputs
        setDate("");
        setNumber(0);
    };

    // Suppression d'une dépense
    const deleteSpend = (id) => {
        const itemDelete = spend.find(item => item.id === id);
        if (!itemDelete) return;

        setTotal(prevTotal => prevTotal - itemDelete.number);
        setSpend(spend.filter(item => item.id !== id));
    };


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
                {spend
                    .slice()
                    .sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map((item) => (
                        <div key={item.id} className="card">
                            <p className="date">{formatDate(item.date)}</p>
                            <p>Dépense : {item.number} €</p>
                            <button
                                className="delete-btn"
                                onClick={() => deleteSpend(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))}

            </div>

            {/* Affichage du total uniquement si il y a au moins une dépense */}
            {spend.length > 0 && (
                <div className="total-container">
                    <p>Le total des dépense est de : {total} €</p>
                </div>
            )}
        </div>
    )
}

export default Compteur;