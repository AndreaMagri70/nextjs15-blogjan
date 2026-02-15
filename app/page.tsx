// app/page.tsx
export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 min-h-screen bg-surface p-10">
      {/* Sezione Hero */}
      <section className="py-20 border-b mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
          Idee, codice e <span className="text-blue-600">design.</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          Benvenuti nel mio spazio digitale dove condivido ciò che imparo ogni giorno sul mondo dello sviluppo web.
        </p>
      </section>

      {/* Griglia Articoli (Mockup) */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Ultimi articoli</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <article key={i} className="group cursor-pointer">
              <div className="aspect-video bg-slate-100 rounded-2xl mb-4 overflow-hidden">
                {/* Qui andrà l'immagine del post */}
                <div className="w-full h-full bg-slate-200 group-hover:scale-105 transition duration-500" />
              </div>
              <p className="text-sm text-blue-600 font-semibold mb-2">Tutorial</p>
              <h3 className="text-2xl font-bold group-hover:underline decoration-blue-600 decoration-2">
                Come costruire un blog moderno con Next.js 15
              </h3>
              <p className="text-slate-600 mt-2 line-clamp-2">
                Scopri le migliori pratiche per strutturare il tuo progetto e ottimizzare le performance...
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}