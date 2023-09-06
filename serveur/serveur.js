const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;


app.use(express.json());

// Connection à la base de données MongoDB
mongoose.connect('mongodb+srv://toniiannucci:Tonic@cluster0.sy4o3or.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connecté à MongoDB');
})
.catch((err) => {
  console.error('Erreur de connexion à MongoDB:', err);
});

// Définition des routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API fonctionne' });
});

// Écoute du port


app.post('/api/createTitle', (req, res) => {
    const { title } = req.body;
  
    const TitleModel = mongoose.model('Title', { title });
  
    const newTitle = new TitleModel({ title });
  
    newTitle.save((err) => {
      if (err) {
        console.error('Erreur lors de l\'insertion du titre:', err);
        res.status(500).send('Erreur lors de l\'insertion du titre');
      } else {
        console.log('Titre inséré avec succès');
        res.status(200).send('Titre inséré avec succès');
      }
    });
  });
  

  app.listen(port, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
  });
