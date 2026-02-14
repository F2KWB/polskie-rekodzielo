export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      {/* Szkielet Nagłówka */}
      <div className="mb-12 animate-pulse space-y-4">
        <div className="h-4 bg-stone-200 w-32 rounded"></div>
        <div className="h-10 bg-stone-200 w-96 rounded"></div>
      </div>

      {/* Szkielet Siatki Produktów */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-[2rem] border border-stone-100 overflow-hidden h-[500px] animate-pulse">
            <div className="h-2/3 bg-stone-200"></div>
            <div className="p-8 space-y-4">
              <div className="h-4 bg-stone-200 w-1/3 rounded"></div>
              <div className="h-8 bg-stone-200 w-3/4 rounded"></div>
              <div className="flex justify-between mt-8">
                <div className="h-8 bg-stone-200 w-20 rounded"></div>
                <div className="h-12 bg-stone-200 w-12 rounded-xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}