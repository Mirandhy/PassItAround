const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`<h1>99 Bottles of wine on the wall</h1>
    <a href ='/98'>take one down,pass it around</a>`);
});

app.get('/:number_of_bottles', (req,res) => {
    
    let num = req.params.number_of_bottles;
    console.log(num)
    if (req.params.number_of_bottles>0) {
        res.send(`<h1>${req.params.number_of_bottles} bottles of wine on the wall</h1>
        <a href ='/${req.params.number_of_bottles -1}'>take one down, pass it around</a>`)
    }else {
        res.send(`<h1>No more bottles left</h1><a href ='/'>Start Over</a>`);
    }
    
});

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`);
});