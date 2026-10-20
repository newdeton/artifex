import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/Navbar";
import "./products.css";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  stock_quantity: number;
  image_url: string | null;
  categories: { name: string } | null;
};

export default async function ProductsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, slug, description, price, stock_quantity, image_url, categories(name)"
    )
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  const products = (data ?? []) as unknown as Product[];

  return (
    <>
      <Navbar />

      <main className="products-page">
        <section className="products-intro" id="shop">
          <p className="products-eyebrow">
            MADE BY HAND, CHOSEN BY YOU
          </p>

          <h1>
            Find something <em>special.</em>
          </h1>

          <p className="products-intro-description">
            Discover handmade pieces created to bring beauty,
            character and meaning into everyday life.
          </p>

          <div className="products-intro-actions">
            <a
              href="#collection-grid"
              className="products-primary-link"
            >
              Explore the collection
              <span aria-hidden="true">↗</span>
            </a>

            <Link
              href="/#story"
              className="products-secondary-link"
            >
              Our story
            </Link>
          </div>
        </section>

        <section
          className="products-content"
          id="collection-grid"
        >
          <div className="products-toolbar">
            <div>
              <p className="products-section-label">
                CURATED FOR YOU
              </p>
              <h2>Our collection</h2>
            </div>

            <span className="products-count">
              {products.length}{" "}
              {products.length === 1 ? "piece" : "pieces"}
            </span>
          </div>

          {error ? (
            <div className="products-message">
              <span className="products-message-mark">!</span>
              <h2>We couldn't load the collection.</h2>
              <p>
                Please check your Supabase connection, products
                table, and database access policies.
              </p>
              <Link href="/" className="products-back-link">
                Return home <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : products.length === 0 ? (
            <div className="products-message">
              <span className="products-message-mark">a.</span>
              <h2>Your next favourite piece starts here.</h2>
              <p>
                No published products are available yet. Check that
                your product exists in Supabase and that
                <code> is_active </code> is set to true.
              </p>
              <Link href="/" className="products-back-link">
                Discover Artifex <span aria-hidden="true">↗</span>
              </Link>
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product, index) => {
                const soldOut = product.stock_quantity < 1;
                const productHref = `/products/${encodeURIComponent(
                  product.slug
                )}`;

                return (
                  <article
                    className="product-card"
                    key={product.id}
                  >
                    <Link
                      href={productHref}
                      className="product-image"
                      aria-label={`View ${product.name}`}
                    >
                      {product.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.name}
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                      ) : (
                        <div className="product-no-image">
                          <span>artifex.</span>
                          <small>HANDMADE WITH CARE</small>
                        </div>
                      )}

                      {soldOut && (
                        <span className="product-stock">
                          Sold out
                        </span>
                      )}

                      <span className="product-view-link">
                        View piece <span aria-hidden="true">↗</span>
                      </span>
                    </Link>

                    <div className="product-details">
                      <p className="product-category">
                        {product.categories?.name ?? "Handmade"}
                      </p>

                      <h3>
                        <Link href={productHref}>
                          {product.name}
                        </Link>
                      </h3>

                      {product.description && (
                        <p className="product-description">
                          {product.description}
                        </p>
                      )}

                      <div className="product-bottom">
                        <strong>
                          KSh{" "}
                          {Number(product.price).toLocaleString(
                            "en-KE"
                          )}
                        </strong>

                        <span
                          className={
                            soldOut ? "out-of-stock" : ""
                          }
                        >
                          {soldOut
                            ? "Unavailable"
                            : `${product.stock_quantity} available`}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <section className="products-closing">
          <p>
            THE BEAUTY OF THINGS MADE WITH INTENTION
          </p>

          <h2>
            Made slowly.
            <br />
            <em>Kept forever.</em>
          </h2>

          <Link href="/#collections">
            Discover our collections{" "}
            <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <footer className="products-footer">
          <Link href="/" className="products-footer-brand">
            artifex<span>.</span>
          </Link>

          <span>Thoughtfully made. Made to last.</span>

          <Link href="/#story">Our story ↗</Link>
        </footer>
      </main>
    </>
  );
}