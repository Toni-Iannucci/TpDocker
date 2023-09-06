const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;

// Middleware pour gérer les demandes JSON
app.use(express.json());

// Connection à la base de données MongoDB
mongoose.connect('mongodb+srv://toniiannucci:<password>@cluster0.sy4o3or.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connecté à MongoDB');
})
.catch((err) => {
  console.error('Erreur de connexion à MongoDB:', err);
});

// Définir des routes pour votre API
app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne' });
});

// Écoutez le port spécifié
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});
