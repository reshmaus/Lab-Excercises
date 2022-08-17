const express = require ("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const  {
    getHouses,
    createHouse,
    updateHouse,
    deleteHouse,
}= require('./controller');

// const ctrl = require('./controller')

app.get('/api/houses',getHouses);
app.delete('/api/houses/:id',deleteHouse);
app.post('/api/houses',createHouse);
app.put('/api/houses/:id',updateHouse);


const SERVER_PORT = 4004;
app.listen(SERVER_PORT,() => console.log(`listening on ${SERVER_PORT}`));
// app.listen(4004, () => console.log("Server running on port 4004"));