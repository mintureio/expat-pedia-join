import { RegistrationForm } from "@/components/RegistrationForm";
import { Globe, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="The Expatpedia Community"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to The Expatpedia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Join our global directory of professionals and expatriates making an impact worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center gap-3 text-white animate-in fade-in duration-700 delay-300">
              <Globe className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm opacity-90">Countries</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white animate-in fade-in duration-700 delay-500">
              <Users className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-sm opacity-90">Members</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white animate-in fade-in duration-700 delay-700">
              <Award className="w-8 h-8" />
              <div className="text-left">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm opacity-90">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Register Your Profile
            </h2>
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
            © 2024 The Expatpedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
