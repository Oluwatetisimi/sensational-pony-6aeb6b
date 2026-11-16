import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { XIcon } from './FashionIcons.jsx'

export default function CartPanel() {
  const { cartItems, cartTotal, removeFromCart, clearCart, setIsCartOpen } = useCart()

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <aside className="cart-panel">
        <div className="cart-panel__header">
          <span className="cart-panel__title">Shopping Bag ({cartItems.length})</span>
          <button aria-label="Close cart" className="cart-panel__close" onClick={() => setIsCartOpen(false)}>
            <XIcon />
          </button>
        </div>

        <div className="cart-panel__body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <p>Your bag is empty</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.key} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item__img" />
                <div className="cart-item__info">
                  <div className="cart-item__name">{item.name}</div>
                  <div className="cart-item__meta">Size: {item.size} · Qty: {item.qty}</div>
                  <div className="cart-item__price">₦{(item.price * item.qty).toLocaleString()}</div>
                  <button className="cart-item__remove" onClick={() => removeFromCart(item.key)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-panel__footer">
            <div className="cart-total">
              <span className="cart-total__label">Total</span>
              <span className="cart-total__val">₦{cartTotal.toLocaleString()}</span>
            </div>
            <Link to="/contact" onClick={() => setIsCartOpen(false)} className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              Contact Us to Order
            </Link>
            <button
              className="btn btn--outline btn--sm"
              style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              onClick={clearCart}
            >
              Clear Bag
            </button>
          </div>
        )}
      </aside>
    </>
  )
}
