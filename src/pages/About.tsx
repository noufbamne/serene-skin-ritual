import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Award, Heart } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Science-First Approach",
      description: "Every product is formulated based on proven scientific research and dermatological studies."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Transparency",
      description: "We believe in complete transparency about ingredients, concentrations, and what our products can and cannot do."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "All products are manufactured in certified facilities and undergo rigorous quality testing."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer-Centric",
      description: "Your skin health and satisfaction are at the heart of everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-soft to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Minimalist
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're on a mission to make effective skincare accessible to everyone through 
            science-backed formulations, transparent ingredients, and honest communication.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2020, Minimalist was born out of frustration with the skincare industry's 
                tendency to overcomplicate simple solutions. We noticed that effective ingredients 
                were often hidden behind marketing claims and inflated prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  The Problem We Solve
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  The skincare market was filled with products that either didn't work or 
                  were too expensive for everyday use. Customers were confused by complex 
                  routines and unclear ingredient lists.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We decided to change this by creating products with proven ingredients 
                  at effective concentrations, clearly labeled, and priced fairly.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize effective skincare by making scientifically-proven 
                  formulations accessible to everyone, regardless of their budget or 
                  skincare knowledge level.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that great skin shouldn't be a luxury - it should be 
                  achievable for everyone through simple, effective products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make, from product formulation to customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-soft text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">10M+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Products</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};