import Link from "next/link";
import { Fish, Facebook, Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-nature-dark text-stone-400 border-t border-nature-forest/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GÓRNA CZĘŚĆ - GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* KOLUMNA 1: O MARCE */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-nature-accent p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
                <Fish className="text-white w-5 h-5" />
              </div>
              <span className="font-serif italic text-xl text-stone-100">
                Polskie <span className="text-nature-accent">Rękodzieło</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Wspieramy lokalnych twórców i promujemy unikalne wędkarstwo. Każdy produkt w naszym sklepie to historia pasji i rzemiosła.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-nature-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-nature-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-nature-accent transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* KOLUMNA 2: ZAKUPY */}
          <div>
            <h3 className="text-stone-100 font-serif italic text-lg mb-6">Zakupy</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/katalog" className="hover:text-nature-accent transition-colors">Woblery</Link></li>
              <li><Link href="/katalog" className="hover:text-nature-accent transition-colors">Wahadłówki</Link></li>
              <li><Link href="/katalog" className="hover:text-nature-accent transition-colors">Wędki Custom</Link></li>
              <li><Link href="/katalog" className="hover:text-nature-accent transition-colors">Akcesoria</Link></li>
            </ul>
          </div>

          {/* KOLUMNA 3: POMOC */}
          <div>
            <h3 className="text-stone-100 font-serif italic text-lg mb-6">Pomoc</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/dostawa" className="hover:text-nature-accent transition-colors">Dostawa i Płatności</Link></li>
              <li><Link href="/zwroty" className="hover:text-nature-accent transition-colors">Zwroty i Reklamacje</Link></li>
              <li><Link href="/regulamin" className="hover:text-nature-accent transition-colors">Regulamin Sklepu</Link></li>
              <li><Link href="/polityka-prywatnosci" className="hover:text-nature-accent transition-colors">Polityka Prywatności</Link></li>
            </ul>
          </div>

          {/* KOLUMNA 4: NEWSLETTER */}
          <div>
            <h3 className="text-stone-100 font-serif italic text-lg mb-6">Bądź na bieżąco</h3>
            <p className="text-xs mb-4">Zapisz się, aby otrzymywać powiadomienia o nowych unikatach (dropach).</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Twój email" 
                className="bg-nature-forest/20 border border-nature-forest/40 rounded-lg px-4 py-2 text-sm text-stone-100 focus:outline-none focus:border-nature-accent transition-colors placeholder:text-stone-600"
              />
              <button className="bg-nature-accent text-white py-2 rounded-lg text-xs font-black uppercase tracking-widest hover:bg-white hover:text-nature-dark transition-colors">
                Zapisz się
              </button>
            </form>
          </div>

        </div>

        {/* DOLNA CZĘŚĆ - COPYRIGHT */}
        <div className="border-t border-nature-forest/30 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>&copy; {new Date().getFullYear()} Polskie Rękodzieło Wędkarskie. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <MapPin size={12} />
            <span>Projekt i realizacja: Twój Software House</span>
          </div>
        </div>

      </div>
    </footer>
  );
}