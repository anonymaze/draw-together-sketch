import { motion } from "framer-motion";
import { Pencil, Users, Infinity, Palette, Share2, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Pencil,
    title: "Hand-Drawn Feel",
    description: "Sketches that look naturally hand-drawn with customizable styles and textures.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "Real-Time Collaboration",
    description: "Work together seamlessly with unlimited team members, anywhere in the world.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Infinity,
    title: "Infinite Canvas",
    description: "Never run out of space for your ideas. Pan, zoom, and explore without limits.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Palette,
    title: "Rich Drawing Tools",
    description: "Pens, shapes, text, colors, sticky notes, and more creative tools at your fingertips.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Share2,
    title: "Export & Share",
    description: "Download as PNG, SVG, or PDF. Share with a link for instant collaboration.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Globe,
    title: "Works Everywhere",
    description: "Browser-based with no installation needed. Access from any device, anytime.",
    gradient: "from-accent to-secondary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to make your ideas flow naturally from mind to canvas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/50 transition-smooth hover:shadow-lg group">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                    <feature.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
