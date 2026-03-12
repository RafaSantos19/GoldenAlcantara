import { Link } from "react-router-dom"

import contact from "../../data/contact"
import puppies from "../../data/puppies"
import site from "../../data/site"
import homeHero from "../../assets/images/home/golden_face.jpg"
import homePuppies from "../../assets/images/home/dono_green.jpg"
import "./Home.css"

const highlights = [
  {
    title: "Criação responsável",
    text: "Nossos filhotes são criados com atenção ao bem-estar, socialização e desenvolvimento saudável desde os primeiros dias de vida."
  },
  {
    title: "Atendimento direto",
    text: "Atendimento simples e direto com quem realmente cuida dos filhotes, tirando dúvidas e orientando cada família com transparência."
  },
  {
    title: "Transparência",
    text: "Informações claras sobre o canil, disponibilidade de filhotes e todo o processo para receber um novo membro na sua família."
  }
]

const steps = [
  "Conheça o canil e entenda como cuidamos dos nossos filhotes.",
  "Veja os filhotes disponíveis e escolha o que mais combina com sua família.",
  "Fale conosco pelo WhatsApp para receber orientações e tirar dúvidas."
]

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="page-section__eyebrow">Canil especializado</span>
            <h1>{site.brand}</h1>
            <p className="home-hero__lead">
              Criamos nossos Golden Retrievers com cuidado, responsabilidade e atenção a cada
              detalhe. Aqui você conhece o canil, os filhotes disponíveis e recebe orientação
              para encontrar o companheiro ideal para sua família.
            </p>

            <div className="home-hero__actions">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
                Falar com o canil
              </a>
              <Link to="/filhotes">Ver filhotes</Link>
            </div>

            <dl className="home-hero__stats" aria-label="Destaques do atendimento">
              <div>
                <dt>Atendimento</dt>
                <dd>Rápido e direto</dd>
              </div>
              <div>
                <dt>Compromisso</dt>
                <dd>Criação responsável</dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>{contact.phone}</dd>
              </div>
            </dl>
          </div>

          <div className="home-hero__media">
            <img
              src={homeHero}
              alt="Golden Retriever em destaque na apresentação principal do canil"
            />
            <div className="home-hero__note">
              <strong>Mais do que um canil</strong>
              <p>
                Um canil dedicado a criar Golden Retrievers saudáveis, bem cuidados e preparados
                para se tornarem parte da sua família.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container">
          <div className="home-section__heading">
            <span className="page-section__eyebrow">Nossos diferenciais</span>
            <h2>Por que escolher o Canil Golden Alcantara</h2>
          </div>

          <div className="home-highlights">
            {highlights.map((item) => (
              <article key={item.title} className="home-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container home-showcase">
          <div className="home-showcase__content">
            <span className="page-section__eyebrow">Nossos filhotes</span>
            <h2>Conheça nossos filhotes disponíveis</h2>
            <p>
              Veja os filhotes disponíveis, conheça mais sobre cada um e fale diretamente conosco
              para receber mais informações.
            </p>

            <div className="home-showcase__list">
              {puppies.map((puppy) => (
                <div key={puppy.id} className="home-showcase__item">
                  <strong>{puppy.breed}</strong>
                  <span>{puppy.name}</span>
                </div>
              ))}
            </div>

            <Link className="home-link-pill" to="/filhotes">
              Ver todos os filhotes
            </Link>
          </div>

          <div className="home-showcase__media">
            <img src={homePuppies} alt="Responsável pelo canil com filhotes em destaque" />
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container home-process">
          <div className="home-section__heading">
            <span className="page-section__eyebrow">Como funciona</span>
            <h2>Como funciona nosso atendimento</h2>
          </div>

          <div className="home-process__grid">
            {steps.map((step, index) => (
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
            <span className="page-section__eyebrow">Contato</span>
            <h2>Quer conhecer nossos filhotes?</h2>
            <p>
              Entre em contato conosco para saber sobre disponibilidade e receber todas as
              orientações para levar um Golden Retriever para sua família.
            </p>
          </div>

          <div className="home-cta__actions">
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">
              Chamar no WhatsApp
            </a>
            <Link to="/contato">Abrir contato</Link>
          </div>
        </div>
      </section>
    </>
  )
}