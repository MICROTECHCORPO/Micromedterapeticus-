/**
 * MicroMed Therapeutics - Frontend Client z widokiem logistyki
 * MTC Global Holding
 */
import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <header style={{ borderBottom: '2px solid #2e7d32', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ color: '#2e7d32', margin: '0' }}>MicroMed Therapeutics</h1>
        <h3 style={{ color: '#555', margin: '5px 0 0 0' }}>MTC Global Holding | Właściciel: Daniel Leśniak</h3>
      </header>

      <section style={{ marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '6px' }}>
        <h2>Zintegrowany System Kurierski (Ostatnia Mila)</h2>
        <p>Moduel logistyczny spięty bezpośrednio z aplikacjami głównymi i stroną <strong>micromedterapeticus.base44.app</strong>.</p>
        <ul>
          <li><strong>Śledzenie w czasie rzeczywistym:</strong> Statusy dostaw leków i fitokannabinoidów.</li>
          <li><strong>Bezpieczna weryfikacja odbiorcy:</strong> NFC, PIN oraz autoryzacja PESEL.</li>
          <li><strong>Flota MTC:</strong> Integracja z e-skuterami, pojazdami miejskimi i chłodniami farmaceutycznymi.</li>
        </ul>
      </section>

      <section style={{ background: '#fff', padding: '15px', borderRadius: '6px' }}>
        <h3>Wyceny Licencyjne i Regiony</h3>
        <p><strong>Polska:</strong> od 50 000 PLN | <strong>Europa (UE):</strong> od 25 000 EUR | <strong>Ameryka & Azja:</strong> od 40 000 USD</p>
        <p>Oficjalna platforma: <a href="https://micromedterapeticus.base44.app/" target="_blank" rel="noreferrer">micromedterapeticus.base44.app</a></p>
      </section>
    </div>
  );
}

export default App;
