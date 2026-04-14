'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('Preencha nome, email e mensagem.');
      return;
    }

    setStatus('Mensagem enviada. Retorno em ate 48 horas.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <form className="card form" onSubmit={onSubmit}>
      <label>
        Nome
        <input name="name" value={form.name} onChange={onChange} placeholder="Seu nome" />
      </label>

      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="seu@email.com" />
      </label>

      <label>
        Mensagem
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          maxLength={500}
          placeholder="Sua mensagem..."
        />
      </label>

      <button className="btn btn-solid" type="submit">Enviar Mensagem</button>
      {status ? <p className="muted">{status}</p> : null}
    </form>
  );
}
