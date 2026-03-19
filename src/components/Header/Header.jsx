import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { FiMenu, FiX } from "react-icons/fi"

import site from "../../data/site"
import contact from "../../data/contact"
import "./Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const hasMountedRef = useRef(false)

  function handleToggleMenu() {
    setIsMenuOpen((current) => !current)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"

    if (isMenuOpen) {
      const firstFocusableElement = mobileMenuRef.current?.querySelector(
        'a[href], button:not([disabled])'
      )
      firstFocusableElement?.focus()
    } else if (hasMountedRef.current) {
      toggleButtonRef.current?.focus()
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        handleCloseMenu()
      }
    }

    function handleFocusTrap(event) {
      if (!isMenuOpen || event.key !== "Tab") return

      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button:not([disabled])'
      )

      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.addEventListener("keydown", handleFocusTrap)

    return () => {
      document.body.style.overflow = "unset"
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("keydown", handleFocusTrap)
    }
  }, [isMenuOpen])

  useEffect(() => {
    hasMountedRef.current = true
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <NavLink className="site-header__brand" to="/" onClick={handleCloseMenu}>
            <img
              className="site-header__logo"
              src="/golden-retriever.png"
              alt=""
              aria-hidden="true"
            />
            <div className="site-header__brand-copy">
              <span className="site-header__eyebrow">{site.brand.tagline}</span>
              <strong>{site.brand.logoText}</strong>
            </div>
          </NavLink>

          <nav className="site-header__nav" aria-label="Principal">
            {site.menu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "site-header__link is-active" : "site-header__link"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              className="site-header__cta site-header__cta--desktop"
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>

            <button
              ref={toggleButtonRef}
              type="button"
              className="site-header__toggle"
              aria-expanded={isMenuOpen}
              aria-controls="site-mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={handleToggleMenu}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={isMenuOpen ? "site-mobile-overlay is-open" : "site-mobile-overlay"}
        onClick={handleCloseMenu}
        aria-hidden="true"
      />

      <aside
        ref={mobileMenuRef}
        id="site-mobile-menu"
        className={isMenuOpen ? "site-mobile-menu is-open" : "site-mobile-menu"}
        aria-label="Menu mobile"
        role="dialog"
        aria-modal="true"
      >
        <div className="site-mobile-menu__header">
          <div className="site-mobile-menu__brand">
            <img
              className="site-mobile-menu__logo"
              src="/golden-retriever.png"
              alt=""
              aria-hidden="true"
            />
            <div>
            <span className="site-mobile-menu__eyebrow">Menu</span>
            <strong>{site.brand.logoText}</strong>
            </div>
          </div>

          <button
            type="button"
            className="site-mobile-menu__close"
            onClick={handleCloseMenu}
            aria-label="Fechar menu"
          >
            <FiX />
          </button>
        </div>

        <nav className="site-mobile-menu__nav">
          {site.menu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleCloseMenu}
              className={({ isActive }) =>
                isActive ? "site-mobile-menu__link is-active" : "site-mobile-menu__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-mobile-menu__footer">
          <a
            className="site-header__cta site-header__cta--mobile"
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            onClick={handleCloseMenu}
          >
            Falar no WhatsApp
          </a>
        </div>
      </aside>
    </>
  )
}
