
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Standard Integration",
      price: "$1,999",
      description: "Perfect for small to medium-sized businesses looking to start with AI automation.",
      features: [
        "Custom AI automation for 1 business process",
        "30-day implementation timeline",
        "Basic integration with existing systems",
        "1 month of post-implementation support",
        "User training session",
        "Standard reporting and analytics"
      ]
    },
    {
      name: "Enterprise Integration",
      price: "$4,999",
      description: "Comprehensive AI automation solution for larger enterprises with complex needs.",
      features: [
        "Custom AI automation for 3 business processes",
        "60-day implementation timeline",
        "Advanced integration with existing systems",
        "3 months of post-implementation support",
        "Multiple user training sessions",
        "Advanced reporting and analytics",
        "Dedicated account manager",
        "Custom AI model training"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that best fits your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`h-full ${index === 1 ? 'border-primary shadow-md' : ''}`}>
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> / project</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"} asChild>
                  <a href="#request-form">Request Integration</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
