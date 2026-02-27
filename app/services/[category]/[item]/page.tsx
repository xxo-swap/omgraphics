import { services } from "@/data/services";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string; item: string }>;
};

export default async function ServiceDetail({ params }: Props) {
  // Normalize slugs to avoid casing/trailing issues
  const { category: categorySlug, item: itemSlug } = await params;

  // Find the category
  const category = services.find(
    (c) => c.slug === categorySlug
  );
  // If category is missing, return 404
  if (!category) return notFound();

  // Defensive: ensure items array exists
  const items = category.items ?? [];

  // Find the specific item
  const item = items.find((i) => i.slug.toLowerCase() === itemSlug);

  // If item not found, return 404
  if (!item) return notFound();

  // Defensive: ensure features exist
  const features = item.features ?? [];

  return (
    <section className="bg-[#141414] py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {item.title}
          </span>
        </h1>

        <p className="text-white/60 mb-12">{item.description}</p>

        <div className="space-y-4">
          {features.length > 0 ? (
            features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <span className="text-white/70 text-sm">{feature}</span>
              </div>
            ))
          ) : (
            <p className="text-white/50">No features available for this item.</p>
          )}
        </div>
      </div>
    </section>
  );
}