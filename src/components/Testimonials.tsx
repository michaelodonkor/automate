
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Roberts",
      position: "CTO, TechSolutions Inc.",
      content: "The AI automation integration has transformed our customer service department. We've reduced response times by 65% and increased customer satisfaction scores significantly."
    },
    {
      name: "Sarah Johnson",
      position: "Operations Director, Global Logistics",
      content: "Implementing AI automation for our inventory management has eliminated manual errors and reduced processing time by 78%. The ROI on this project was achieved in just 4 months."
    },
    {
      name: "David Chen",
      position: "CEO, Innovate Financial",
      content: "The enterprise AI integration has given us a competitive edge in the financial sector. Document processing that used to take days now happens in minutes with greater accuracy."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                  <blockquote className="italic text-muted-foreground">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
