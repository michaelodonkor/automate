
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import PricingPlans from "@/components/PricingPlans";
import RequestForm from "@/components/RequestForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <PricingPlans />
        <Testimonials />
        <FAQ />
        <RequestForm />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
