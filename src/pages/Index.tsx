
import RequestForm from "@/components/RequestForm";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/30 via-background to-accent/30 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] pointer-events-none"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>
      <RequestForm />
      <Toaster />
    </div>
  );
};

export default Index;
