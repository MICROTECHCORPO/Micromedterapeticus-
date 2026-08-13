/**
 * MicroMed Therapeutics - Frontend Client
 * MTC Global Holding
 */
import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>MicroMed Therapeutics</h1>
      <h2>MTC Global Holding</h2>
      <p>Właściciel: <strong>Daniel Leśniak</strong></p>
      <hr />
      <h3>Wyceny Licencyjne:</h3>
      <ul>
        <li><strong>Polska:</strong> od 50 000 PLN</li>
        <li><strong>Europa (UE):</strong> od 25 000 EUR</li>
        <li><strong>Ameryka i Azja:</strong> od 40 000 USD</li>
      </ul>
      <p>Oficjalna aplikacja: <a href="https://micromedterapeticus.base44.app/" target="_blank" rel="noreferrer">micromedterapeticus.base44.app</a></p>
    </div>
  );
}

export default App;
