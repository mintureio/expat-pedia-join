import { Navigation } from "@/components/Navigation";
import { RegistrationForm } from "@/components/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Registration Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Register Your Profile
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals in our exclusive directory. Share your expertise and connect with the global community.
            </p>
          </div>
          
          <RegistrationForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Expat Pedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Register;
