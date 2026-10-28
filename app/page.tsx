'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: '#ffffff', fontFamily: 'sans-serif', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* En-tête */}
        <span style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
          ✨ Plateforme Professionnelle
        </span>
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '0.5rem' }}>Vocal Coach Pro</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '2rem' }}>
          La solution ultime de coaching vocal et de chorale en ligne pour propulser votre voix.
        </p>

        {/* Section Inscription / Premier Client */}
        <div style={{ backgroundColor: '#1e293b', padding: '2rem', borderRadius: '12px', border: '1px solid #334155', marginBottom: '2rem', textAlign: 'left' }}>
          <h3 style={{ marginTop: 0, color: '#38bdf8' }}>Espace Inscription - Premier Élève</h3>
          <p style={{ fontSize: '0.95rem', color: '#cbd5e1' }}>
            Inscrivez votre premier élève ou testez l'accès à la plateforme de coaching dès maintenant :
          </p>

          {submitted ? (
            <div style={{ backgroundColor: '#065f46', color: '#d1fae5', padding: '1rem', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
              🎉 Inscription réussie ! Bienvenue sur Vocal Coach Pro. Le compte de test est actif.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '1rem' }}>
              <input 
                type="email" 
                placeholder="Entrez l'email de l'élève..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: '1', padding: '0.75rem', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', minWidth: '200px' }}
              />
              <button type="submit" style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                Inscrire l'élève
              </button>
            </form>
          )}
        </div>

        {/* Aperçu des fonctionnalités du SaaS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', textAlign: 'left' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#38bdf8', marginTop: 0 }}>🎤 Cours en Direct</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Sessions de vocalises et suivi interactif en HD.</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#38bdf8', marginTop: 0 }}>📊 Analyse Vocale</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Suivi des progrès de justesse et de tessiture.</p>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', border: '1px solid #334155' }}>
            <h4 style={{ color: '#38bdf8', marginTop: 0 }}>💳 Paiement Sécurisé</h4>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Gestion des abonnements et abonnés intégrée.</p>
          </div>
        </div>

      </div>
    </main>
  );
            }
