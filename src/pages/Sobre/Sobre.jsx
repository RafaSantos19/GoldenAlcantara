import { Link } from "react-router-dom"

import about from "../../data/about"
import contact from "../../data/contact"
import aboutHero from "../../assets/images/about/golden_tarde.jpg"
import ownerImage from "../../assets/images/about/dono_chapeu.jpg"
import "./Sobre.css"

const highlights = [
  {
    label: "Espaco preparado",
    value: "500m²"
  },
  {
    label: "Foco diario",
    value: "Bem-estar"
  },
  {
    label: "Atendimento",
    value: "Proximo"
  }
]

export default function Sobre() {
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__panel">
            <div className="about-hero__intro">
              <span className="about-eyebrow">{about.whoWeAre.eyebrow}</span>
              <h1>{about.whoWeAre.title}</h1>
            </div>

            <div className="about-hero__statement">
              <p className="about-hero__highlight">{about.whoWeAre.highlight}</p>
              <p>{about.whoWeAre.intro}</p>
            </div>
          </div>

          <div className="about-hero__media-wrap">
            <div className="about-hero__media">
              <img src={aboutHero} alt="Área externa do Canil Golden Alcantara" />
            </div>

            <aside className="about-hero__quote">
              <strong>Nosso olhar</strong>
              <p>
                Criar com responsabilidade significa cuidar da estrutura, da rotina e da relação
                de confiança com cada família.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="about-band">
        <div className="container about-band__grid">
          {highlights.map((item) => (
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
            <span className="about-eyebrow">{about.aboutUs.eyebrow}</span>
            <h2>{about.aboutUs.title}</h2>

            <div className="about-copy about-copy--columns">
              {about.aboutUs.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-story__closing">
              <strong>Nosso compromisso</strong>
              <p>{about.aboutUs.closing}</p>
            </div>
          </div>

          <div className="about-story__side">
            <div className="about-story__media">
              <img src={ownerImage} alt="Responsável pelo canil com um dos cães" />
            </div>

            <div className="about-story__note">
              <span className="about-story__note-label">Atendimento humano</span>
              <p>
                Cada família recebe orientação clara para entender o processo, tirar dúvidas e
                tomar a decisão com segurança.
              </p>
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
            <span className="about-eyebrow">Visite o canil</span>
            <h2>Quer conhecer melhor nossa estrutura e atendimento?</h2>
            <p>
              Estamos prontos para apresentar o canil, esclarecer dúvidas e orientar você na
              escolha do seu futuro companheiro.
            </p>
          </div>

          <div className="about-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <Link to="/contato">Ir para contato</Link>
          </div>
        </div>
      </section>
    </>
  )
}
