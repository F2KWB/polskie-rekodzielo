import { supabase } from "@/lib/supabase";
import { Fish, MapPin, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

// To jest Server Component - kod wykonuje się na serwerze, klient dostaje gotowy HTML.
export default async function HomePage() {
  
  // 1. Pobieramy produkty razem z danymi twórcy (relacja)
  const { data: products, error } = await supabase
    .from("products")
    .select(`
      *,
      artisans (
        name,
        location
      )
    `)
    .order('created_at', { ascending: false }) // Najnowsze na górze
    .limit(6); // Pobieramy tylko 6 sztuk na start

  if (error) {
    console.error("Błąd pobierania:", error);
    // W prawdziwym projekcie tutaj obsłużylibyśmy błąd, np. pokazując pustą listę
  }

  return (
    <main className="min-h-screen bg-nature-sand">
      
      {/* --- SEKCJA HERO (Powitanie) --- */}
      <section className="relative overflow-hidden bg-nature-dark py-32 text-center shadow-2xl">
        {/* Dekoracyjne tło (wzór) */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-6 flex justify-center">
            <span className="rounded-full bg-nature-accent/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-nature-accent backdrop-blur-sm border border-nature-accent/30">
              Nowa kolekcja 2024
            </span>
          </div>
          <h1 className="mb-8 font-serif text-5xl font-medium italic text-stone-100 md:text-7xl">
            Dusza zaklęta <br />
            <span className="text-nature-accent">w drewnie i wodzie</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light leading-relaxed text-stone-400">
            Odkryj unikalne przynęty tworzone ręcznie przez najlepszych polskich rzemieślników. 
            Każdy wobler to osobna historia, każda wahadłówka to gwarancja emocji.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="/katalog" 
              className="group flex items-center gap-2 rounded-xl bg-nature-accent px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all hover:bg-white hover:text-nature-dark hover:shadow-lg hover:shadow-nature-accent/20"
            >
              Zobacz Katalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              href="/o-nas" 
              className="flex items-center gap-2 rounded-xl border border-stone-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-stone-300 transition-colors hover:border-stone-400 hover:text-white"
            >
              Poznaj Twórców
            </Link>
          </div>
        </div>
      </section>

      {/* --- SEKCJA PRODUKTÓW --- */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between border-b border-stone-200 pb-6">
          <div>
            <h2 className="mb-2 text-xs font-black uppercase tracking-[0.4em] text-nature-accent">
              Wyselekcjonowane
            </h2>
            <p className="font-serif text-4xl italic text-nature-dark">
              Bestsellery miesiąca
            </p>
          </div>
          <Link href="/katalog" className="hidden text-xs font-bold uppercase tracking-widest text-stone-500 transition-colors hover:text-nature-accent md:flex md:items-center md:gap-2">
            Wszystkie produkty <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid Produktów */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products?.map((product) => (
            <Link href={`/produkt/${product.id}`} key={product.id} className="group relative block h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-nature-dark/10">
                
                {/* Zdjęcie (Placeholder, bo nie mamy jeszcze plików) */}
                <div className="relative aspect-[4/5] w-full bg-stone-100 overflow-hidden">
                  {product.image_url ? (
                     /* Tu w przyszłości będzie <Image /> */
                    <img src={product.image_url} alt={product.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-stone-100 text-stone-300">
                       <Fish size={64} strokeWidth={1} />
                    </div>
                  )}
                  
                  {/* Badge Kategorii */}
                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-nature-dark backdrop-blur-md">
                    {product.category}
                  </div>
                </div>

                {/* Treść Karty */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-3 flex items-center gap-2 text-stone-400">
                    <MapPin size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">
                      {product.artisans?.location || "Polska"}
                    </span>
                  </div>
                  
                  <h3 className="mb-2 font-serif text-2xl italic text-nature-dark group-hover:text-nature-accent transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="mb-6 text-xs font-medium text-stone-500">
                    Twórca: <span className="text-nature-dark underline decoration-stone-300 underline-offset-4">{product.artisans?.name}</span>
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-stone-400 font-bold">Cena</span>
                      <span className="text-xl font-black text-nature-forest">{product.price} PLN</span>
                    </div>
                    <div className="rounded-full bg-nature-sand p-3 text-nature-dark transition-colors group-hover:bg-nature-dark group-hover:text-white">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Przycisk mobilny "Zobacz więcej" */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/katalog" className="w-full rounded-xl border border-nature-dark py-4 text-center text-xs font-black uppercase tracking-widest text-nature-dark">
            Zobacz pełny katalog
          </Link>
        </div>
      </section>
      
      {/* --- SEKCJA ZAUFANIA (Dlaczego my?) --- */}
      <section className="bg-nature-wood py-24 text-stone-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="mb-2 rounded-full bg-white/10 p-4 text-nature-accent">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-xl italic">Tylko Rękodzieło</h3>
              <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
                Zero chińskich masówek. Każdy produkt przeszedł przez ręce mistrza i był testowany nad wodą.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="mb-2 rounded-full bg-white/10 p-4 text-nature-accent">
                <Fish size={32} />
              </div>
              <h3 className="font-serif text-xl italic">Unikalne Prace</h3>
              <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
                Krótkie serie i pojedyncze sztuki. Kupując tutaj, masz pewność, że ryby nie widziały tej przynęty 1000 razy.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="mb-2 rounded-full bg-white/10 p-4 text-nature-accent">
                <MapPin size={32} />
              </div>
              <h3 className="font-serif text-xl italic">Wspierasz Polskę</h3>
              <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
                100% kwoty trafia do polskich twórców i małych pracowni. Promujemy lokalny talent.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}