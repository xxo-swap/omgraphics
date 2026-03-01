import Image from "next/image";
import Link from "next/link";
import { recentWorks } from "@/data/services";

export default function PortfolioPage() {
  return (
    <section className="bg-bg-dark py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Portfolio
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentWorks.map((item) => (
            <Link
          data-cursor="print"

              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group block border border-white/10  overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}