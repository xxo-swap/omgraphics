import { services } from "@/data/services";
import Link from "next/link";

export default function AllServicesPage() {
  return (
    <section className="bg-[#141414] py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white mb-16 text-center">
          All Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.flatMap((category) =>
            category.items.map((item) => (
              <Link
          data-cursor="print"

                key={`${category.slug}-${item.slug}`}
                href={`/services/${category.slug}/${item.slug}`}
                className="p-8 bg-white/5 border border-white/10  hover:border-primary/40 transition"
              >
                <h3 className="text-white font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm line-clamp-3">
                  {item.description}
                </p>
              </Link>
            ))
          )}
        </div>

      </div>
    </section>
  );
}