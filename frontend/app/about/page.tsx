"use client";

export default function AboutPage() {
  return (
    <section className="relative bg-[#141414] py-28 overflow-hidden max-w-[1440px] mx-auto">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[350px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary blur-[160px] opacity-10 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Company
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-3xl mx-auto leading-relaxed">
            We specialize in high-precision CTP plate production and premium
            print solutions. Our commitment to accuracy, reliability, and
            quality ensures that every project meets the highest industry
            standards.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To deliver precision-driven printing solutions through advanced
              technology, expert craftsmanship, and structured workflows that
              guarantee consistency and performance.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md ">
            <h3 className="text-xl font-semibold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              To become a trusted industry leader in CTP and offset print
              production by continuously innovating and maintaining strict
              quality control standards.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision",
                desc: "Accurate calibration and plate imaging for flawless output.",
              },
              {
                title: "Reliability",
                desc: "Consistent turnaround times and dependable service.",
              },
              {
                title: "Quality",
                desc: "Strict inspection and production standards across all projects.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/40 transition-all duration-500"
              >
                <h3 className="text-white font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-white/60 leading-relaxed">
            With advanced imaging systems and a structured workflow, we ensure
            every plate and print job meets industry specifications. Our team
            combines technical expertise with operational efficiency to support
            businesses across packaging, publishing, and commercial printing.
          </p>
        </div>
      </div>
    </section>
  );
}