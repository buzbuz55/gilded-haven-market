import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DollarSign, Shield, Clock, Users, Star, Upload, Check } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const consignmentSteps = [
  {
    icon: Upload,
    title: "Submit Your Item",
    description: "Upload photos and details of your luxury piece"
  },
  {
    icon: Star,
    title: "Expert Authentication",
    description: "Our specialists verify authenticity and condition"
  },
  {
    icon: DollarSign,
    title: "Valuation & Listing",
    description: "Receive professional appraisal and list for sale"
  },
  {
    icon: Check,
    title: "Get Paid",
    description: "Receive up to 90% of the sale price within 48 hours"
  }
];

const successStories = [
  {
    amount: "€47,500",
    item: "Hermès Birkin sold in 24 hours",
    rating: 5
  },
  {
    amount: "€23,800", 
    item: "Vintage Rolex collection",
    rating: 5
  },
  {
    amount: "€15,200",
    item: "Contemporary artwork",
    rating: 5
  }
];

const Consignment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    itemType: "",
    brand: "",
    description: "",
    condition: "",
    purchasePrice: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll contact you within 24 hours for a free evaluation.");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-blue-50/20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Treasures into Fortune
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the most prestigious luxury consignment house, where extraordinary pieces meet their destined collectors. 
            From authentication to swift payment, we orchestrate every detail with imperial precision.
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">How Consignment Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consignmentSteps.map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Consignment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Get Free Evaluation</CardTitle>
              <p className="text-gray-600">Tell us about your luxury item for a professional appraisal</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="itemType">Item Type</Label>
                  <Select value={formData.itemType} onValueChange={(value) => setFormData({...formData, itemType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select item type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jewelry">Jewelry</SelectItem>
                      <SelectItem value="watches">Watches</SelectItem>
                      <SelectItem value="handbags">Handbags</SelectItem>
                      <SelectItem value="art">Art</SelectItem>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="brand">Brand/Designer</Label>
                  <Input 
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    placeholder="e.g., Cartier, Hermès, Rolex"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Detailed description of your item"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="condition">Condition</Label>
                  <Select value={formData.condition} onValueChange={(value) => setFormData({...formData, condition: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mint">Mint/New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very-good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="purchasePrice">Original Purchase Price (Optional)</Label>
                  <Input 
                    id="purchasePrice"
                    value={formData.purchasePrice}
                    onChange={(e) => setFormData({...formData, purchasePrice: e.target.value})}
                    placeholder="€0"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3">
                  GET FREE EVALUATION
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Success Stories */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">Royal Success Stories</h3>
            <p className="text-gray-600 mb-8">Real consigners, extraordinary results</p>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <Card key={index} className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{story.amount}</div>
                  <p className="text-gray-600 mb-3">{story.item}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-500 mr-3" />
                <span>100% Secure & Insured</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                <span>Up to 90% Commission</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-500 mr-3" />
                <span>Payment in 48 Hours</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-green-500 mr-3" />
                <span>500K+ Global Collectors</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Consignment;