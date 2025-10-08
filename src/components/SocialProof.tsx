import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    company: "TechFlow Inc",
    content: "Draw has transformed how our team collaborates. The hand-drawn feel makes wireframes feel more approachable and encourages creativity.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Lead",
    company: "DevCorp",
    content: "Finally, a whiteboard tool that doesn't get in the way. Real-time collaboration actually works, and the infinite canvas is a game-changer.",
    rating: 5,
    initials: "MR",
  },
  {
    name: "Emma Thompson",
    role: "Teacher",
    company: "Lincoln Academy",
    content: "My students love the interactive diagrams. It makes remote learning feel more personal and engaging than ever before.",
    rating: 5,
    initials: "ET",
  },
];

const companies = ["Stripe", "Notion", "Figma", "Slack", "GitHub", "Linear"];

const SocialProof = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Loved by{" "}
            <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join teams from leading companies who trust Draw for their creative collaboration
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 space-y-4">
                  <Quote className="text-primary/30" size={40} />
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-accent fill-accent" size={16} />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <Avatar>
                      <AvatarFallback className="gradient-hero text-primary-foreground font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-semibold">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {companies.map((company) => (
              <div
                key={company}
                className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-smooth"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
