
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    plan: "standard",
    requirements: "",
    captchaResponse: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, plan: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // This would be replaced with your actual Supabase integration
    // For now, we'll just simulate the submission
    try {
      // Simulate API call
      setTimeout(() => {
        setSubmitting(false);
        toast({
          title: "Request Submitted",
          description: "We'll be in touch soon to discuss your AI integration.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          plan: "standard",
          requirements: "",
          captchaResponse: "",
        });
      }, 1500);
    } catch (error) {
      setSubmitting(false);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-3xl shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl">AI Integration Request</CardTitle>
        <CardDescription className="text-primary-foreground/80">
          Get started with AI automation for your business
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input 
                id="company" 
                name="company" 
                value={formData.company} 
                onChange={handleChange} 
                required 
                placeholder="Your Company"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="(123) 456-7890"
              />
            </div>
          </div>
          
          <div className="space-y-3">
            <Label>Select Integration Plan</Label>
            <RadioGroup 
              value={formData.plan} 
              onValueChange={handleRadioChange} 
              className="flex flex-col space-y-3"
            >
              <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="standard" id="standard" className="mt-1" />
                <div>
                  <Label htmlFor="standard" className="font-semibold text-base">Standard Integration ($1,999)</Label>
                  <p className="text-muted-foreground text-sm">
                    Basic AI workflow automation for small to medium businesses.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 border p-4 rounded-md hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                <div>
                  <Label htmlFor="enterprise" className="font-semibold text-base">Enterprise Integration ($4,999)</Label>
                  <p className="text-muted-foreground text-sm">
                    Advanced AI integration with custom workflows and priority support.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="requirements">Project Requirements</Label>
            <Textarea 
              id="requirements" 
              name="requirements" 
              value={formData.requirements} 
              onChange={handleChange} 
              rows={5} 
              placeholder="Describe your business process and automation needs..."
              required 
            />
          </div>
          
          <div className="bg-muted p-4 rounded-md">
            <p className="text-sm text-muted-foreground mb-2">
              For security, please complete the CAPTCHA verification.
            </p>
            <div className="h-12 flex items-center justify-center border border-border rounded-md bg-card">
              <p className="text-sm text-muted-foreground">
                CAPTCHA would appear here in a production environment
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This helps us prevent spam and automated submissions.
            </p>
          </div>
          
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Request"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default RequestForm;
