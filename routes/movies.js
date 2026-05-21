const express = require('express');

const router = express.Router();

let movies = [
    {
        id: 1,
        name: 'Avengers',
        seatsAvailable: 50
    },
    {
        id: 2,
        name: 'Interstellar',
        seatsAvailable: 30
    },
    {
        id: 3,
        name: 'Inception',
        seatsAvailable: 40
    }
];

/*
    GET ALL MOVIES
*/
router.get('/', (req, res) => {

    res.json(movies);
});

/*
    BOOK TICKET
*/
router.post('/book/:id', (req, res) => {

    const movieId = parseInt(req.params.id);

    const movie = movies.find(m => m.id === movieId);

    if (!movie) {
        return res.status(404).json({
            message: 'Movie not found'
        });
    }

    if (movie.seatsAvailable <= 0) {
        return res.status(400).json({
            message: 'No seats available'
        });
    }

    movie.seatsAvailable--;

    res.json({
        message: `Ticket booked for ${movie.name}`,
        seatsLeft: movie.seatsAvailable
    });
});

module.exports = router;