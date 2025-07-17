import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, ArrowRight } from "lucide-react";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "cleansers", name: "Cleansers" },
    { id: "serums", name: "Serums" },
    { id: "moisturizers", name: "Moisturizers" },
    { id: "sunscreens", name: "Sunscreens" },
    { id: "treatments", name: "Treatments" }
  ];

  const products = [
    {
      id: 1,
      name: "Salicylic Acid 2% Face Wash",
      category: "cleansers",
      price: "₹349",
      originalPrice: "₹449",
      rating: 4.8,
      reviews: 2834,
      image: "/placeholder.svg",
      badge: "Bestseller",
      benefits: ["Unclogs pores", "Reduces acne", "Oil control"]
    },
    {
      id: 2,
      name: "Niacinamide 10% Face Serum",
      category: "serums",
      price: "₹599",
      originalPrice: "₹799",
      rating: 4.9,
      reviews: 5672,
      image: "/placeholder.svg",
      badge: "Most Popular",
      benefits: ["Reduces oil", "Minimizes pores", "Brightens skin"]
    },
    {
      id: 3,
      name: "Hyaluronic Acid 2% Face Serum",
      category: "serums",
      price: "₹649",
      originalPrice: "₹849",
      rating: 4.7,
      reviews: 3421,
      image: "/placeholder.svg",
      badge: "",
      benefits: ["Deep hydration", "Plumps skin", "Anti-aging"]
    },
    {
      id: 4,
      name: "SPF 60 PA++++ Sunscreen",
      category: "sunscreens",
      price: "₹449",
      originalPrice: "₹549",
      rating: 4.8,
      reviews: 2156,
      image: "/placeholder.svg",
      badge: "New",
      benefits: ["Broad spectrum", "Non-greasy", "Blue light protection"]
    },
    {
      id: 5,
      name: "Sepicalm 3% Oat Moisturizer",
      category: "moisturizers",
      price: "₹549",
      originalPrice: "₹699",
      rating: 4.6,
      reviews: 1897,
      image: "/placeholder.svg",
      badge: "",
      benefits: ["Soothes skin", "Long-lasting hydration", "For sensitive skin"]
    },
    {
      id: 6,
      name: "Retinol 0.3% Face Serum",
      category: "treatments",
      price: "₹799",
      originalPrice: "₹999",
      rating: 4.9,
      reviews: 4521,
      image: "/placeholder.svg",
      badge: "Advanced",
      benefits: ["Anti-aging", "Reduces fine lines", "Improves texture"]
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-soft to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Science-backed skincare solutions for every skin type and concern
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                Not sure what products are right for you?
              </p>
              <Button asChild className="btn-primary w-full">
                <Link to="/skin-test">
                  Take Skin Test
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="card-soft hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-foreground">
                            {product.price}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice}
                          </span>
                        </div>
                      </div>
                      <Button className="btn-primary">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-soft">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Still confused about what to choose?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take our personalized skin test to get product recommendations based on your skin type and concerns
            </p>
            <Button asChild size="lg" className="btn-primary">
              <Link to="/skin-test">
                Get Personalized Recommendations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};