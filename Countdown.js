'use client';

import { useEffect, useState } from 'react';

const launchDate = new Date('2026-12-01T00:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = launchDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60)
  };
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Dias', value: time.days },
    { label: 'Horas', value: time.hours },
    { label: 'Minutos', value: time.minutes },
    { label: 'Segundos', value: time.seconds }
  ];

  return (
    <div className="stat-grid">
      {units.map((unit) => (
        <article key={unit.label} className="card stat-card">
          <p className="stat-value">{String(unit.value).padStart(2, '0')}</p>
          <p className="eyebrow">{unit.label}</p>
        </article>
      ))}
    </div>
  );
}
