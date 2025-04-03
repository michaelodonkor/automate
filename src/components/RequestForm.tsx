
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
      // Here you would add your Supabase client code to save the data
      // const { data, error } = await supabase.from('requests').insert([formData])
      
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
    <section id="request-form" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Request AI Integration</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fill out the form below to get started with your AI automation project.
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Integration Request</CardTitle>
            <CardDescription>
              Provide your contact information and project details.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Select Integration Plan</Label>
                <RadioGroup 
                  value={formData.plan} 
                  onValueChange={handleRadioChange} 
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-normal">Standard Integration ($1,999)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <Label htmlFor="enterprise" className="font-normal">Enterprise Integration ($4,999)</Label>
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
      </div>
    </section>
  );
};

export default RequestForm;
