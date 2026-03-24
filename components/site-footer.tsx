import Link from "next/link";

import { siteContent } from "@/content/site";
import { LogoMark } from "@/components/logo-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-thh-navy/15 bg-thh-navy py-10 text-thh-cream">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="inline-flex items-center gap-3">
            <LogoMark className="h-8 w-8" />
            <p className="text-xl font-semibold tracking-tight">{siteContent.name}</p>
          </div>
          <p className="mt-3 text-sm text-thh-cream/85">{siteContent.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-5 text-sm">
          <li>
            <Link className="focus-ring rounded-sm transition hover:text-thh-gold" href="#">
              hello@theharknesshouse.org
            </Link>
          </li>
          <li>
            <Link className="focus-ring rounded-sm transition hover:text-thh-gold" href="#">
              Instagram
            </Link>
          </li>
          <li>
            <Link className="focus-ring rounded-sm transition hover:text-thh-gold" href="#">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
