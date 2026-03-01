import { services } from "@/data/services";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="bg-[#141414] py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-white mb-16 text-center">
          Our Services
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* All Services Card */}
          <Link
          data-cursor="print"

            href="/services/all"
            className="p-10 bg-primary text-white  hover:opacity-90 transition"
          >
            <h2 className="text-xl font-semibold mb-3">
              All Services
            </h2>
            <p className="text-sm opacity-80">
              View complete list of our services
            </p>
          </Link>

          {/* Category Cards */}
          {services.map((category) => (
            <Link
          data-cursor="print"

              key={category.slug}
              href={`/services/${category.slug}`}
              className="p-10 bg-white/5 border border-white/10  hover:border-primary/40 transition"
            >
              <h2 className="text-xl font-semibold text-white mb-3">
                {category.title}
              </h2>
              <p className="text-white/60 text-sm">
                {category.description}
              </p>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}