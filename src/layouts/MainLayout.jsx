import { Outlet } from "react-router-dom"

import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import contact from "../data/contact"
import "./MainLayout.css"

export default function MainLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={`https://wa.me/${contact.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.05 4.94A9.77 9.77 0 0 0 12.09 2C6.67 2 2.25 6.41 2.25 11.83c0 1.73.45 3.42 1.31 4.92L2 22l5.41-1.52a9.8 9.8 0 0 0 4.68 1.19h.01c5.42 0 9.83-4.41 9.84-9.84a9.75 9.75 0 0 0-2.89-6.89zm-6.96 15.07h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.21.9.86-3.13-.2-.32a8.17 8.17 0 0 1-1.25-4.31c0-4.53 3.69-8.22 8.23-8.22 2.19 0 4.25.85 5.8 2.41a8.16 8.16 0 0 1 2.4 5.82c0 4.53-3.69 8.22-8.22 8.22zm4.5-6.16c-.25-.12-1.47-.73-1.7-.82-.23-.08-.39-.12-.56.12-.16.25-.64.82-.78.98-.14.16-.28.19-.53.06-.25-.12-1.04-.38-1.98-1.2-.73-.66-1.22-1.47-1.36-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.53.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.05-.11-.21-.17-.46-.29z" />
        </svg>
      </a>
    </div>
  )
}
