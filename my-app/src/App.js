import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // Le contenu du titre que vous souhaitez envoyer à la base de données
  const titre = 'Titre pour la base de donnée';
  const serverUrl = 'http://localhost:3001';

  useEffect(() => {
    // Envoi automatique du titre à la base de données lors du chargement de la page
    async function envoyerTitre() {
      try {
        await fetch(`${serverUrl}/enregistrer-titre`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ texte: titre }),
        });
        console.log('Titre envoyé avec succès à la base de données.');
      } catch (error) {
        console.error('Une erreur est survenue lors de l\'envoi du titre à la base de données.', error);
      }
    }

    // Appel de la fonction pour envoyer le titre
    envoyerTitre();
  }, []); // Le tableau vide [] signifie que cela ne se déclenchera qu'une seule fois lors du chargement initial de la page

  return (
    <div className="App">
      {/* Le titre est affiché dans le h1 */}
      <h1>{titre}</h1>
    </div>
  );
}

export default App;
