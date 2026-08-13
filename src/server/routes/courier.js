/**
 * MTC Courier & Logistics API Module
 * MicroMed Therapeutics / MTC Global Holding
 */
const express = require('express');
const router = express.Router();

let deliveries = [
    { id: 'MTC-DEL-001', recipient: 'Pacjent (Warszawa)', status: 'W drodze (GDP Zgodne)', courier: 'Kurier #12 (E-Skuter MTC)', secureVerification: 'NFC/PIN' },
    { id: 'MTC-DEL-002', recipient: 'Pacjent (Kraków)', status: 'Przyjęte do realizacji', courier: 'Kurier #04 (Auto Medyczne)', secureVerification: 'PESEL' }
];

router.get('/deliveries', (req, res) => {
    res.json({
        success: true,
        activeDeliveries: deliveries.length,
        fleetSystem: 'MTC Global Logistics & GDP Network',
        deliveries
    });
});

router.post('/deliveries', (req, res) => {
    const { recipient, address, medicationType } = req.body;
    const newDelivery = {
        id: `MTC-DEL-${Math.floor(100 + Math.random() * 900)}`,
        recipient: recipient || 'Pacjent Autoryzowany',
        address: address || 'Adres GDP Zweryfikowany',
        medicationType: medicationType || 'Fitokannabinoidy / Medycyna Konopna',
        status: 'Utworzone / Oczekuje na przypisanie floty MTC',
        timestamp: new Date().toISOString()
    };
    deliveries.push(newDelivery);
    res.status(201).json({
        success: true,
        message: 'Zlecenie kurierskie pomyślnie zintegrowane z siecią MTC',
        delivery: newDelivery
    });
});

module.exports = router;
