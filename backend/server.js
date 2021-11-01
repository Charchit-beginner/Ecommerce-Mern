const express = require('express');
const app = express();
const authRouter = require('./routes/auth')
const itemsRouter = require('./routes/items')
var cors = require('cors')
const connectMongo = require('./db');
connectMongo();


app.use(cors())
app.use(express.json())


app.use("/api/auth",authRouter)
app.use("/api/items",itemsRouter)

app.listen(5000, () => {
    console.log('Example app listening on port 5000!');
});

