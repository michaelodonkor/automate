
import { Button } from "@/components/ui/button";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how our AI automation solutions can help your business operate more efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="#request-form">Request Integration</a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="mailto:contact@automateyourempire.com">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
