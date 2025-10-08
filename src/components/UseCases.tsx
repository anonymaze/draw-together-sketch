import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, MessageSquare, Code } from "lucide-react";
import useCaseProduct from "@/assets/use-case-product.jpg";
import useCaseEducation from "@/assets/use-case-education.jpg";
import useCaseRemote from "@/assets/use-case-remote.jpg";
import useCaseDevelopers from "@/assets/use-case-developers.jpg";

const useCases = [
  {
    icon: Lightbulb,
    title: "Product Teams",
    description: "Create wireframes, user flows, and product roadmaps collaboratively",
    image: useCaseProduct,
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Educators",
    description: "Teach concepts visually with interactive diagrams and explanations",
    image: useCaseEducation,
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Remote Teams",
    description: "Virtual brainstorming sessions that bring everyone together",
    image: useCaseRemote,
    color: "secondary",
  },
  {
    icon: Code,
    title: "Developers",
    description: "Design system architectures and technical documentation",
    image: useCaseDevelopers,
    color: "primary",
  },
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Built for{" "}
            <span className="gradient-text">Every Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From product design to education, Draw adapts to your workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-smooth"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-${useCase.color}/10 flex items-center justify-center`}>
                    <useCase.icon className={`text-${useCase.color}`} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
