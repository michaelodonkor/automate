
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Automate Your Business with <span className="text-primary">AI Integration</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Transform your business operations with cutting-edge AI automation. Streamline processes, reduce costs, and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#request-form">Request Integration</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-1">
              <div className="bg-background rounded-lg p-6">
                <img 
                  src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="AI Automation" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
