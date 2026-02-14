import Link from "next/link";
import { Fish, ShoppingBag, Search, Menu, User } from "lucide-react";

export function Navbar() {
  return (
    // Sticky: Menu przykleja się do góry. Backdrop-blur: Efekt matowego szkła.
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-nature-dark/95 backdrop-blur-md text-stone-100 shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* LOGO */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="rounded-xl bg-nature-accent p-2 text-white transition-transform duration-300 group-hover:rotate-12">
            <Fish className="h-6 w-6" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg italic tracking-wide text-stone-50">Polskie</span>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-nature-accent">
              Rękodzieło
            </span>
          </div>
        </Link>

        {/* LINKI (Tylko na komputerach - hidden na mobile) */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/katalog" className="text-xs font-bold uppercase tracking-widest text-stone-300 transition-colors hover:text-nature-accent">
            Katalog
          </Link>
          <Link href="/tworcy" className="text-xs font-bold uppercase tracking-widest text-stone-300 transition-colors hover:text-nature-accent">
            Nasi Twórcy
          </Link>
          <Link href="/o-nas" className="text-xs font-bold uppercase tracking-widest text-stone-300 transition-colors hover:text-nature-accent">
            O nas
          </Link>
        </div>

        {/* IKONY AKCJI */}
        <div className="flex items-center gap-6">
          <button aria-label="Szukaj" className="text-stone-300 transition-colors hover:text-nature-accent">
            <Search className="h-5 w-5" />
          </button>
          
          <button aria-label="Konto" className="hidden text-stone-300 transition-colors hover:text-nature-accent md:block">
            <User className="h-5 w-5" />
          </button>

          <Link href="/koszyk" className="group relative text-stone-300 transition-colors hover:text-nature-accent">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-nature-accent text-[10px] font-bold text-white transition-transform group-hover:scale-110">
              0
            </span>
          </Link>

          {/* Hamburger Menu (Tylko na mobile) */}
          <button aria-label="Menu" className="block md:hidden text-stone-300 transition-colors hover:text-nature-accent">
            <Menu className="h-6 w-6" />
          </button>
        </div>

      </div>
    </nav>
  );
}