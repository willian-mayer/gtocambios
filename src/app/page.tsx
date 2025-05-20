import Hero from "@/components/Hero";
import heroData from "@/data/hero.json"
import routesJson from "@/data/routes.json"
import { Route } from "@/types/routes"
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
   </div>
  );
}
