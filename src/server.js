const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, 'views');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

app.get('/programme/premiere', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere.html'));
});

app.get('/programme/terminale', (req, res) => {
  res.sendFile(path.join(viewsPath, 'terminale.html'));
});

app.get('/programme/premiere/mathematiques', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-mathematiques.html'));
});

app.get('/programme/premiere/mathematiques/fonctions', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-mathematiques-fonctions.html'));
});

app.get('/programme/premiere/mathematiques/derivation-interpretation-graphique', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-mathematiques-derivation.html'));
});

app.get('/programme/premiere/mathematiques/statistiques-probabilites', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-mathematiques-statistiques.html'));
});

app.get('/programme/premiere/mathematiques/resolution-problemes-techniques', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-mathematiques-problemes.html'));
});

app.get('/programme/premiere/physique-chimie', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-physique-chimie.html'));
});

app.get('/programme/premiere/ingenierie', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-ingenierie.html'));
});

app.get('/programme/premiere/systemes-information-numerique', (req, res) => {
  res.sendFile(path.join(viewsPath, 'premiere-sin.html'));
});

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(viewsPath, '404.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Serveur lance sur http://localhost:${PORT}`);
  });
}

module.exports = app;
