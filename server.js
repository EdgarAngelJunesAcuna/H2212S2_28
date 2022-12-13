var express = require('express');

var app = express();

//recursos
app.use(express.static(__dirname,'/'));

//Enrutamiento
app.get('/', (req, res) => {res.render('menu.html');
});

app.listen(3000);
console.log('Server on port 3000');