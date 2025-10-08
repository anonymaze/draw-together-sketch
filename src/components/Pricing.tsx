import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for personal projects",
    icon: Sparkles,
    features: [
      "Unlimited boards",
      "Up to 3 collaborators",
      "Basic drawing tools",
      "Export as PNG",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "For professional teams",
    icon: Zap,
    features: [
      "Everything in Free",
      "Unlimited collaborators",
      "Advanced tools & templates",
      "Export as PNG, SVG, PDF",
      "Priority support",
      "Custom branding",
      "Version history",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    icon: Building,
    features: [
      "Everything in Pro",
      "SSO & advanced security",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Simple,{" "}
            <span className="gradient-text">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your team. Always free to start.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={plan.highlighted ? "md:-mt-4" : ""}
            >
              <Card
                className={`h-full relative ${
                  plan.highlighted
                    ? "border-2 border-primary shadow-glow"
                    : "border-2 hover:border-primary/50"
                } transition-smooth`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4 pb-8">
                  <div className={`w-14 h-14 mx-auto rounded-xl ${
                    plan.highlighted ? "gradient-hero" : "bg-muted"
                  } flex items-center justify-center`}>
                    <plan.icon
                      className={plan.highlighted ? "text-primary-foreground" : "text-foreground"}
                      size={28}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold gradient-text">
                      {plan.price}
                    </div>
                    {plan.period && (
                      <div className="text-muted-foreground text-sm">{plan.period}</div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-semibold ${
                      plan.highlighted
                        ? "gradient-hero text-primary-foreground shadow-lg hover:shadow-glow"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
