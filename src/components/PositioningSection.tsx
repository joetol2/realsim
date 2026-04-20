import ansysImage from "@/assets/ansys-fea.webp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PositioningSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative z-10 bg-background py-24 sm:py-32 border-t border-border">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-base font-heading tracking-[0.3em] uppercase text-muted-foreground mb-6">
          The Challenge
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-8">
              Simulation is not reality.
            </h2>
            <p className="text-base sm:text-lg text-text-body leading-relaxed mb-6">
              Robots trained entirely in simulation often fail when deployed in the physical world.
              Differences in physics, sensor noise, actuator response, and environmental variability
              create a gap that costs time, money, and limits what&apos;s possible.
            </p>
            <p className="text-base sm:text-lg text-text-body leading-relaxed">
              We&apos;re building tools to close that gap — making simulation a more reliable
              foundation for real-world robotic performance.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
            <img
              src={ansysImage}
              alt="FEA simulation visualization"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
