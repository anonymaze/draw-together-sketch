import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(239_84%_67%/0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Sparkles size={16} className="mr-2" />
            Start creating today
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Bring Your{" "}
            <span className="gradient-text">Ideas to Life?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams already collaborating on Draw. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="gradient-hero text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-glow transition-smooth group"
            >
              Get Started Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 border-2"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free forever. No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
