
import './App.css';
// Dans my-app/src/App.js

import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/createTitle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        setTitle(''); // Réinitialisez le champ de titre après l'envoi
        console.log('Titre envoyé avec succès à la base de données');
      } else {
        console.error('Erreur lors de l\'envoi du titre');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du titre:', error);
    }
  };

  return (
    <div className="App">
      <h1>Formulaire pour envoyer le titre à la base de données</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez le titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default App;
