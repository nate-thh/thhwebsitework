import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-thh-navy/15 bg-thh-navy py-10 text-thh-cream">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Image
            src={siteContent.logos.wordmarkNavy}
            alt="The Harkness House"
            width={330}
            height={64}
            className="h-8 w-auto brightness-0 invert"
          />
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
