import contact from "../../data/contact"
import site from "../../data/site"
import formatPhone from "../../utils/formatPhone"
import "./Footer.css"

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1-.24c1.12.37 2.31.56 3.54.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3.99a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.23.19 2.42.56 3.54a1 1 0 0 1-.25 1.01z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h16a2 2 0 0 1 2 2v.35l-10 6.25L2 7.35V7a2 2 0 0 1 2-2zm18 4.4V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.4l9.47 5.92a1 1 0 0 0 1.06 0z" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-6.14 7-12a7 7 0 1 0-14 0c0 5.86 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </svg>
  ),
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

export default function Footer() {
  const phoneHref = `tel:${contact.phone.replace(/\D/g, "")}`
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__column">
          <p className="site-footer__kicker">Canil Golden Alcantara</p>
          <p className="site-footer__title">{site.brand}</p>
          <p className="site-footer__text">
            Criacao responsavel, atendimento proximo e uma apresentacao clara para familias que
            buscam um Golden Retriever com confianca.
          </p>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__title">Contato</p>
          <a className="site-footer__contact" href={phoneHref}>
            <span className="site-footer__icon">{icons.phone}</span>
            <span>{formatPhone(contact.phone)}</span>
          </a>
          <a className="site-footer__contact" href={`mailto:${contact.email}`}>
            <span className="site-footer__icon">{icons.email}</span>
            <span>{contact.email}</span>
          </a>
          <a className="site-footer__contact" href={mapsHref} target="_blank" rel="noreferrer">
            <span className="site-footer__icon">{icons.location}</span>
            <span>{contact.address}</span>
          </a>
        </div>

        <div className="site-footer__column">
          <p className="site-footer__title">Redes sociais</p>
          <div className="site-footer__socials" aria-label="Redes sociais do canil">
            {contact.socialLinks.map((social) => (
              <a
                key={social.id}
                className="site-footer__social-link"
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
              >
                {icons[social.id]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
