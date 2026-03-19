import { Link } from "react-router-dom"

import contact from "../../data/contact"
import home from "../../data/home"
import puppies from "../../data/puppies"
import site from "../../data/site"
import homeHeroImage from "../../assets/images/home_hero1.jpeg"
import homeShowcaseImage from "../../assets/images/home_hero2.jpeg"
import "./Home.css"

export default function Home() {
  const brandName = site.brand.name
  const brandTagline = site.brand.tagline

  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="page-section__eyebrow">{home.hero.eyebrow}</span>
            <h1>{home.hero.title}</h1>
            <p className="home-hero__lead">{home.hero.description}</p>

            <div className="home-hero__actions">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
                {home.hero.primaryButton.label}
              </a>
              <Link to={home.hero.secondaryButton.path}>{home.hero.secondaryButton.label}</Link>
            </div>

            <dl className="home-hero__stats" aria-label="Destaques do atendimento">
              <div>
                <dt>Marca</dt>
                <dd>{brandName}</dd>
              </div>
              <div>
                <dt>Especialidade</dt>
                <dd>{puppies[0]?.breed || brandTagline}</dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>{contact.phone}</dd>
              </div>
            </dl>
          </div>

          <div className="home-hero__media">
            <img
              src={homeHeroImage}
              alt={`${brandName} em destaque na apresentação principal`}
            />
            <div className="home-hero__note">
              <strong>{brandName}</strong>
              <p>{brandTagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-section__heading">
            <span className="page-section__eyebrow">Nossos diferenciais</span>
            <h2>O que orienta nosso trabalho</h2>
          </div>

          <div className="home-highlights">
            {home.highlights.map((item) => (
              <article key={item.title} className="home-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container home-showcase">
          <div className="home-showcase__content">
            <span className="page-section__eyebrow">{home.showcase.eyebrow}</span>
            <h2>{home.showcase.title}</h2>
            <p>{home.showcase.description}</p>

            <div className="home-showcase__list">
              {puppies.map((puppy) => (
                <div key={puppy.id} className="home-showcase__item">
                  <strong>{puppy.breed}</strong>
                  <span>{puppy.description}</span>
                </div>
              ))}
            </div>

            <Link className="home-link-pill" to={home.showcase.buttonPath}>
              {home.showcase.buttonLabel}
            </Link>
          </div>

          <div className="home-showcase__media">
            <img src={homeShowcaseImage} alt={`Apresentação de filhotes do ${brandName}`} />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container home-process">
          <div className="home-section__heading">
            <span className="page-section__eyebrow">{home.process.eyebrow}</span>
            <h2>{home.process.title}</h2>
          </div>

          <div className="home-process__grid">
            {home.process.steps.map((step, index) => (
              <article key={step} className="home-process__step">
                <span>0{index + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta__inner">
          <div>
            <span className="page-section__eyebrow">{home.cta.eyebrow}</span>
            <h2>{home.cta.title}</h2>
            <p>{home.cta.description}</p>
          </div>

          <div className="home-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              {home.cta.primaryButton.label}
            </a>
            <Link to={home.cta.secondaryButton.path}>{home.cta.secondaryButton.label}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
