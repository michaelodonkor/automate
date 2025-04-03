
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does the AI integration process take?",
      answer: "The timeline varies based on the complexity of your project and the plan you choose. Standard Integration typically takes around 30 days, while Enterprise Integration may take 60 days or more depending on the number of processes being automated."
    },
    {
      question: "What kind of businesses can benefit from AI automation?",
      answer: "Almost any business with repetitive processes can benefit from AI automation. We've worked with companies in finance, healthcare, retail, manufacturing, logistics, and many other industries to automate their workflows."
    },
    {
      question: "Do I need any technical knowledge to use the AI system?",
      answer: "No, our AI automation solutions are designed with user-friendly interfaces. We provide comprehensive training to ensure your team can effectively use the system without needing technical expertise."
    },
    {
      question: "Can the AI integration work with our existing systems?",
      answer: "Yes, our solutions are designed to integrate with your existing systems. We'll assess your current technology stack during the initial consultation and design a solution that works seamlessly with your infrastructure."
    },
    {
      question: "Is my business data secure with your AI automation?",
      answer: "Absolutely. We prioritize data security and comply with industry standards and regulations. All data is encrypted, and we implement strict access controls to protect your sensitive information."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We offer ongoing support based on your plan. The Standard plan includes 1 month of post-implementation support, while the Enterprise plan includes 3 months. Extended support packages are also available."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our AI automation services.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
