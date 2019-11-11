const express = require('express');

const app = express();

app.use(require('cors')());
app.use(express.json());

require('./admin/index')(app)


app.listen('9999', () => {
    console.log('http://localhost:9999');
})


