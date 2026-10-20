
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Heart,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import "./globals.css";

const categories = [
  {
    name: "Arts",
    number: "01",
    description: "Original artwork, expressive forms, and pieces that start conversations.",
    image: "photo-1579783902614-a3fb3927b6a5",
    detail: "ART FOR THE SOUL",
  },
  {
    name: "Crafts",
    number: "02",
    description: "Considered objects, tactile details, and beautiful things made by hand.",
    image: "photo-1578749556568-bc2c40e68b61",
    detail: "MADE WITH INTENTION",
  },
];

const products = [
  {
    id: 1,
    name: "The Earthbound Vase",
    category: "Crafts",
    price: 2800,
    image: "photo-1578749556568-bc2c40e68b61",
    label: "THE MAKER'S PICK",
    description: "Sculptural form · Natural tones",
  },
  {
    id: 2,
    name: "Golden Hour Beadwork",
    category: "Crafts",
    price: 1450,
    image: "photo-1535632066927-ab7c9ab60908",
    label: "DETAILS THAT SHINE",
    description: "Artisan detail · Quiet statement",
  },
  {
    id: 3,
    name: "The Woven Everyday",
    category: "Crafts",
    price: 3200,
    image: "photo-1590874103328-eac38a683ce7",
    label: "EVERYDAY OBJECTS",
    description: "Handcrafted character · Timeless use",
  },
  {
    id: 4,
    name: "Still Life No. 04",
    category: "Arts",
    price: 4500,
    image: "photo-1579783902614-a3fb3927b6a5",
    label: "ARTIST'S EDITION",
    description: "Original expression · Gallery-inspired",
  },
];

const benefits = [
  {
    icon: Leaf,
    title: "Made with intention",
    description: "Discover pieces selected for their character, craft, and thoughtful details.",
  },
  {
    icon: ShieldCheck,
    title: "A considered experience",
    description: "Clear product information and a straightforward path to discovering your next piece.",
  },
  {
    icon: Heart,
    title: "Chosen to be treasured",
    description: "Find meaningful objects for your own space or someone special.",
  },
];

function photo(id: string, width = 900) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [mobileLinksOpen, setMobileLinksOpen] = useState(false);

  const visibleProducts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !term ||
        `${product.name} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  function handleNewsletterSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setNewsletterMessage(
      "Thanks for your interest! Newsletter sign-ups will be connected when the email service is configured."
    );
  }

  return (
    <>
      <Navbar />

      <main className="artifex-home">
        {/* Announcement bar */}
        <div className="luxury-announcement">
          <Sparkles size={13} aria-hidden="true" />
          <span>A WORLD OF THINGS MADE WITH MEANING</span>
          <span className="announcement-divider">—</span>
          <Link href="/products">
            Discover the collection <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Hero */}
        <section className="luxury-hero">
          <div className="luxury-hero-copy">
            <div className="hero-eyebrow">
              <span className="eyebrow-line" />
              THE ARTIFEX POINT OF VIEW
            </div>

            <h1 className="hero-headline">
              A life filled
              <br />
              with things
              <br />
              <em>that mean more.</em>
            </h1>

            <p className="hero-description">
              Original art. Thoughtful crafts. Beautifully individual
              pieces that bring a little more character to the everyday.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="luxury-button">
                Explore the collection
                <ArrowRight size={17} />
              </Link>

              <Link href="/#collections" className="luxury-text-link">
                Find your style <ArrowDownRight size={16} />
              </Link>
            </div>

            <div className="hero-proof">
              <div className="hero-proof-icon">
                <Heart size={17} />
              </div>
              <div>
                <strong>Made to feel personal.</strong>
                <span>Selected for the stories they tell.</span>
              </div>
            </div>

            <span className="hero-index">EST. 2026 · ART & OBJECTS</span>
          </div>

          <div className="luxury-hero-visual">
            <div className="hero-image-frame">
              <img
                src={photo("photo-1490312278390-ab64016e0aa9", 1500)}
                alt="Artfully curated objects and an elegant creative interior"
                fetchPriority="high"
              />

              <div className="hero-image-overlay" />

              <div className="hero-edition-stamp">
                <span>THE ARTIFEX</span>
                <strong>Objects<br />of meaning.</strong>
                <span>ART · CRAFT · CULTURE</span>
              </div>

              <div className="hero-image-bottom">
                <span>THE CONSIDERED COLLECTION</span>
                <span>NO. 001 / 026</span>
              </div>
            </div>

            <div className="hero-side-note">
              <span className="hero-side-rule" />
              ARTISTRY IN THE EVERYDAY
            </div>

            <div className="hero-floating-note">
              <Sparkles size={16} />
              <span>Less ordinary.<br /><strong>More you.</strong></span>
            </div>
          </div>
        </section>

        {/* Brand signature */}
        <section className="luxury-marquee" aria-label="Artifex values">
          <div>
            <span>THE BEAUTY OF ORIGINALITY</span>
            <i>✳</i>
            <span>MADE WITH INTENTION</span>
            <i>✳</i>
            <span>CHARACTER OVER CONVENTION</span>
            <i>✳</i>
            <span>ART FOR EVERYDAY LIVING</span>
          </div>
        </section>

        {/* Category editorial */}
        <section className="luxury-section luxury-collections" id="collections">
          <div className="luxury-section-heading">
            <div>
              <span className="luxury-kicker">01 — THE COLLECTIONS</span>
              <h2>
                Two expressions.
                <br />
                <em>One creative spirit.</em>
              </h2>
            </div>

            <div className="section-heading-aside">
              <p>
                From expressive artwork to tactile, handcrafted objects,
                explore creativity in the form that speaks to you.
              </p>
              <Link href="/products" className="luxury-text-link">
                View all pieces <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="luxury-category-grid">
            {categories.map((category) => (
              <Link
                key={category.number}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className={`luxury-category-card luxury-category-${category.name.toLowerCase()}`}
              >
                <div className="luxury-category-image">
                  <img
                    src={photo(category.image, 1100)}
                    alt={`${category.name}: ${category.description}`}
                    loading="lazy"
                  />
                  <div className="category-image-shade" />

                  <span className="luxury-category-number">
                    {category.number} / 02
                  </span>

                  <span className="luxury-category-detail">
                    {category.detail}
                  </span>

                  <span className="luxury-category-open" aria-hidden="true">
                    <ArrowUpRight size={21} />
                  </span>

                  <div className="luxury-category-overlay-copy">
                    <span>EXPLORE THE WORLD OF</span>
                    <h3>{category.name}</h3>
                  </div>
                </div>

                <div className="luxury-category-footer">
                  <p>{category.description}</p>
                  <span>Discover {category.name} <ArrowRight size={15} /></span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured shop */}
        <section className="luxury-section luxury-shop" id="shop">
          <div className="luxury-section-heading shop-section-heading">
            <div>
              <span className="luxury-kicker">02 — THE ARTIFEX EDIT</span>
              <h2>
                Considered finds.
                <br />
                <em>Uncommon character.</em>
              </h2>
            </div>

            <div className="shop-editorial-side">
              <p>
                Pieces that invite a second look, make a space feel
                personal, and turn ordinary moments into something memorable.
              </p>

              <button
                className="luxury-search-toggle"
                type="button"
                aria-expanded={searchOpen}
                aria-label={searchOpen ? "Close product search" : "Search products"}
                onClick={() => {
                  setSearchOpen((open) => !open);
                  setSearch("");
                }}
              >
                {searchOpen ? <X size={18} /> : <Search size={18} />}
                <span>{searchOpen ? "Close" : "Find a piece"}</span>
              </button>
            </div>
          </div>

          <div className="luxury-product-tools">
            <div className="luxury-filter-tabs" aria-label="Filter products">
              {["All", "Arts", "Crafts"].map((category) => (
                <button
                  type="button"
                  key={category}
                  className={activeCategory === category ? "active" : ""}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "All" ? "All pieces" : category}
                </button>
              ))}
            </div>

            <span className="luxury-result-count">
              {visibleProducts.length.toString().padStart(2, "0")} PIECES
            </span>
          </div>

          {searchOpen && (
            <div className="luxury-search-panel">
              <Search size={19} aria-hidden="true" />
              <input
                type="search"
                autoFocus
                placeholder="Search by name, Arts, Crafts..."
                aria-label="Search products"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
              {search && (
                <button type="button" onClick={() => setSearch("")}>
                  Clear search
                </button>
              )}
            </div>
          )}

          <div className="luxury-product-grid">
            {visibleProducts.map((product, index) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article
                  className="luxury-product-card"
                  key={product.id}
                >
                  <div className="luxury-product-image">
                    <Link
                      href="/products"
                      aria-label={`Discover ${product.name}`}
                      className="product-image-link"
                    >
                      <img
                        src={photo(product.image, 900)}
                        alt={product.name}
                        loading="lazy"
                      />
                    </Link>

                    <span className="luxury-product-index">
                      0{index + 1}
                    </span>

                    <span className="luxury-product-label">
                      {product.label}
                    </span>

                    <button
                      type="button"
                      className={`luxury-favorite ${isFavorite ? "is-favorite" : ""}`}
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

                    <Link href="/products" className="luxury-product-discover">
                      Discover this piece <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <div className="luxury-product-information">
                    <div className="luxury-product-overline">
                      <span>{product.category}</span>
                      <span>ART-{String(product.id).padStart(3, "0")}</span>
                    </div>

                    <h3>
                      <Link href="/products">{product.name}</Link>
                    </h3>

                    <p>{product.description}</p>

                    <div className="luxury-product-bottom">
                      <strong>
                        KSh {product.price.toLocaleString("en-KE")}
                      </strong>
                      <Link
                        href="/products"
                        aria-label={`View ${product.name}`}
                      >
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProducts.length === 0 && (
            <div className="luxury-empty-state">
              <Search size={27} />
              <h3>No pieces found just yet.</h3>
              <p>Try another search or explore our full collection.</p>
              <button
                type="button"
                className="luxury-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset discovery <ArrowRight size={16} />
              </button>
            </div>
          )}

          <div className="luxury-shop-footer">
            <span>GOOD THINGS ARE WORTH DISCOVERING.</span>
            <Link href="/products" className="luxury-button luxury-button-outline">
              Explore all pieces <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        {/* Brand interlude */}
        <section className="luxury-interlude">
          <div className="interlude-image">
            <img
              src={photo("photo-1452860606245-08befc0ff44b", 1300)}
              alt="An inspiring art and craft studio"
              loading="lazy"
            />
          </div>

          <div className="interlude-copy">
            <span className="luxury-kicker">A NOTE ON GOOD DESIGN</span>
            <span className="interlude-mark">“</span>
            <h2>
              The most beautiful things
              <br />
              are the ones that
              <br />
              <em>feel like they belong.</em>
            </h2>
            <p>
              A favourite object. An unexpected colour. A piece made by
              hand. These are the details that make a house yours and
              everyday life a little more extraordinary.
            </p>
            <Link href="/products" className="luxury-text-link">
              Find your meaningful piece <ArrowRight size={16} />
            </Link>
            <span className="interlude-signature">The Artifex philosophy</span>
          </div>
        </section>

        {/* Why Artifex */}
        <section className="luxury-section luxury-benefits" id="experience">
          <div className="luxury-section-heading">
            <div>
              <span className="luxury-kicker">03 — THE EXPERIENCE</span>
              <h2>
                Thoughtful in
                <br />
                <em>every detail.</em>
              </h2>
            </div>

            <p className="benefits-intro">
              Great design is not only what you see. It is also how you
              discover, choose, and care for the things you love.
            </p>
          </div>

          <div className="luxury-benefit-grid">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article className="luxury-benefit-card" key={benefit.title}>
                  <span className="benefit-index">
                    0{index + 1} / 03
                  </span>
                  <div className="benefit-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                  <span className="benefit-bottom-line" />
                </article>
              );
            })}
          </div>
        </section>

        {/* Editorial story / CTA */}
        <section className="luxury-story" id="story">
          <div className="luxury-story-copy">
            <span className="luxury-kicker">04 — OUR POINT OF VIEW</span>
            <h2>
              Not just made.
              <br />
              <em>Made meaningful.</em>
            </h2>

            <p>
              At Artifex, we believe creativity belongs in everyday life.
              Our world brings together original artistic expression
              and thoughtful craft, celebrating the beauty of a human
              touch and the character of pieces that feel truly individual.
            </p>

            <p>
              We are here for the collectors, the curious, the detail
              lovers, and everyone who believes the things around us
              should mean a little more.
            </p>

            <Link href="/products" className="luxury-button">
              Find your next favourite <ArrowRight size={17} />
            </Link>

            <span className="story-signature">
              ARTIFEX — THE ART OF EVERYDAY
            </span>
          </div>

          <div className="luxury-story-visual">
            <img
              src={photo("photo-1513364776144-60967b0f800f", 1200)}
              alt="Colourful art supplies and an artist's creative workspace"
              loading="lazy"
            />
            <div className="story-image-caption">
              <span>CREATIVITY, WITHOUT COMPROMISE</span>
              <span>ARTIFEX STUDIO · 2026</span>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="luxury-newsletter" id="newsletter">
          <div className="newsletter-decoration" aria-hidden="true">
            <Sparkles size={36} strokeWidth={1} />
          </div>

          <div className="newsletter-copy">
            <span className="luxury-kicker">A LETTER FROM ARTIFEX</span>
            <h2>
              Something lovely,
              <br />
              <em>now and then.</em>
            </h2>
            <p>
              New discoveries, stories from the creative side, and
              thoughtful finds delivered occasionally. Never noise.
            </p>
          </div>

          <div className="newsletter-form-wrap">
            <form
              className="luxury-newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <label htmlFor="artifex-email">YOUR EMAIL ADDRESS</label>
              <div className="newsletter-input-row">
                <input
                  id="artifex-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setNewsletterMessage("");
                  }}
                  required
                />
                <button type="submit" aria-label="Subscribe to the Artifex newsletter">
                  <ArrowRight size={19} />
                </button>
              </div>
              <small>
                By subscribing, you agree to receive occasional Artifex updates.
              </small>
            </form>

            {newsletterMessage && (
              <p className="newsletter-feedback" role="status">
                {newsletterMessage}
              </p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="luxury-footer">
          <div className="luxury-footer-main">
            <div className="luxury-footer-brand">
              <Link className="luxury-wordmark" href="/">
                artifex<span>.</span>
              </Link>
              <span className="luxury-wordmark-caption">
                THE ART OF EVERYDAY
              </span>
              <p>
                For the love of art, craft, and things that make a space
                feel like your own.
              </p>
              <Link href="/products" className="luxury-text-link">
                Explore our world <ArrowRight size={16} />
              </Link>
            </div>

            <div className="luxury-footer-column">
              <span>DISCOVER</span>
              <Link href="/products">All pieces</Link>
              <Link href="/products?category=Arts">Arts</Link>
              <Link href="/products?category=Crafts">Crafts</Link>
              <Link href="/#collections">Collections</Link>
            </div>

            <div className="luxury-footer-column">
              <span>ARTIFEX</span>
              <Link href="/#story">Our philosophy</Link>
              <Link href="/#experience">The experience</Link>
              <Link href="/#newsletter">Newsletter</Link>
              <a href="mailto:hello@artifex.example">Contact us</a>
            </div>

            <div className="luxury-footer-note">
              <span className="footer-note-mark">✳</span>
              <p>Choose thoughtfully.<br /><em>Keep what means something.</em></p>
              <span>ART · CRAFT · CULTURE</span>
            </div>
          </div>

          <div className="luxury-footer-bottom">
            <span>© 2026 ARTIFEX STUDIO. ALL RIGHTS RESERVED.</span>
            <span>MADE WITH CARE, WHEREVER YOU ARE.</span>
            <Link href="#">BACK TO TOP ↑</Link>
          </div>
        </footer>

        {/* Floating discovery shortcut */}
        <Link
          href="/products"
          className="luxury-floating-shop"
          aria-label="Explore all Artifex products"
        >
          <span>DISCOVER</span>
          <ArrowUpRight size={17} />
        </Link>

        {/* Small-screen navigation shortcuts */}
        <div className="luxury-mobile-dock">
          <Link href="/products">
            <Search size={17} />
            <span>Discover</span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileLinksOpen((open) => !open)}
            aria-expanded={mobileLinksOpen}
          >
            {mobileLinksOpen ? <X size={17} /> : <Menu size={17} />}
            <span>Explore</span>
          </button>

          <Link href="/#collections">
            <Sparkles size={17} />
            <span>Collections</span>
          </Link>
        </div>

        {mobileLinksOpen && (
          <div className="luxury-mobile-menu">
            <button
              type="button"
              className="mobile-menu-close"
              onClick={() => setMobileLinksOpen(false)}
              aria-label="Close explore menu"
            >
              <X size={18} />
            </button>
            <span className="luxury-kicker">EXPLORE ARTIFEX</span>
            <Link href="/products" onClick={() => setMobileLinksOpen(false)}>
              All pieces <ChevronRight size={17} />
            </Link>
            <Link
              href="/products?category=Arts"
              onClick={() => setMobileLinksOpen(false)}
            >
              Arts <ChevronRight size={17} />
            </Link>
            <Link
              href="/products?category=Crafts"
              onClick={() => setMobileLinksOpen(false)}
            >
              Crafts <ChevronRight size={17} />
            </Link>
            <Link href="/#story" onClick={() => setMobileLinksOpen(false)}>
              Our story <ChevronRight size={17} />
            </Link>
          </div>
        )}
      </main>
    </>
  );
}