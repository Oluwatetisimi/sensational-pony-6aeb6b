import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { CartIconSvg, XIcon } from './FashionIcons.jsx'
import CartPanel from './CartPanel.jsx'

export default function Navbar() {
  const { cartCount, isCartOpen, setIsCartOpen } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Collections' },
    { to: '/contact', label: 'Contact' },
  ]

  function closeMenu() { setMenuOpen(false) }

  return (
    <>
      <nav className="navbar">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            VELOUR<span>.</span>
          </Link>

          <ul className="navbar__links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="cart-btn" onClick={() => setIsCartOpen(true)} aria-label="Open cart">
              <CartIconSvg />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `mobile-nav__link${isActive ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {l.label}
          </NavLink>
        ))}
      </div>

      {isCartOpen && <CartPanel />}
    </>
  )
}
