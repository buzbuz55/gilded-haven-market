import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Globe, Users, Heart, Star } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const trustFeatures = [
  {
    icon: Shield,
    title: "Authenticity Guarantee",
    description: "Every piece is verified by our team of expert authenticators using advanced technology and decades of experience."
  },
  {
    icon: Award,
    title: "Money-Back Guarantee", 
    description: "We stand behind every sale with a comprehensive money-back guarantee for your complete peace of mind."
  },
  {
    icon: Globe,
    title: "Trusted Global Delivery",
    description: "Secure, insured shipping worldwide with real-time tracking and white-glove delivery service."
  },
  {
    icon: Users,
    title: "Vetted Professional Sellers",
    description: "All our sellers are thoroughly vetted professionals with proven track records in luxury goods."
  },
  {
    icon: Heart,
    title: "Price-Match Guarantee",
    description: "Find a better price elsewhere? We'll match it, ensuring you always get the best value."
  },
  {
    icon: Star,
    title: "Free Cancellation within 24 Hours",
    description: "Changed your mind? Cancel your order within 24 hours for a full refund, no questions asked."
  }
];

const teamMembers = [
  {
    name: "Alexandra Dubois",
    title: "Chief Authentication Officer",
    image: "/lovable-uploads/35207a47-f86d-4263-a695-2451878962da.png",
    experience: "15+ years at Sotheby's"
  },
  {
    name: "Marcus Sterling",
    title: "Head of Luxury Watches",
    image: "/lovable-uploads/48018bf7-3ed6-4721-8cf8-add84f0a70ba.png", 
    experience: "Former Patek Philippe specialist"
  },
  {
    name: "Sophie Laurent",
    title: "Fine Jewelry Expert",
    image: "/lovable-uploads/4ea6babe-ba7c-4469-92bb-20afa242b397.png",
    experience: "Cartier heritage consultant"
  }
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The LUXE Promise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're committed to your satisfaction and peace of mind with every purchase. 
            Discover why thousands of collectors trust us with their most precious acquisitions.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in the heart of Europe's luxury capitals, LUXE was born from a passion for 
                  connecting extraordinary pieces with discerning collectors worldwide.
                </p>
                <p>
                  What started as a small atelier specializing in vintage timepieces has evolved into 
                  the world's premier marketplace for authenticated luxury goods, serving over 500,000 
                  collectors across 50 countries.
                </p>
                <p>
                  Every piece in our collection tells a story of craftsmanship, heritage, and timeless 
                  elegance. We believe that luxury is not just about owning beautiful objects, but about 
                  preserving the artistry and history they represent.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/d680c704-760c-47b1-91d8-090053404fe6.png"
                alt="LUXE Heritage"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Our Experts */}
        <div className="mb-16">
          <h2 className="font-playfair text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 mb-16 text-white">
          <h2 className="font-playfair text-3xl font-bold text-center mb-12">
            Trusted by Collectors Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">500K+</div>
              <p className="text-gray-300">Global Collectors</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">99.8%</div>
              <p className="text-gray-300">Authentication Accuracy</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">€50M+</div>
              <p className="text-gray-300">Items Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">4.9/5</div>
              <p className="text-gray-300">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Collection?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied collectors who trust LUXE for their most precious acquisitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8"
              onClick={() => navigate("/categories")}
            >
              START BROWSING
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-300 hover:border-gray-400 px-8"
              onClick={() => navigate("/consignment")}
            >
              CONSIGN WITH US
            </Button>
          </div>
        </div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default About;