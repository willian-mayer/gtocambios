import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import services from "@/data/services.json";
import AboutUs from "@/components/AboutUs";
import aboutUsData from "@/data/aboutus.json";
import ContactUs from "@/components/ContactUs";
import contactData from "@/data/contact.json";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start">
        <Hero
          title={heroData.title}
          description={heroData.description}
          backgroundVideo={heroData.backgroundVideo}
          routes={routesJson as Route[]}
        />
      </section>
      <section className="snap-start py-12 bg-gray-100">
        <Carousel items={services} />
      </section>
      <section className="snap-start">
        <AboutUs
          title={aboutUsData.title}
          description={aboutUsData.description}
          imageUrl={aboutUsData.imageUrl}
        />
      </section>
      <section className="snap-start">
<ContactUs contacts={contactData.contacts} />

        <Footer links={routesJson}/>
      </section>
    </div>
  );
}
