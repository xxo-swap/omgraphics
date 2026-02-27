import Link from "next/link";
import SafeImage from "@/component/utils/SafeImage";
import { ImageOff } from "lucide-react";
import { services } from "@/data/services"; // <-- import the data

function PrintShowcase() {
  return (
    <section className="bg-bg-dark py-28 relative overflow-hidden max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto px-6 space-y-28">
        {services.map((category, catIndex) => (
          console.log(category),
          <div key={catIndex}>
            {/* Category Title */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white inline-block">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.title}
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
            </div>

            {/* Service Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.items.map((item, index) => (
                <Link
                data-cursor="print"
                  key={index}
                  href={`/services/${category.slug}/${item.slug}`} // <-- use slug from data
                >
                  <div className="print-card group relative bg-white/5  overflow-hidden transition-all duration-300">
                    <div className="relative h-60 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      {item.thumbnail ? (
                        <SafeImage
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          fallback="/images/fallback.jpg"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="flex flex-col items-center text-white/40">
                          <div className="w-16 h-16 rounded-xl border border-white/20 flex items-center justify-center mb-3">
                            <ImageOff size={28} />
                          </div>
                          <span className="text-sm tracking-wide uppercase">
                            Image Preview
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-secondary text-black px-4 py-1 text-sm font-semibold rounded-md shadow-lg">
                      {item.title}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrintShowcase;