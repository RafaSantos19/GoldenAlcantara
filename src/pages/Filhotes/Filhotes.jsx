import contact from "../../data/contact"
import puppies from "../../data/puppies"
import "./Filhotes.css"

const breeds = [
  {
    id: "golden",
    name: "Golden Retriever",
    image: puppies[0]?.image,
    summary: "Uma raça companheira, afetuosa e muito procurada por famílias.",
    traits: ["Temperamento dócil", "Boa adaptação em família", "Perfil sociável e inteligente"]
  },
  {
    id: "boiadeiro",
    name: "Boiadeiro de Berna",
    image: puppies[1]?.image,
    summary: "Uma raça forte, equilibrada e leal, com presença marcante no convívio diário.",
    traits: ["Porte robusto", "Personalidade calma", "Companheiro atento e fiel"]
  }
]

export default function Filhotes() {
  return (
    <>
      <section className="breeds-hero">
        <div className="container breeds-hero__content">
          <span className="breeds-eyebrow">Nossas racas</span>
          <h1>Conheca as racas criadas no canil</h1>
          <p className="breeds-hero__lead">
            Trabalhamos com duas racas de perfis muito queridos: o Golden Retriever e o
            Boiadeiro de Berna. Aqui voce encontra uma apresentacao rapida de cada uma antes de
            falar com a gente.
          </p>
        </div>
      </section>

      <section className="breeds-section">
        <div className="container">
          <div className="breeds-section__heading">
            <span className="breeds-eyebrow">Apresentacao</span>
            <h2>Dois perfis diferentes, o mesmo cuidado na criacao</h2>
          </div>

          <div className="breeds-grid">
            {breeds.map((breed) => (
              <article key={breed.id} className="breed-card">
                <div className="breed-card__media">
                  <img src={breed.image} alt={`${breed.name} em destaque`} />
                </div>

                <div className="breed-card__content">
                  <span className="breed-card__eyebrow">Raca criada no canil</span>
                  <h3>{breed.name}</h3>
                  <p>{breed.summary}</p>

                  <ul className="breed-card__traits">
                    {breed.traits.map((trait) => (
                      <li key={trait}>{trait}</li>
                    ))}
                  </ul>

                  <a
                    className="breed-card__cta"
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Falar sobre {breed.name}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
