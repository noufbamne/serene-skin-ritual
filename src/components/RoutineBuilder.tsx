import { ArrowLeft, ArrowRight, Sun, Moon, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  step: string;
  benefit: string;
  image: string;
}

interface RoutineBuilderProps {
  type: 'am' | 'pm';
  products: Product[];
  onNext: () => void;
  onBack: () => void;
}

const mockProducts = {
  am: [
    {
      id: "cleanser-am",
      name: "Gentle Gel Cleanser",
      step: "Step 1: Cleanser",
      benefit: "Removes impurities without drying",
      image: "🧴"
    },
    {
      id: "serum-am",
      name: "Vitamin C Serum",
      step: "Step 2: Serum",
      benefit: "Brightens and protects from damage",
      image: "💧"
    },
    {
      id: "moisturizer-am",
      name: "Lightweight Moisturizer",
      step: "Step 3: Moisturizer",
      benefit: "Hydrates without feeling heavy",
      image: "🥛"
    },
    {
      id: "sunscreen-am",
      name: "Broad Spectrum SPF 50",
      step: "Step 4: Sunscreen",
      benefit: "Essential UV protection",
      image: "☀️"
    }
  ],
  pm: [
    {
      id: "cleanser-pm",
      name: "Deep Clean Foam",
      step: "Step 1: Cleanser",
      benefit: "Removes makeup and daily buildup",
      image: "🧼"
    },
    {
      id: "serum-pm",
      name: "Niacinamide Serum",
      step: "Step 2: Serum",
      benefit: "Minimizes pores and controls oil",
      image: "✨"
    },
    {
      id: "moisturizer-pm",
      name: "Night Recovery Cream",
      step: "Step 3: Moisturizer",
      benefit: "Deep hydration while you sleep",
      image: "🌙"
    },
    {
      id: "eye-cream-pm",
      name: "Eye Repair Complex",
      step: "Step 4: Eye Care",
      benefit: "Targets dark circles and fine lines",
      image: "👁️"
    }
  ]
};

export function RoutineBuilder({ type, onNext, onBack }: RoutineBuilderProps) {
  const isAM = type === 'am';
  const products = mockProducts[type];
  const Icon = isAM ? Sun : Moon;
  const routineTitle = isAM ? 'Morning Routine' : 'Evening Routine';
  const routineTime = isAM ? 'Start your day right' : 'End your day with care';

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-primary" />
          <span className="font-medium text-foreground">{routineTitle}</span>
        </div>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your {routineTitle}
          </h2>
          <p className="text-muted-foreground">{routineTime}</p>
        </div>

        <div className="space-y-4">
          {products.map((product, index) => (
            <div key={product.id} className="card-soft">
              <div className="flex items-center gap-4">
                <div className="text-3xl">{product.image}</div>
                <div className="flex-1">
                  <p className="text-sm text-primary font-medium mb-1">
                    {product.step}
                  </p>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.benefit}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      View Product
                    </Button>
                    <Button size="sm" className="btn-soft flex items-center gap-1">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isAM && (
          <div className="mt-6 p-4 bg-accent rounded-lg">
            <h4 className="font-medium text-accent-foreground mb-2">
              💡 Pro Tip
            </h4>
            <p className="text-sm text-accent-foreground">
              Apply eye cream with your ring finger using gentle tapping motions for best results.
            </p>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 left-6 right-6">
        <Button 
          onClick={onNext}
          className="w-full btn-primary flex items-center justify-center gap-2 h-14"
        >
          {isAM ? 'See Evening Routine' : 'View Summary'}
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}