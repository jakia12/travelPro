// app/(marketing)/_components/TravelHero.tsx
export default function TravelHero() {
  return (
    <section className="relative 2xl:py-[400px] lg:py-[300px] py-[210px] w-full overflow-hidden ">
      {/* Background image layer (replace src with your own image under /public) */}
      <div className="absolute inset-0 bg-cover bg-center bgBan" />

      {/* Soft top mask for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p
          className="mb-4 text-xl tracking-[0.3em] text-white/80 md:text-base satisfy "
          style={{ fontSize: "28px" }}
        >
          LET’S TRAVEL THE WORLD WITH US
        </p>

        <h1 className=" text-4xl leading-tight text-white drop-shadow-md md:text-6xl lg:text-7xl playfair">
          Travel Top Destination
          <br className="hidden md:block" /> of The World
        </h1>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#destinations"
            style={{ textDecoration: "none" }}
            className="group inline-flex items-center rounded-full border-[3px] border-white px-[35px] py-3 text-white backdrop-blur transition hover:bg-[#2ecc71] bg-white/15 shadow-2xl "
          >
            Explore Now
            <svg
              className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Decorative glass chip in corner */}
      <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
    </section>
  );
}
