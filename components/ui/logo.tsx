import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="ClicksyDev">
      {/* Logo image */}
      <div className="relative h-20 w-20 md:h-24 md:w-24">
        <Image
          src="/images/1.png"
          alt="ClicksyDev Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Title logo */}
      <div className="relative h-14 w-56 md:h-16 md:w-64">
        <Image
          src="/images/2.png"
          alt="ClicksyDev"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
