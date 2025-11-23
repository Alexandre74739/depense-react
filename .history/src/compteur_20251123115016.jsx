import { useState } from "react";
import './Compteur.css';

function Compteur() {
    const [date, setDate] = useState("");
    const [number, setNumber] = useState("");
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

    // bouton actif uniquement si date + number remplis
    const isValid = date !== "" && number !== "" && Number(number) > 0;

    const addSpend = () => {
        if (!isValid) return;  // Sécurité

        setSpend([...spend, { date, number }]);

        setDate("");
        setNumber("");
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
                    min="1"
                />

                <button 
                    className="submit" 
                    onClick={addSpend}
                    disabled={!isValid}   // désactive le bouton
                >
                    Ajouter
                </button>
            </div>

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
    );
}

export default Compteur;
