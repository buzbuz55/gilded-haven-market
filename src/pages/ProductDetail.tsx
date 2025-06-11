
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Share2, ArrowLeft, ChevronRight, Star, Info, Shield, Truck, RotateCcw, Crown, Certificate } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sampleProducts = [
  {
    id: "1",
    title: "Collier Impérial Émeraude & Diamants Exceptionnels",
    price: 450000,
    originalPrice: null,
    image: "/lovable-uploads/47af9bc4-5eea-4731-9e23-75531c9e81e4.png",
    brand: "Bulgari High Jewelry",
    category: "Haute Joaillerie Impériale",
    isSale: false,
    seller: "Maison Luxe - Expert depuis 1847",
    sellerLocation: "Paris, Place Vendôme",
    responseTime: "Réponse immédiate",
    sellerType: "MAISON PARTENAIRE",
    isVerified: true,
    rating: 5.0,
    reviewCount: 287,
    description: "Collier d'exception de la collection High Jewelry Bulgari.\n\nOrné d'émeraudes colombiennes d'exception et de diamants taille brillant, cette pièce unique incarne l'art joaillier italien à son apogée.\n\nCertificat d'authenticité et de provenance inclus.",
    authenticity: "Garantie d'Authenticité Luxe : Certification par nos experts, Garantie de Remboursement, Annulation sous 48h",
    condition: "État neuf - Jamais porté",
    shippingInfo: "Livraison mondiale sécurisée",
    returnPolicy: "Retours acceptés sous 30 jours.",
    provenance: "Collection privée européenne, acquis directement chez Bulgari Rome",
    materials: "Or blanc 18k, émeraudes colombiennes (15,2 carats), diamants (8,7 carats)",
    dimensions: "Longueur: 42cm, Pendentif: 6,5 x 4,2cm"
  }
];

const relatedProducts = [
  {
    id: "2",
    title: "Bague Cartier Panthère...",
    price: 125000,
    image: "/lovable-uploads/0433921a-bb41-436c-b04b-cffb33c3e8d8.png"
  },
  {
    id: "3", 
    title: "Bracelet Van Cleef...",
    price: 180000,
    image: "/lovable-uploads/2719d621-567b-4987-9d14-6b6f6a4d5f9d.png"
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = sampleProducts.find(p => p.id === id) || sampleProducts[0];
  const images = [product.image, product.image, product.image]; // Multiple angles

  const handleBack = () => {
    navigate(-1);
  };

  const formatPrice = (price: number) => `€${price.toLocaleString()}`;

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
      {/* Luxury Header */}
      <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-amber-400/20 sticky top-0 z-50 backdrop-blur-xl">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
            </button>
            
            <div className="text-center">
              <h1 className="font-playfair text-white text-lg font-semibold tracking-wide">LUXE</h1>
              <p className="text-amber-400 text-xs tracking-[0.2em]">MAISON DE LUXE</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group"
              >
                <Heart className={`w-5 h-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-white group-hover:text-amber-400'}`} />
              </button>
              <button className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 group">
                <Share2 className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Premium Image Gallery */}
        <div className="relative bg-gradient-to-br from-gray-100 to-gray-50">
          <img
            src={images[selectedImageIndex]}
            alt={product.title}
            className="w-full h-96 object-cover"
          />
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === selectedImageIndex 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Authenticity Badge */}
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-emerald-600/90 backdrop-blur-md px-3 py-2 rounded-full">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-xs font-medium">AUTHENTIFIÉ</span>
            </div>
          </div>
        </div>

        <div className="px-4 py-6">
          {/* Product Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-medium">
                {product.brand}
              </Badge>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            
            <h1 className="font-playfair text-2xl font-bold leading-tight text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-3xl font-playfair font-bold text-gray-900">
                {formatPrice(product.price)}
              </div>
              <div className="text-sm text-gray-500">
                <p>Prix ferme</p>
                <p>TVA incluse</p>
              </div>
            </div>

            {/* Premium Purchase Section */}
            <div className="space-y-4 mb-6">
              <Button className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-gray-800 hover:via-gray-900 hover:to-gray-800 text-white py-4 text-lg font-playfair tracking-wide relative overflow-hidden group">
                <span className="relative z-10">ACQUÉRIR CETTE PIÈCE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button variant="outline" className="w-full py-4 text-lg font-playfair border-2 border-gray-300 hover:border-amber-400 hover:text-amber-600">
                DEMANDER UNE EXPERTISE
              </Button>
            </div>

            {/* Luxury Services */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Livraison VIP</p>
                    <p className="text-sm text-gray-600">Coffre-fort blindé, assurance totale</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Garantie Royale</p>
                    <p className="text-sm text-gray-600">{product.returnPolicy}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Certificate className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Certificat d'Authenticité</p>
                    <p className="text-sm text-gray-600">Expertise incluse</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Authenticity Promise */}
          <div className="mb-8 p-6 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl border border-emerald-200/50">
            <div className="flex items-center space-x-3 mb-3">
              <Crown className="w-6 h-6 text-emerald-600" />
              <h3 className="font-playfair font-bold text-emerald-900">Promesse Luxe</h3>
            </div>
            <p className="text-emerald-800 font-medium leading-relaxed">
              {product.authenticity}
            </p>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h2 className="font-playfair text-xl font-bold text-gray-900 mb-4">DESCRIPTION</h2>
            <div className="prose prose-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description.split('\n')[0]}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description.split('\n')[2]}
              </p>
              {showFullDescription && (
                <p className="text-gray-700 leading-relaxed">
                  {product.description.split('\n')[4]}
                </p>
              )}
              {!showFullDescription && (
                <button
                  onClick={() => setShowFullDescription(true)}
                  className="text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                >
                  LIRE LA SUITE
                </button>
              )}
            </div>
          </div>

          {/* Technical Details */}
          <div className="space-y-4 mb-8">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-playfair text-lg font-bold text-gray-900 mb-4">CARACTÉRISTIQUES</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Matériaux</span>
                  <span className="text-gray-900 font-medium">{product.materials}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions</span>
                  <span className="text-gray-900 font-medium">{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Provenance</span>
                  <span className="text-gray-900 font-medium">Collection Privée</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">État</span>
                  <span className="text-emerald-600 font-medium">{product.condition}</span>
                </div>
              </div>
            </div>
          </div>

          {/* About the Seller */}
          <div className="mb-8 p-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl">
            <h2 className="font-playfair text-xl font-bold text-center text-white mb-6">
              MAISON PARTENAIRE
            </h2>
            
            <div className="flex justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <p className="text-amber-400 text-sm font-bold">{product.sellerType}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-emerald-400 text-sm font-bold">CERTIFIÉ</p>
              </div>
            </div>

            <div className="text-center space-y-2 mb-6">
              <p className="text-white font-semibold">{product.seller}</p>
              <p className="text-gray-300">{product.sellerLocation}</p>
              <p className="text-amber-400">{product.responseTime}</p>
            </div>

            <Button variant="outline" className="w-full py-3 text-base font-playfair bg-transparent border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300">
              CONTACTER LA MAISON
            </Button>
          </div>

          {/* You May Also Like */}
          <div className="mb-8">
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-6 text-center">
              PIÈCES SIMILAIRES
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {relatedProducts.map((item) => (
                <div key={item.id} className="text-center group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <p className="text-sm text-gray-900 font-medium truncate mb-1">{item.title}</p>
                  <p className="text-sm font-playfair font-bold text-gray-900">{formatPrice(item.price)}</p>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full py-3 text-base font-playfair border-2 border-gray-300 hover:border-amber-400 hover:text-amber-600">
              VOIR PLUS DE PIÈCES
            </Button>
          </div>

          {/* Bottom spacing for mobile navigation */}
          <div className="h-20"></div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
