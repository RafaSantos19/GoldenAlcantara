import { Link } from "react-router-dom"

import contact from "../../data/contact"
import formatPhone from "../../utils/formatPhone"
import "./Contato.css"

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.47 1.5-1.47H17V4.96c-.37-.05-1.13-.16-2.15-.16-2.13 0-3.6 1.3-3.6 3.7V11H8.8v3h2.45v8z" />
    </svg>
  )
}

const channels = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: formatPhone(contact.phone),
    description: "O jeito mais rápido de tirar dúvidas e saber sobre disponibilidade.",
    href: `https://wa.me/${contact.whatsapp}`,
    action: "Chamar no WhatsApp",
    external: true,
    featured: true
  },
  {
    id: "phone",
    label: "Telefone",
    value: formatPhone(contact.phone),
    description: "Para falar diretamente com o canil.",
    href: `tel:${contact.phone.replace(/\D/g, "")}`,
    action: "Ligar agora"
  },
  {
    id: "email",
    label: "E-mail",
    value: contact.email,
    description: "Para informações mais detalhadas.",
    href: `mailto:${contact.email}`,
    action: "Enviar e-mail"
  },
  {
    id: "address",
    label: "Endereço",
    value: contact.address,
    description: "Atendimento com visita combinada previamente.",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`,
    action: "Abrir no mapa",
    external: true
  }
]

const steps = [
  "Entre em contato pelo WhatsApp ou telefone.",
  "Receba informações sobre filhotes, atendimento e visita.",
  "Se fizer sentido, alinhamos os próximos passos com você."
]

const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`
const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

export default function Contato() {
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__content">
          <span className="contact-eyebrow">Contato</span>
          <h1>Fale com o Canil Golden Alcantara</h1>
          <p className="contact-hero__lead">
            Tire dúvidas, consulte disponibilidade e combine seu atendimento de forma rápida e
            direta.
          </p>

          <div className="contact-hero__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <a href={`tel:${contact.phone.replace(/\D/g, "")}`}>Ligar agora</a>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-section__heading">
            <span className="contact-eyebrow">Canais de atendimento</span>
            <h2>Escolha o melhor canal para falar com a gente</h2>
          </div>

          <div className="contact-cards">
            {channels.map((channel) => (
              <article
                key={channel.id}
                className={`contact-card ${channel.featured ? "contact-card--featured" : ""}`}
              >
                <span>{channel.label}</span>
                <strong>{channel.value}</strong>
                <p>{channel.description}</p>
                <a
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  {channel.action}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section contact-section--soft">
        <div className="container contact-info">
          <div className="contact-note">
            <span className="contact-note__label">Antes da visita</span>
            <h2>Combine seu atendimento com antecedência</h2>
            <p>
              Recomendamos entrar em contato antes de ir ao canil. Assim conseguimos organizar o
              melhor momento para receber você e apresentar nossa estrutura com calma.
            </p>
          </div>

          <div className="contact-socials">
            <span className="contact-note__label">Redes sociais</span>
            <h2>Acompanhe o dia a dia do canil</h2>
            <p>
              Você também pode conhecer mais do nosso trabalho e falar com a gente pelas redes.
            </p>

            <div className="contact-socials__list">
              {contact.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {socialIcons[social.id]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-map">
          <div className="contact-map__content">
            <span className="contact-eyebrow">Mapa</span>
            <h2>Veja onde o canil esta localizado</h2>
            <p>
              Use o mapa para ter uma referencia rapida da regiao. Para visitas, o ideal continua
              sendo combinar o atendimento antes.
            </p>
            <a href={mapsSearchHref} target="_blank" rel="noreferrer">
              Abrir no Google Maps
            </a>
          </div>

          <div className="contact-map__frame">
            <iframe
              title="Mapa com a localizacao do Canil Golden Alcantara"
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-process">
          <div className="contact-section__heading">
            <span className="contact-eyebrow">Como funciona</span>
            <h2>Um contato simples e direto</h2>
          </div>

          <div className="contact-process__list">
            {steps.map((step, index) => (
              <article key={step} className="contact-process__item">
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container contact-cta__inner">
          <div>
            <span className="contact-eyebrow">Próximo passo</span>
            <h2>Quer agilizar o atendimento?</h2>
            <p>Fale com a gente pelo WhatsApp e receba as orientações iniciais rapidamente.</p>
          </div>

          <div className="contact-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
            <Link to="/sobre">Conhecer o canil</Link>
          </div>
        </div>
      </section>
    </>
  )
}
