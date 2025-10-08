import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-subtle -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(239_84%_67%/0.1),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(258_90%_66%/0.1),transparent_50%)] -z-10" />
      
      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] text-primary/20"
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-[15%] text-secondary/20"
      >
        <Zap size={35} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-32 left-[15%] text-accent/20"
      >
        <Users size={38} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  <Sparkles size={16} className="mr-2" />
                  Sketch Ideas Together, Beautifully
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Where Ideas Come to{" "}
                <span className="gradient-text">Life</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
              >
                A collaborative whiteboard that feels as natural as pen and paper. Draw, sketch, and brainstorm with your team in real-time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="gradient-hero text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-glow transition-smooth group"
              >
                Start Drawing Free
                <Sparkles className="ml-2 group-hover:animate-pulse-glow" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 py-6 border-2 hover:border-primary transition-smooth"
              >
                See How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8"
            >
              <div>
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-sm text-muted-foreground">Daily Sketches</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">Active Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Collaborative whiteboard with sketches and diagrams"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/20 rounded-2xl p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                  <Users className="text-primary-foreground" size={24} />
                </div>
                <div>
                  <div className="font-bold text-foreground">Real-time Sync</div>
                  <div className="text-sm text-muted-foreground">Unlimited collaborators</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
