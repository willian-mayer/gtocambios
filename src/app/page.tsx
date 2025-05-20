import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import heroData from "@/data/hero.json"
import routesJson from "@/data/routes.json"
import { Route } from "@/types/routes"
import services from "@/data/services.json"

export default function Home() {
  return (
   <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
      <Hero
                title={heroData.title}
          description={heroData.description}
          backgroundVideo={heroData.backgroundVideo}
          routes={routesJson as Route[]}/>

      </section>
            <section className="snap-start py-12 bg-gray-100">
        <Carousel items={services} />
      </section>
   </div>
  );
}
