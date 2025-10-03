import { Navigation } from "@/components/Navigation";
import { Globe2, Target, Users2, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            About Expat Pedia
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
            Connecting global professionals and expatriates across borders
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Expat Pedia is dedicated to creating a comprehensive global directory that connects professionals, 
              expatriates, and organizations worldwide. We facilitate meaningful connections and provide a platform 
              for showcasing expertise, fostering collaboration, and building a truly global community.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Connect with professionals across 150+ countries and expand your international network.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Excellence</h3>
              <p className="text-muted-foreground">
                Showcase your expertise and achievements in a professional directory trusted by thousands.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of 10,000+ professionals and expatriates sharing experiences.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-card">
              <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Platform</h3>
              <p className="text-muted-foreground">
                Your information is secure and handled with the highest standards of privacy and protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">Integrity:</strong> We maintain the highest standards of accuracy and honesty in our directory.
            </p>
            <p>
              <strong className="text-foreground">Inclusivity:</strong> We welcome professionals from all backgrounds and cultures.
            </p>
            <p>
              <strong className="text-foreground">Innovation:</strong> We continuously improve our platform to better serve our global community.
            </p>
            <p>
              <strong className="text-foreground">Connection:</strong> We believe in the power of meaningful professional relationships across borders.
            </p>
          </div>
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

export default About;
