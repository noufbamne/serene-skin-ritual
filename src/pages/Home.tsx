import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Users, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/welcome-hero.jpg";

export const Home = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Science-Backed",
      description: "Formulated with proven ingredients backed by research"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "10M+ Happy Customers",
      description: "Trusted by millions for effective skincare solutions"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Dermatologist Tested",
      description: "All products tested and approved by dermatologists"
    }
  ];

  const testimonials = [
    {
      name: "Priya S.",
      rating: 5,
      text: "My skin has never looked better! The personalized routine works perfectly."
    },
    {
      name: "Rahul K.",
      rating: 5,
      text: "Simple, effective products that actually deliver results. Highly recommended!"
    },
    {
      name: "Sneha M.",
      rating: 5,
      text: "Love how gentle yet effective these products are. Perfect for sensitive skin."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-soft via-white to-primary-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Your skin is
                  <span className="text-primary block">unique.</span>
                  Let's build the perfect routine.
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Discover science-backed skincare tailored specifically for your skin type, concerns, and lifestyle.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="btn-primary">
                  <Link to="/skin-test">
                    Test Your Skin
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/products">
                    Shop Products
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Beautiful skin"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 (50k+ reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose Minimalist?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in simple, effective skincare backed by science
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-soft text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to transform your skin?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take our personalized skin test and get product recommendations tailored just for you
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/skin-test">
                Start Skin Test
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-soft">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-foreground">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};