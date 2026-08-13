/**
 * MTC Courier & Logistics API Module
 * MicroMed Therapeutics / MTC Global Holding
 */
const express = require('express');
const router = express.Router();

// Baza danych w pamięci (symulacja floty i zleceń kurierskich)
let deliveries = [
    { id: 'MTC-DEL-001', recipient: 'Pacjent (Warszawa)', status: 'W drodze', courier: 'Kurier #12 (E-Skuter MTC)', secureVerification: 'NFC/PIN' },
    { id: 'MTC-DEL-002', recipient: 'Pacjent (Kraków)', status: 'Przyjęte do realizacji', courier: 'Kurier #04 (Auto Medyczne)', secureVerification: 'PESEL' }
];

// Endpoint do pobierania statusu dostaw dla aplikacji i stron
router.get('/deliveries', (req, res) => {
    res.json({
        success: true,
        activeDeliveries: deliveries.length,
        fleetSystem: 'MTC Global Logistics',
        deliveries
    });
});

// Endpoint do tworzenia nowego zlecenia kurierskiego z apteki / e-recepty
router.post('/deliveries', (req, res) => {
    const { recipient, address, medicationType } = req.body;
    const newDelivery = {
        id: `MTC-DEL-${Math.floor(100 + Math.random() * 900)}`,
        recipient: recipient || 'Pacjent Anonimowy',
        address: address || 'Adres zweryfikowany',
        medicationType: medicationType || 'Standard Medyczny',
        status: 'Utworzone / Oczekuje na kuriera',
        timestamp: new Date().toISOString()
    };
    deliveries.push(newDelivery);
    res.status(201).json({
        success: true,
        message: 'Zlecenie kurierskie zostało zintegrowane z systemem MTC',
        delivery: newDelivery
    });
});

module.exports = router;
