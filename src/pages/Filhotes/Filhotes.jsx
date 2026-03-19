import contact from "../../data/contact"
import puppies from "../../data/puppies"
import site from "../../data/site"
import "./Filhotes.css"

export default function Filhotes() {
  const featuredPuppy = puppies[0]

  return (
    <>
      <section className="breeds-hero">
        <div className="container breeds-hero__content">
          <span className="breeds-eyebrow">Filhotes</span>
          <h1>Conheça a raça criada por {site.brand.name}</h1>
          <p className="breeds-hero__lead">
            Aqui você encontra uma apresentação mais clara sobre o Golden Retriever e pode falar
            com o canil para consultar disponibilidade e atendimento.
          </p>
        </div>
      </section>

      <section className="breeds-section">
        <div className="container">
          <div className="breeds-section__heading">
            <span className="breeds-eyebrow">Raça em destaque</span>
            <h2>Mais contexto para entender o perfil do Golden Retriever</h2>
          </div>

          <div className="breeds-grid">
            <article key={featuredPuppy.id} className="breed-card">
              <div className="breed-card__media">
                <img src={featuredPuppy.image} alt={`${featuredPuppy.name} em destaque`} />
              </div>

              <div className="breed-card__content">
                <div className="breed-card__meta">
                  <span className="breed-card__eyebrow">{featuredPuppy.age}</span>
                  <span className="breed-card__availability">{featuredPuppy.availability}</span>
                </div>

                <h3>{featuredPuppy.breed}</h3>
                <p>{featuredPuppy.description}</p>
                <p>{featuredPuppy.breedSummary}</p>

                <ul className="breed-card__traits">
                  {featuredPuppy.breedHighlights.map((trait) => (
                    <li key={trait}>{trait}</li>
                  ))}
                </ul>

                <div className="breed-card__tags">
                  {featuredPuppy.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="breed-card__cta"
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar sobre {featuredPuppy.breed}
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
