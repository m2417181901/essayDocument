const express:NodeRequire = require('express');
const app = express('');
const port = 3000;

app.get('/', (req:any, res:any) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log("sadasd", port);
})