const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());


const urlDatabase = process.env.MONGODB_URI || 'mongodb://localhost/nodeapi';
mongoose.connect(urlDatabase, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err, res) => {
    if (err) { 
        console.log ('ERROR connecting to: ' + urlDatabase + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + urlDatabase);
    }
});


requireDir('./src/models');

app.use('/api', require('./src/routes'));





const port = process.env.PORT || 8080;
app.listen(port);