/**
 * MicroMed Therapeutics - Master Server Engine
 * MTC Global Holding | Właściciel: Daniel Leśniak
 */
const express = require('express');
const courierRouter = require('./routes/courier');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Podpięcie modułu kurierskiego
app.use('/api/courier', courierRouter);

app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        project: 'MicroMed Therapeutics',
        owner: 'Daniel Leśniak',
        platform: 'https://micromedterapeticus.base44.app/',
        modules: ['Telemedycyna', 'E-Recepty', 'MTC Courier Logistics']
    });
});

app.listen(PORT, () => {
    console.log(`[Server] MicroMed Therapeutics z modułem kurierskim uruchomiony na porcie ${PORT}`);
});
