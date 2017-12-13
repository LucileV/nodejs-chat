const express = require('express');
const app = express();
const port = 8080;

app.use('/public',express.static('public')); // Route pour la feuille de style


app.get('/', (req, res) => {        // Route vers la page login
    res.render('login');
});


app.get('/chat', (req, res) => {   // Route vers la page du chat
    res.render('index');
});


app.set('views', './views');
app.set('view engine', 'ejs');
app.listen(port, () => {
    console.log(`serveur en écoute sur le port ${port}`);

});
