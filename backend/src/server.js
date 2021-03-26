const express = require('express');

const app = express();

app.use(express.json());

app.get("/", ( req, res)=>{
    res.send("Todo ok");
})

app.listen(process.env.PORT || 3333);