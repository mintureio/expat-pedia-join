import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Expat Pedia Community"
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Welcome to Expat Pedia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Your global directory connecting professionals and expatriates worldwide
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in duration-700 delay-300">
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex items-center gap-4 animate-in fade-in duration-700">
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">150+</p>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in duration-700 delay-200">
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10,000+</p>
                <p className="text-muted-foreground">Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-in fade-in duration-700 delay-400">
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with professionals worldwide and showcase your expertise in our exclusive directory
          </p>
          <Link to="/register">
            <Button size="lg" className="shadow-elegant">
              Register Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Expat Pedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
