import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('velour_cart')
      const parsed = saved ? JSON.parse(saved) : []
      return Array.isArray(parsed) ? parsed.filter(item =>
        item && typeof item.key === 'string' && typeof item.name === 'string' &&
        typeof item.size === 'string' && typeof item.image === 'string' &&
        Number.isFinite(item.price) && item.price >= 0 &&
        Number.isSafeInteger(item.qty) && item.qty > 0
      ) : []
    } catch { return [] }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('velour_cart', JSON.stringify(cartItems))
    } catch {
      // Keep the bag usable when browser storage is unavailable or full.
    }
  }, [cartItems])

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)

  function addToCart(product, size = 'M') {
    setCartItems(prev => {
      const key = `${product.id}-${size}`
      const existing = prev.find(i => i.key === key)
      if (existing) {
        return prev.map(i => i.key === key ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { key, id: product.id, name: product.title, price: product.price, image: product.image, size, qty: 1, category: product.category }]
    })
    setIsCartOpen(true)
  }

  function removeFromCart(key) {
    setCartItems(prev => prev.filter(i => i.key !== key))
  }

  function clearCart() { setCartItems([]) }

  return (
    <CartContext.Provider value={{ cartItems, cartCount, cartTotal, addToCart, removeFromCart, clearCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
