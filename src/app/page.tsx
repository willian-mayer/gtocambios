import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import heroData from "@/data/hero.json";
import routesJson from "@/data/routes.json";
import { Route } from "@/types/routes";
import AboutUs from "@/components/AboutUs";
import aboutUsData from "@/data/aboutus.json";
import ContactUs from "@/components/ContactUs";
import contactData from "@/data/contact.json";
import Footer from "@/components/Footer";
import ratesData from "@/data/rates.json"
import scanners from '@/data/scanners.json';
import oleo from '@/data/oleo.json';
import Gallery from "@/components/Gallery";
import galleryData from '@/data/gallery.json';

export default function Home() {
    const equipmentGroups = [...scanners, ...oleo];
  return (
    <div className="h-screen overflow-y-scroll snap-y scroll-smooth">
      <section className="">
        <Hero
          title={heroData.title}
          description={heroData.description}
          backgroundVideo={heroData.backgroundVideo}
          routes={routesJson as Route[]}
        />
      </section>
    <section className="py-12 bg-gray-100">
      <Carousel data={equipmentGroups} />
    </section>
    <section className="bg-gray-50">
  <Gallery images={galleryData} />
</section>
    <section className="">
      <AboutUs
        title={aboutUsData.title}
        description={aboutUsData.description}
        imageUrl={aboutUsData.imageUrl}
        rates={ratesData}
      />
    </section>
      <section className="">
<ContactUs contacts={contactData.contacts} />

        <Footer links={routesJson}/>
      </section>
    </div>
  );
}
