'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedService, setSelectedService] = useState('debutant');
  const [userName, setUserName] = useState('');
  const [booked, setBooked] = useState(false);

  const services: Record<string, { title: string; price: string; desc: string }> = {
    debutant: {
      title: "Éveil & Technique Vocale de Base",
      price: "15 000 XOF / mois",
      desc: "Idéal pour maîtriser sa respiration, placer sa voix et éliminer les tensions."
    },
    chorale: {
      title: "Harmonisation & Chant Choral",
      price: "25 000 XOF / mois",
      desc: "Apprenez à chanter en polyphonie et à écouter les autres pupitres."
    },
    pro: {
      title: "Coaching Scénique & Studio Pro",
      price: "45 000 XOF / mois",
      desc: "Accompagnement personnalisé pour enregistrement et performance live."
    }
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName) {
      setBooked(true);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0b0f19', color: '#ffffff', fontFamily: 'sans-serif', padding: '1.5rem 1rem' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        
        {/* En-tête */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ backgroundColor: '#2563eb', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '15px', fontSize: '0.75rem', fontWeight: 'bold' }}>
            ✨ PRODUCTION READY
          </span>
          <h1 style={{ fontSize: '2rem', marginTop: '0.8rem', marginBottom: '0.3rem' }}>Vocal Coach Pro</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            Sélectionnez un service, inscrivez votre client et lancez la session immédiatement.
          </p>
        </div>

        {/* Sélection des services */}
        <h3 style={{ fontSize: '1.1rem', color: '#38bdf8', marginBottom: '0.8rem' }}>1. Choisissez le service vocal</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '1.5rem' }}>
          {Object.entries(services).map(([key, val]) => (
            <div 
              key={key}
              onClick={() => { setSelectedService(key); setBooked(false); }}
              style={{ 
                backgroundColor: selectedService === key ? '#1e293b' : '#111827', 
                border: selectedService === key ? '2px solid #3b82f6' : '1px solid #374151',
                padding: '1rem', 
                borderRadius: '8px', 
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '0.3rem' }}>
                <span>{val.title}</span>
                <span style={{ color: '#38bdf8' }}>{val.price}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Formulaire de réservation / inscription du client */}
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #374151' }}>
          <h3 style={{ fontSize: '1.1rem', color: '#38bdf8', marginTop: 0, marginBottom: '0.5rem' }}>2. Inscrire le client au service</h3>
          <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1rem' }}>
            Service sélectionné : <strong style={{ color: '#fff' }}>{services[selectedService].title}</strong>
          </p>

          {booked ? (
            <div style={{ backgroundColor: '#065f46', color: '#d1fae5', padding: '1rem', borderRadius: '6px', textAlign: 'center' }}>
              ✅ Inscription validée pour <strong style={{ color: '#fff' }}>{userName}</strong> ! Le client peut accéder au studio virtuel.
            </div>
          ) : (
            <form onSubmit={handleBooking} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input 
                type="text" 
                placeholder="Nom complet du client ou élève..." 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #4b5563', backgroundColor: '#0b0f19', color: '#fff' }}
              />
              <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                Valider et Activer l'accès
              </button>
            </form>
          )}
        </div>

      </div>
    </main>
  );
}
