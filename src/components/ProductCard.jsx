import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { HeartIcon, PlusIconSvg } from './FashionIcons.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)] || product.sizes[0])
  const [wished, setWished] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="product-card">
      <div className="product-card__img-wrap">
        <img src={product.image} alt={product.title} className="product-card__img" loading="lazy" />
        {product.isNew && <span className="product-card__badge">New</span>}
        {product.isSale && !product.isNew && <span className="product-card__badge product-card__badge--sale">Sale</span>}
        <button
          className={`product-card__wish${wished ? ' active' : ''}`}
          onClick={() => setWished(w => !w)}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <HeartIcon filled={wished} />
        </button>
      </div>

      <div className="product-card__body">
        <span className="product-card__cat">{product.category}</span>
        <div className="product-card__name">{product.title}</div>
        <div className="product-card__price">
          <span className="product-card__price-current">₦{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="product-card__price-original">₦{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="product-card__sizes">
          {product.sizes.map(s => (
            <button
              key={s}
              className={`size-btn${selectedSize === s ? ' selected' : ''}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="product-card__footer">
        <button className="product-card__add" onClick={handleAdd}>
          <PlusIconSvg />
          {added ? 'Added to Bag!' : 'Add to Bag'}
        </button>
      </div>
    </div>
  )
}
