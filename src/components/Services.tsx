
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and workflows to save time and reduce errors."
    },
    {
      title: "Intelligent Document Processing",
      description: "Extract, process, and analyze information from documents using AI."
    },
    {
      title: "Customer Service AI",
      description: "Implement AI-powered chatbots and support systems to improve customer experience."
    },
    {
      title: "Predictive Analytics",
      description: "Leverage AI to predict future trends and make data-driven decisions."
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed to address your specific business challenges."
    },
    {
      title: "AI Integration Consulting",
      description: "Expert guidance on implementing AI automation in your existing systems."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Automation Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a range of AI integration services to help your business operate more efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
