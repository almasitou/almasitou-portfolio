'use client';

import {TelegramButton} from './ReferenceShared';
import '@/app/reference-contact.css';

export default function ReferenceContact({lang='ru',settings={}}) {
  const ru=lang==='ru';
  const email=settings.email || 'almasitou@gmail.com';
  return <footer className="reference-contact" id="contact">
    <div className="rfc-halo" aria-hidden="true"/>
    <div className="rfc-content">
      <p className="rfc-intro">{ru?'Обсудим ваш проект':'Let’s talk about your project'}</p>
      <h2>{ru?'Буду рад знакомству':'Let’s get acquainted'}</h2>
      <TelegramButton className="rfc-telegram">{ru?'Написать в Telegram':'Message on Telegram'}</TelegramButton>
      <a className="rfc-email" href={`mailto:${email}`}><span>{ru?'или на почту':'or by email'}</span> {email}</a>
      <nav className="rfc-socials" aria-label={ru?'Социальные сети':'Social profiles'}>
        <a href={settings.instagramUrl || 'https://instagram.com/almasitou.design'} target="_blank" rel="noreferrer">Instagram</a>
        <a href={settings.linkedinUrl || 'https://www.linkedin.com/in/almasitou'} target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </div>
    <div className="rfc-bottom"><span>© {new Date().getFullYear()} · {ru?'Алмас Кажымуратулы':'Almas Qajymuratuly'}</span><a href={`/resume_${lang}.pdf`} target="_blank" rel="noreferrer">{ru?'Скачать резюме':'Download résumé'} ↗</a></div>
  </footer>;
}
