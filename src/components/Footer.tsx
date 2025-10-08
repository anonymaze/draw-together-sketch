import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Use Cases", "Roadmap", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press Kit", "Contact"],
    Resources: ["Documentation", "Help Center", "Community", "API", "Templates"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates, tips, and creative inspiration delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="gradient-hero text-primary-foreground font-semibold">
              Subscribe
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Draw</span>
            </a>
            <p className="text-muted-foreground mb-4">
              Sketch ideas together, beautifully.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary transition-smooth flex items-center justify-center group"
                >
                  <social.icon
                    className="text-muted-foreground group-hover:text-primary-foreground transition-smooth"
                    size={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2025 Draw. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
