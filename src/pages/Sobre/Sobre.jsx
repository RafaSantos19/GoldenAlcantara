import { Link } from "react-router-dom"

import about from "../../data/about"
import contact from "../../data/contact"
import aboutHeroImage from "../../assets/images/sobre_hero1.jpeg"
import aboutStoryImage from "../../assets/images/sobre_hero2.jpeg"
import "./Sobre.css"

export default function Sobre() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__panel">
            <div className="about-hero__intro">
              <span className="about-eyebrow">{about.hero.eyebrow}</span>
              <h1>{about.hero.title}</h1>
            </div>

            <div className="about-hero__statement">
              <p className="about-hero__highlight">{about.hero.highlight}</p>
              <p>{about.hero.intro}</p>
            </div>
          </div>

          <div className="about-hero__media-wrap">
            <div className="about-hero__media">
              <img src={aboutHeroImage} alt="Área externa do canil" />
            </div>

            <aside className="about-hero__quote">
              <strong>{about.hero.quote.title}</strong>
              <p>{about.hero.quote.description}</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="container about-band__grid">
          {about.highlights.map((item) => (
            <article key={item.label} className="about-band__item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-section--story">
        <div className="container about-story">
          <div className="about-story__content">
            <span className="about-eyebrow">{about.structure.eyebrow}</span>
            <h2>{about.structure.title}</h2>

            <div className="about-copy about-copy--columns">
              {about.structure.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-story__closing">
              <strong>{about.care.eyebrow}</strong>
              <p>{about.care.title}</p>
            </div>
          </div>

          <div className="about-story__side">
            <div className="about-story__media">
              <img src={aboutStoryImage} alt="Responsável pelo canil com um dos cães" />
            </div>

            <div className="about-story__note">
              <span className="about-story__note-label">Atendimento humano</span>
              <p>{about.care.paragraphs[0]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-section--mission">
        <div className="container about-mission">
          <div className="about-mission__intro">
            <span className="about-eyebrow">{about.mission.eyebrow}</span>
            <h2>{about.mission.title}</h2>
            <p>{about.mission.summary}</p>
          </div>

          <div className="about-mission__list">
            {about.mission.paragraphs.map((paragraph, index) => (
              <article key={paragraph} className="about-mission__item">
                <span>0{index + 1}</span>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <span className="about-eyebrow">{about.cta.eyebrow}</span>
            <h2>{about.cta.title}</h2>
            <p>{about.cta.description}</p>
          </div>

          <div className="about-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              {about.cta.primaryButton.label}
            </a>
            <Link to={about.cta.secondaryButton.path}>{about.cta.secondaryButton.label}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
