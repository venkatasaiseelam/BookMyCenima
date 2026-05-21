const express = require('express');

const movieRoutes = require('./routes/movies');

const app = express();

app.use(express.json());

app.use('/api/movies', movieRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Movie Booking App running on port ${PORT}`);
});