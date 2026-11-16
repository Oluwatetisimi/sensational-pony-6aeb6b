import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import { SearchIconSvg } from '../components/FashionIcons.jsx'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const activeCategory = categories.includes(requestedCategory) ? requestedCategory : 'All'
  function setActiveCategory(category) {
    setSearchParams(category === 'All' ? {} : { category })
  }
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeCategory !== 'All') {
      list = list.filter(p => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase()
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.color.toLowerCase().includes(q)
      )
    }
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price)
    if (sortBy === 'newest') list = list.filter(p => p.isNew).concat(list.filter(p => !p.isNew))
    if (sortBy === 'sale') list = list.filter(p => p.isSale).concat(list.filter(p => !p.isSale))
    return list
  }, [activeCategory, searchQuery, sortBy])

  return (
    <>
      {/* ---- PAGE HERO ---- */}
      <section className="products-hero">
        <div className="container">
          <span className="section__eyebrow">Our Collections</span>
          <h1 className="products-hero__title">Discover Your Style</h1>
          <p className="products-hero__sub">
            {products.length}+ premium pieces curated for the modern African.
          </p>
        </div>
      </section>

      {/* ---- TOOLBAR ---- */}
      <div className="container">
        <div className="products-toolbar">
          {/* Search */}
          <div className="search-wrap">
            <SearchIconSvg />
            <input
              type="text"
              className="search-input"
              aria-label="Search collections"
              placeholder="Search collections…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category filters */}
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            className="sort-select"
            aria-label="Sort collections"
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="sale">Sale Items First</option>
          </select>
        </div>

        {/* Results count */}
        <p style={{ color: 'var(--clr-grey-500)', fontSize: '0.875rem', marginBottom: '24px' }}>
          Showing <strong style={{ color: 'var(--clr-black)' }}>{filtered.length}</strong> of{' '}
          <strong style={{ color: 'var(--clr-black)' }}>{products.length}</strong> pieces
          {activeCategory !== 'All' && ` in ${activeCategory}`}
          {searchQuery && ` for "${searchQuery}"`}
        </p>

        {/* Products Grid */}
        <div className="products-grid">
          {filtered.length > 0 ? (
            filtered.map(p => <ProductCard key={p.id} product={p} />)
          ) : (
            <div className="products-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <p>No pieces found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
