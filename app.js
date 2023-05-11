const express = require ('express');
const dbconnect = require('./dataBase/config');
const app = express();
const router = express.Router();
const routes = require('./routes/crudRoutes');

app.use("/api", routes);
app.use(express.json());

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

dbconnect();