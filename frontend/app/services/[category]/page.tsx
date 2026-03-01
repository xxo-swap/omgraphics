import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

// 1. Updated Props type to reflect that params is now a Promise
type Props = {
  params: Promise<{ category: string }>;
};

// 2. Component must be async
export default async function CategoryPage({ params }: Props) {
  // 3. Await the params to get the actual slug
  const { category: categorySlug } = await params;

  const category = services.find(
    (c) => c.slug === categorySlug
  );

  if (!category) return notFound();

  return (
    <section className="bg-[#141414] py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {category.title}
          </span>
        </h1>

        <p className="text-white/60 mb-16 max-w-2xl">
          {category.description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.items.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${category.slug}/${item.slug}`}
              // 4. Added your custom cursor attribute here
              data-cursor="print" 
              className="p-8 bg-white/5 border border-white/10  hover:border-primary/40 transition group"
            >
              <h3 className="text-white font-semibold mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm line-clamp-3">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}