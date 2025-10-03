import { Navigation } from "@/components/Navigation";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-white/90">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-card space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Expat Pedia, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Use of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Expat Pedia provides a global directory service for professionals and expatriates. You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate and truthful information during registration</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use the service in compliance with all applicable laws and regulations</li>
                <li>Not misuse or abuse the platform or other users' information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. User Content</h2>
              <p className="text-muted-foreground leading-relaxed">
                By submitting content (including photographs and professional information) to Expat Pedia, 
                you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display 
                your content in connection with the service and promotional materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to protecting your privacy. Your personal information will be handled in 
                accordance with our Privacy Policy. We implement appropriate security measures to protect 
                your data from unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on Expat Pedia, including text, graphics, logos, and software, is the property 
                of Expat Pedia or its content suppliers and is protected by international copyright laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Expat Pedia shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use or inability to use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Account Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to terminate or suspend access to our service immediately, without 
                prior notice or liability, for any reason whatsoever, including breach of these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time. Continued use of the 
                service after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable international 
                laws, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us through our website or 
                email our support team.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Expat Pedia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Terms;
