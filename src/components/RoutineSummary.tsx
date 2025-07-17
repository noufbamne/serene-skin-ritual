import { ArrowLeft, Download, MessageCircle, RotateCcw, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoutineSummaryProps {
  onBack: () => void;
  onRetakeQuiz: () => void;
}

export function RoutineSummary({ onBack, onRetakeQuiz }: RoutineSummaryProps) {
  const handleDownloadPDF = () => {
    // Mock PDF download
    console.log("Downloading PDF...");
  };

  const handleSendToWhatsApp = () => {
    // Mock WhatsApp share
    const message = encodeURIComponent("Check out my personalized skincare routine from SkinCare app!");
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <h1 className="font-semibold text-foreground">Your Routine</h1>
        <div className="w-6"></div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your Perfect Routine is Ready!
          </h2>
          <p className="text-muted-foreground">
            8 products carefully selected for your unique skin needs
          </p>
        </div>

        {/* Morning Routine Summary */}
        <div className="card-soft mb-4">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            ☀️ Morning Routine
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Gentle Gel Cleanser</span>
              <span className="text-primary">₹299</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Vitamin C Serum</span>
              <span className="text-primary">₹599</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lightweight Moisturizer</span>
              <span className="text-primary">₹399</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Broad Spectrum SPF 50</span>
              <span className="text-primary">₹499</span>
            </div>
          </div>
        </div>

        {/* Evening Routine Summary */}
        <div className="card-soft mb-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            🌙 Evening Routine
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Deep Clean Foam</span>
              <span className="text-primary">₹349</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Niacinamide Serum</span>
              <span className="text-primary">₹499</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Night Recovery Cream</span>
              <span className="text-primary">₹549</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Eye Repair Complex</span>
              <span className="text-primary">₹699</span>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="card-floating mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total Value</span>
            <div className="text-right">
              <div className="text-sm text-muted-foreground line-through">₹3,889</div>
              <div className="text-xl font-bold text-primary">₹2,999</div>
              <div className="text-xs text-success">Save ₹890 (23%)</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleDownloadPDF}
            className="w-full btn-primary flex items-center justify-center gap-2 h-12"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
          
          <Button 
            onClick={handleSendToWhatsApp}
            variant="outline"
            className="w-full btn-outline flex items-center justify-center gap-2 h-12"
          >
            <MessageCircle className="w-5 h-5" />
            Send to WhatsApp
          </Button>

          <Button 
            onClick={onRetakeQuiz}
            variant="ghost"
            className="w-full flex items-center justify-center gap-2 h-12 text-muted-foreground"
          >
            <RotateCcw className="w-5 h-5" />
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}