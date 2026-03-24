import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-thh-navy/10 bg-thh-cream/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#top" className="focus-ring flex items-center">
          <Image
            src="/brand/logo-blue.png"
            alt="The Harkness House"
            width={260}
            height={72}
            priority
            className="h-auto w-[180px] md:w-[220px]"
          />
        </Link>

        {/* keep your nav here */}
      </div>
    </header>
  );
}
