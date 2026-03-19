import { Link } from "react-router-dom"

import contact from "../../data/contact"
import site from "../../data/site"
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

const addressText = contact.address.full
const phoneDigits = contact.phone.replace(/\D/g, "")

const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressText)}`
const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(addressText)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

function getChannelValue(source) {
  if (source === "phone") return formatPhone(contact.phone)
  if (source === "email") return contact.email
  if (source === "address") return addressText
  return ""
}

function getChannelHref(source) {
  if (source === "whatsapp") return `https://wa.me/${contact.whatsapp}`
  if (source === "phone") return `tel:${phoneDigits}`
  if (source === "email") return `mailto:${contact.email}`
  if (source === "address") return mapsSearchHref
  return "#"
}

export default function Contato() {
  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero__content">
          <span className="contact-eyebrow">{contact.page.hero.eyebrow}</span>
          <h1>{contact.page.hero.title}</h1>
          <p className="contact-hero__lead">{contact.page.hero.description}</p>

          <div className="contact-hero__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              {contact.page.hero.primaryButtonLabel}
            </a>
            <a href={`tel:${phoneDigits}`}>{contact.page.hero.secondaryButtonLabel}</a>
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
            {contact.page.channels.map((channel) => (
              <article
                key={channel.id}
                className={`contact-card ${channel.featured ? "contact-card--featured" : ""}`}
              >
                <span>{channel.label}</span>
                <strong>{getChannelValue(channel.valueSource)}</strong>
                <p>{channel.description}</p>
                <a
                  href={getChannelHref(channel.hrefSource)}
                  target={channel.hrefSource === "whatsapp" || channel.hrefSource === "address" ? "_blank" : undefined}
                  rel={channel.hrefSource === "whatsapp" || channel.hrefSource === "address" ? "noreferrer" : undefined}
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
            <span className="contact-note__label">{contact.page.visitNote.eyebrow}</span>
            <h2>{contact.page.visitNote.title}</h2>
            <p>{contact.page.visitNote.description}</p>
            <p className="contact-note__hours">{contact.businessHours.join(" | ")}</p>
          </div>

          <div className="contact-socials">
            <span className="contact-note__label">{contact.page.socials.eyebrow}</span>
            <h2>{contact.page.socials.title}</h2>
            <p>{contact.page.socials.description}</p>

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
            <span className="contact-eyebrow">{contact.page.map.eyebrow}</span>
            <h2>{contact.page.map.title}</h2>
            <p>{contact.page.map.description}</p>
            <a href={mapsSearchHref} target="_blank" rel="noreferrer">
              {contact.page.map.action}
            </a>
          </div>

          <div className="contact-map__frame">
            <iframe
              title={`Mapa com a localização de ${site.brand.name}`}
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
            <span className="contact-eyebrow">{contact.page.process.eyebrow}</span>
            <h2>{contact.page.process.title}</h2>
          </div>

          <div className="contact-process__list">
            {contact.page.process.steps.map((step, index) => (
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
            <span className="contact-eyebrow">{contact.page.cta.eyebrow}</span>
            <h2>{contact.page.cta.title}</h2>
            <p>{contact.page.cta.description}</p>
          </div>

          <div className="contact-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              {contact.page.cta.primaryButtonLabel}
            </a>
            <Link to={contact.page.cta.secondaryButton.path}>
              {contact.page.cta.secondaryButton.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
