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
        setSpend([...spend, { date, number }]);

        // Calcul le total des dépenses
        setTotal(prevTotal => prevTotal + parseFloat(number)); // prevTotal est la valeur la plus récente

        // Suppression des données dans les inputs
        setDate("");
        setNumber(0);
    }

    // Suppression d'une dépense
    const deleteSpend = (indexDelete) => {
        const itemDelete = spend[indexdelete];
        setTotal(prevTotal => prevTotal - parseFloat(itemDelete.number));
        setSpend(spend.filter((_,index) => index ))
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
                {spend
                    .slice()    // Copie le tableau pour ne pas modifier directement le state
                    .sort((a, b) => new Date(a.date) - new Date(b.date))    // Tri croissant
                    .map((item, index) => (
                        <div key={index} className="card">
                            <p className="date">{formatDate(item.date)}</p>
                            <p>Dépense : {item.number} €</p>
                            <button
                                className="delete-btn"
                                onClick={() => deleteSpend(index)}
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