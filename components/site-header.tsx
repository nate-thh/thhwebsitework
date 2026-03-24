"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { siteContent } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-thh-navy/10 bg-thh-cream/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="#top" className="focus-ring inline-flex items-center rounded-sm" aria-label="Go to top">
          <Image
            src={siteContent.logos.markNavy}
            alt="The Harkness House"
            width={40}
            height={40}
            className="h-10 w-10 md:hidden"
            priority
          />
          <Image
            src={siteContent.logos.lockupNavy}
            alt="The Harkness House"
            width={250}
            height={150}
            className="hidden h-[58px] w-auto md:block"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-medium text-thh-navy/85 transition hover:text-thh-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="focus-ring inline-flex rounded-sm border border-thh-navy/25 px-3 py-2 text-sm font-medium text-thh-navy md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-menu" className="section-shell pb-4 md:hidden" aria-label="Mobile navigation">
          <ul className="grid gap-2 border-t border-thh-navy/15 pt-3">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring block rounded-sm px-2 py-2 text-sm font-medium text-thh-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
