import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { recentWorks } from "@/data/services";

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = recentWorks.find(
    (item) => item.slug === slug
  );

  if (!project) return notFound();

  return (
    <section className="bg-bg-dark py-28 min-h-screen max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {project.title}
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[450px]  overflow-hidden mb-20">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ✅ GALLERY (ALL IMAGES FROM OBJECT) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {project.images.map((img: string, index: number) => (
            <div
              key={index}
              className="relative h-72  overflow-hidden group"
            >
              <Image
                src={img}
                alt={`${project.title} image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>
          ))}
        </div>

        {/* Services Used (Optional) */}
        {project.servicesUsed && (
          <div className="text-center mb-20">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Services Used
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {project.servicesUsed.map((service: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm bg-white/10 text-white/80 border border-white/20 capitalize"
                >
                  {service.replaceAll("-", " ")}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back CTA */}
        <div className="text-center">
          <Link
          data-cursor="print"
            href="/portfolio"
            className="px-8 py-4 bg-primary text-white  font-semibold hover:opacity-90 transition"
          >
            Back to Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}