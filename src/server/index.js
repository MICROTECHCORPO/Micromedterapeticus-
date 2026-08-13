/**
 * MicroMed Therapeutics - Server Engine
 * MTC Global Holding
 */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        project: 'MicroMed Therapeutics',
        owner: 'Daniel Leśniak',
        platform: 'https://micromedterapeticus.base44.app/'
    });
});

app.listen(PORT, () => {
    console.log(`[Server] MicroMed Therapeutics uruchomiony na porcie ${PORT}`);
});
