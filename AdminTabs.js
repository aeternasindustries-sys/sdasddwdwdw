'use client';

import { useState } from 'react';

const tabs = ['Visao Geral', 'Mensagens', 'Links', 'Arquivos'];

export default function AdminTabs() {
  const [active, setActive] = useState('Visao Geral');

  return (
    <>
      <div className="tab-row">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={active === tab ? 'tab active' : 'tab'}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 'Visao Geral' ? (
        <div className="admin-grid">
          <article className="card stat-card"><p className="stat-value">1</p><p className="eyebrow">Cliques Kickstarter</p></article>
          <article className="card stat-card"><p className="stat-value">1</p><p className="eyebrow">Wishlist Steam</p></article>
          <article className="card stat-card"><p className="stat-value">0</p><p className="eyebrow">Mensagens Totais</p></article>
          <article className="card stat-card"><p className="stat-value">0</p><p className="eyebrow">Nao Lidas</p></article>
        </div>
      ) : (
        <article className="card"><p className="section-title">{active}</p><p className="muted">Area em construcao.</p></article>
      )}
    </>
  );
}
