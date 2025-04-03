
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

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

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('integration_requests')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            plan: formData.plan,
            requirements: formData.requirements
          }
        ]);
      
      if (error) throw error;
      
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
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg">
      <CardHeader className="bg-primary/80 text-primary-foreground rounded-t-lg backdrop-blur-md border-b border-white/10">
        <CardTitle className="text-2xl">AI Integration Request</CardTitle>
        <CardDescription className="text-primary-foreground/90">
          Get started with AI automation for your business
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 bg-background/30">
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
                className="bg-white/20 backdrop-blur-sm border-white/30 focus-visible:ring-accent"
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
                className="bg-white/20 backdrop-blur-sm border-white/30 focus-visible:ring-accent"
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
                className="bg-white/20 backdrop-blur-sm border-white/30 focus-visible:ring-accent"
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
                className="bg-white/20 backdrop-blur-sm border-white/30 focus-visible:ring-accent"
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
              <div className="flex items-start space-x-3 border border-white/20 p-4 rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm">
                <RadioGroupItem value="standard" id="standard" className="mt-1" />
                <div>
                  <Label htmlFor="standard" className="font-semibold text-base">Standard Integration ($1,999)</Label>
                  <p className="text-muted-foreground text-sm">
                    Basic AI workflow automation for small to medium businesses.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 border border-white/20 p-4 rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm">
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
              className="bg-white/20 backdrop-blur-sm border-white/30 focus-visible:ring-accent"
            />
          </div>
          
          <div className="bg-white/5 p-4 rounded-md border border-white/20">
            <p className="text-sm text-muted-foreground mb-2">
              For security, please complete the CAPTCHA verification.
            </p>
            <div className="h-12 flex items-center justify-center border border-white/20 rounded-md bg-white/10 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">
                CAPTCHA would appear here in a production environment
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              This helps us prevent spam and automated submissions.
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" 
            disabled={submitting}
          >
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
