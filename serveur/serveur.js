const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;


console.log('Tentative de connexion à la base de données...');
// Connexion à la base de données MongoDB (vous devez avoir une instance MongoDB en cours d'exécution)
mongoose.connect('mongodb+srv://toniiannucci:Tonic@cluster0.sy4o3or.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  // Message de console indiquant que la connexion à la base de données a réussi
  console.log('Connexion à la base de données réussie.');
})
.catch((error) => {
  // Message de console en cas d'échec de la connexion
  console.error('Erreur de connexion à la base de données:', error);
});

const TitreSchema = new mongoose.Schema({
  texte: String,
});


const Titre = mongoose.model('Title', TitreSchema);

app.use(express.json());

// Endpoint pour enregistrer le titre dans la base de données
app.post('/enregistrer-titre', async (req, res) => {
  try {
    const { texte } = req.body;

    if (!texte) {
      return res.status(400).json({ message: "Le champ 'texte' est requis." });
    }

    const nouveauTitre = new Titre({ texte });
    await nouveauTitre.save();

    return res.status(201).json({ message: 'Titre enregistré avec succès.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Une erreur est survenue.' });
  }
});

app.listen(port, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${port}`);
});
app.use(cors());