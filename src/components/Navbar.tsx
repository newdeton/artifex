"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  ShoppingBag,
} from "lucide-react";
import "./navbar.css";

const links = [
  { label: "Shop all", href: "/products", type: "page" },
  { label: "Collections", href: "/#collections", type: "section" },
  { label: "Our story", href: "/#story", type: "section" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the current route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close the menu when the Escape key is pressed.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="artifex-header">
      <div className="announcement-bar">
        <span className="announcement-primary">
          Thoughtfully made. Beautifully lived.
        </span>

        <span className="announcement-secondary">
          Discover independent craftsmanship
        </span>
      </div>

      <div className="navbar-main">
        {/* Brand */}
        <Link
          href="/"
          className="brand-mark"
          aria-label="Artifex home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-symbol" aria-hidden="true">
            a.
          </span>

          <span className="brand-copy">
            <span className="brand-name">artifex</span>
            <span className="brand-tagline">
              THE ART OF EVERYDAY
            </span>
          </span>
        </Link>

        {/* Main navigation */}
        <nav
          id="artifex-navigation"
          className={`desktop-navigation ${
            menuOpen ? "navigation-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive =
              link.type === "page" &&
              pathname.startsWith("/products");

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`nav-link ${
                  isActive ? "nav-link-active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span
                  className="nav-link-line"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Shopping bag and mobile menu */}
        <div className="navbar-actions">
          <Link
            href="/cart"
            className="bag-link"
            aria-label="Shopping bag, 0 items"
            onClick={() => setMenuOpen(false)}
          >
            <span className="bag-label">Your bag</span>

            <span className="bag-icon-wrap">
              <ShoppingBag
                size={19}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <span className="bag-count" aria-hidden="true">
                0
              </span>
            </span>

            <ArrowUpRight
              className="bag-arrow"
              size={15}
              aria-hidden="true"
            />
          </Link>

          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="artifex-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <Menu size={23} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}