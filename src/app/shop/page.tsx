'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get active filters from URL search params
  const categoryParam = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);

  // Sync category state with URL parameter changes
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...PRODUCTS];

    // Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.shortDescription.toLowerCase().includes(query) ||
        p.sku.toLowerCase().includes(query)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Update URL param
    if (category === 'all') {
      router.push('/shop');
    } else {
      router.push(`/shop?category=${category}`);
    }
  };

  return (
    <div className="container section" style={{ minHeight: '80vh' }}>
      {/* Page Header */}
      <div style={{ marginBottom: '40px' }}>
        <span className="badge badge-primary" style={{ marginBottom: '8px' }}>Store Catalogue</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Draft Beer Equipment</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Browse our collection of professional keg cooling and draft dispensing gear.
        </p>
      </div>

      {/* Filter and Control Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        marginBottom: '40px'
      }}>
        {/* Search */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
          <input
            type="text"
            placeholder="Search equipment, SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            style={{ paddingLeft: '40px' }}
          />
          <Search size={18} style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)'
          }} />
        </div>

        {/* Sort Controls */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ArrowUpDown size={14} /> Sort By:
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="form-control"
            style={{ padding: '8px 12px', width: '180px', fontSize: '0.85rem' }}
          >
            <option value="featured">Featured Items</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Alphabetical: A-Z</option>
          </select>
        </div>
      </div>

      {/* Main Grid: Category list left, products right */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }} className="grid-cols-2">
        
        {/* Sidebar Filter Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }} className="shop-sidebar">
          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SlidersHorizontal size={16} style={{ color: 'var(--primary)' }} /> Product Categories
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { id: 'all', label: 'All Equipment' },
                { id: 'kegerators', label: 'Kegerators & Cooling' },
                { id: 'tapping', label: 'Keg Tapping Equipment' },
                { id: 'gas', label: 'Gas Equipment' },
                { id: 'towers', label: 'Towers & Drip Trays' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: selectedCategory === cat.id ? 600 : 500,
                    color: selectedCategory === cat.id ? '#fff' : 'var(--text-muted)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--primary)' : 'transparent',
                    transition: 'var(--transition)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div style={{ gridColumn: 'span 1' }} className="shop-products-grid">
          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>No Products Found</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                We couldn't find any products matching your current selection. Try resetting your search query or filters.
              </p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '24px'
            }}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .grid-cols-2 {
            grid-template-columns: 240px 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="container section flex-center" style={{ minHeight: '80vh' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255, 255, 255, 0.1)',
            borderTopColor: 'var(--primary)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p style={{ color: 'var(--text-muted)' }}>Loading Catalogue...</p>
        </div>
        <style jsx>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
