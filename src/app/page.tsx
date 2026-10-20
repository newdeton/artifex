
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Heart,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const categories = [
  {
    name: "Arts",
    number: "01",
    description: "Original artwork and creative expressions.",
    image: "photo-1579783902614-a3fb3927b6a5",
  },
  {
    name: "Crafts",
    number: "02",
    description: "Thoughtfully made pieces for everyday life.",
    image: "photo-1578749556568-bc2c40e68b61",
  },
];

const products = [
  {
    id: 1,
    name: "The Earthbound Vase",
    category: "Crafts",
    price: 2800,
    image: "photo-1578749556568-bc2c40e68b61",
  },
  {
    id: 2,
    name: "Golden Hour Beadwork",
    category: "Crafts",
    price: 1450,
    image: "photo-1535632066927-ab7c9ab60908",
  },
  {
    id: 3,
    name: "The Woven Everyday",
    category: "Crafts",
    price: 3200,
    image: "photo-1590874103328-eac38a683ce7",
  },
  {
    id: 4,
    name: "Still Life No. 04",
    category: "Arts",
    price: 4500,
    image: "photo-1579783902614-a3fb3927b6a5",
  },
];

function photo(id: string, width = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<number[]>([]);

  const visibleProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );

  return (
    <>
      <Navbar />

      <main className="artifex-home">
        {/* Hero */}
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              A LITTLE MORE HUMAN
            </div>

            <h1>
              Made by hand.
              <br />
              Meant to <em>be kept.</em>
            </h1>

            <p>
              Discover original art and thoughtfully handcrafted
              treasures, created with intention and a whole lot of heart.
            </p>

            <Link className="primary-button" href="/products">
              Explore the collection
              <ArrowRight size={17} />
            </Link>

            <div className="hero-note">
              <div className="avatar-stack">
                <span>A</span>
                <span>M</span>
                <span>J</span>
              </div>
              <span>Made with care, chosen by you.</span>
            </div>

            <ArrowDownRight
              className="hero-doodle"
              size={49}
              strokeWidth={1}
              aria-hidden="true"
            />
          </div>

          <div className="hero-art">
            <img
              src={photo("photo-1490312278390-ab64016e0aa9", 1200)}
              alt="A thoughtfully curated interior with artistic objects"
              fetchPriority="high"
            />

            <div className="image-stamp">
              <span>THE</span>
              <strong>
                ART & CRAFT
                <br />
                COLLECTION
              </strong>
              <span>VOL. 01 — 2026</span>
            </div>

            <div className="hero-caption">
              <span>01 / 02</span>
              <span>Pieces that feel like you.</span>
            </div>
          </div>

          <div className="vertical-note">
            ARTISTRY IN THE EVERYDAY — EST. 2026
          </div>
        </section>

        {/* Brand values */}
        <section className="trust-strip">
          <span>Thoughtfully handmade</span>
          <i />
          <span>Original artistic expression</span>
          <i />
          <span>Made to mean more</span>
          <i />
          <span>Beauty in the details</span>
        </section>

        {/* The two collections */}
        <section
          className="section collections-section"
          id="collections"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">TWO WORLDS OF CREATIVITY</span>
              <h2>
                Find your kind
                <br />
                of <em>wonder.</em>
              </h2>
            </div>

            <Link className="text-link" href="/products">
              Explore everything
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                className="category-card"
                href={`/products?category=${encodeURIComponent(
                  category.name
                )}`}
                key={category.number}
              >
                <div className="category-image">
                  <img
                    src={photo(category.image)}
                    alt={`${category.name} collection`}
                    loading="lazy"
                  />

                  <span className="category-number">
                    {category.number}
                  </span>

                  <span className="category-arrow">
                    <ArrowDownRight />
                  </span>
                </div>

                <div className="category-label">
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <span>Explore ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured products */}
        <section className="section shop-section" id="shop">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE GOOD FINDS</span>
              <h2>
                Little things.
                <br />
                <em>Big feelings.</em>
              </h2>
            </div>

            <div className="shop-heading-actions">
              <span className="section-aside">
                A considered collection of art and handcrafted pieces
                <br />
                for your home, your wardrobe, and your people.
              </span>

              <button
                className="icon-button home-search-button"
                type="button"
                aria-label={
                  searchOpen ? "Close search" : "Search featured products"
                }
                aria-expanded={searchOpen}
                onClick={() => {
                  setSearchOpen((open) => !open);
                  setSearch("");
                }}
              >
                {searchOpen ? (
                  <X size={19} />
                ) : (
                  <Search size={19} />
                )}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="home-search-panel">
              <Sparkles size={18} aria-hidden="true" />

              <input
                autoFocus
                type="search"
                placeholder="Search Arts or Crafts..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search featured products"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          <div className="product-grid">
            {visibleProducts.map((product) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image">
                    <img
                      src={photo(product.image)}
                      alt={product.name}
                      loading="lazy"
                    />

                    <button
                      type="button"
                      className={
                        isFavorite
                          ? "favorite-button favorited"
                          : "favorite-button"
                      }
                      aria-label={
                        isFavorite
                          ? `Remove ${product.name} from favorites`
                          : `Add ${product.name} to favorites`
                      }
                      aria-pressed={isFavorite}
                      onClick={() =>
                        setFavorites((current) =>
                          isFavorite
                            ? current.filter((id) => id !== product.id)
                            : [...current, product.id]
                        )
                      }
                    >
                      <Heart
                        size={18}
                        fill={isFavorite ? "currentColor" : "none"}
                      />
                    </button>

                    {product.id === 1 && (
                      <span className="product-tag">
                        MAKER&apos;S PICK
                      </span>
                    )}

                    <Link href="/products" className="quick-add">
                      Discover piece <span>↗</span>
                    </Link>
                  </div>

                  <div className="product-meta">
                    <span>{product.category}</span>
                    <span>
                      ART-{String(product.id).padStart(3, "0")}
                    </span>
                  </div>

                  <h3>
                    <Link href="/products">{product.name}</Link>
                  </h3>

                  <p className="product-price">
                    KSh {product.price.toLocaleString("en-KE")}
                  </p>
                </article>
              );
            })}

            {visibleProducts.length === 0 && (
              <p className="empty-search">
                No featured pieces match that search. Try another term.
              </p>
            )}
          </div>

          <div className="shop-view-all">
            <Link href="/products" className="primary-button">
              Shop all pieces <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Our story */}
        <section className="story-section" id="story">
          <div className="story-image">
            <img
              src={photo("photo-1452860606245-08befc0ff44b", 1000)}
              alt="A creative studio filled with artistic inspiration"
              loading="lazy"
            />
          </div>

          <div className="story-copy">
            <span className="eyebrow">BEHIND EVERY PIECE</span>

            <h2>
              Not just made.
              <br />
              <em>Made meaningful.</em>
            </h2>

            <p>
              We believe the best things carry a little of the person
              who made them. Every texture, every brushstroke, and every
              imperfect detail tells a story worth keeping.
            </p>

            <Link className="primary-button" href="/#collections">
              Discover our collections <ArrowRight size={17} />
            </Link>

            <span className="story-signature">
              Made with intention, always.
            </span>
          </div>
        </section>

        {/* Newsletter preview */}
        <section className="newsletter">
          <span className="eyebrow">
            A NOTE FROM THE CREATIVE SIDE
          </span>

          <h2>
            Good things, <em>occasionally.</em>
          </h2>

          <p>
            New collections, makers&apos; stories, and little things
            worth discovering.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              aria-label="Your email address"
            />

            <button type="submit" aria-label="Subscribe">
              <ArrowRight />
            </button>
          </form>

          <small>
            Newsletter subscriptions will be connected in a later step.
          </small>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div>
            <Link className="wordmark footer-wordmark" href="/">
              artifex<span>.</span>
              <small>THE ART OF EVERYDAY</small>
            </Link>

            <p>For the love of things made by hand.</p>
          </div>

          <div className="footer-links">
            <Link href="/products">Shop all</Link>
            <Link href="/products?category=Arts">Arts</Link>
            <Link href="/products?category=Crafts">Crafts</Link>
            <Link href="/#story">Our story</Link>
            <a href="mailto:hello@artifex.example">Contact</a>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Artifex Studio</span>
            <span>Made with care, wherever you are.</span>
          </div>
        </footer>
      </main>
    </>
  );
}
