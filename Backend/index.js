const express = require('express');
const fs = require('fs')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.options('*', cors());

app.get('/todo', (req, res) => {
    fs.readFile('./Todos.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        res.json({code: 200 , data : JSON.parse(data)})
      })
});
app.post('/todo', (req, res) => {
    res.send('Hello World, from express');
});
app.put('/todo', (req, res) => {
    res.send('Hello World, from express');
});
app.delete('/todo', (req, res) => {
    res.send('Hello World, from express');
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
