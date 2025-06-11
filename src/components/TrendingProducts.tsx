import ProductCard from "./ProductCard";

const trendingProducts = [
  {
    id: "1",
    title: "Éléphant Doré Ornamental",
    price: "€18,750",
    originalPrice: "€22,500",
    image: "/lovable-uploads/2f3e1085-5cb1-482d-9308-54f9ad5cc770.png",
    brand: "Collection Royale",
    category: "objets d'art",
    isSale: true
  },
  {
    id: "2",
    title: "Collier Œuf Fabergé Jade",
    price: "€45,200",
    image: "/lovable-uploads/91669e87-6bbf-47b2-8c58-ffb7ebb2eb39.png",
    brand: "Fabergé Heritage",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "3",
    title: "Bague Diamants Émeraude Éternité",
    price: "€124,000",
    image: "/lovable-uploads/0433921a-bb41-436c-b04b-cffb33c3e8d8.png",
    brand: "Maison Cartier",
    category: "haute joaillerie",
  },
  {
    id: "4",
    title: "Pendentif Étoile Émeraude Impériale",
    price: "€67,800",
    originalPrice: "€75,000",
    image: "/lovable-uploads/306f0abe-020e-48bc-b209-454edd7bb09a.png",
    brand: "Joaillerie Royale",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "5",
    title: "Tiare Diamants Belle Époque",
    price: "€89,500",
    image: "/lovable-uploads/b9264ecc-dc30-4f4b-82a3-d2b19728f1c2.png",
    brand: "Chaumet Paris",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "6",
    title: "Montre Piaget Altiplano Skeleton",
    price: "€156,000",
    image: "/lovable-uploads/e982cb05-4aaf-41d3-bb46-c6b79781f83d.png",
    brand: "Piaget Manufacture",
    category: "horlogerie d'exception",
  },
  {
    id: "7",
    title: "Bracelet Émeraudes & Diamants",
    price: "€198,750",
    originalPrice: "€225,000",
    image: "/lovable-uploads/2719d621-567b-4987-9d14-6b6f6a4d5f9d.png",
    brand: "Van Cleef & Arpels",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "8",
    title: "Coffre Louis Vuitton Malle Voyage",
    price: "€28,500",
    image: "/lovable-uploads/6bb89a4f-0aca-465e-a73a-9af83281019d.png",
    brand: "Louis Vuitton Malletier",
    category: "maroquinerie de luxe",
  },
  {
    id: "11",
    title: "Sac Hermès Birkin Vert Menthe",
    price: "€89,000",
    image: "/lovable-uploads/323da33a-8f0e-4a67-b837-5238d8a80a0e.png",
    brand: "Hermès Maroquinerie",
    category: "maroquinerie de luxe",
    isNew: true
  },
  {
    id: "12",
    title: "Sac Hermès Birkin Émeraude Crocodile",
    price: "€125,000",
    image: "/lovable-uploads/d58c9a62-391c-4c93-8199-d23d1f2aff0d.png",
    brand: "Hermès Collection Exceptionnelle",
    category: "maroquinerie de luxe",
  },
  {
    id: "13",
    title: "Sac Hermès Constance Crocodile Noir",
    price: "€67,500",
    originalPrice: "€75,000",
    image: "/lovable-uploads/75ec24fb-e9e2-43a3-88a8-f0a300352421.png",
    brand: "Hermès Paris",
    category: "maroquinerie de luxe",
    isSale: true
  },
  {
    id: "14",
    title: "Montre Richard Mille RM 011",
    price: "€280,000",
    image: "/lovable-uploads/9a9595a3-3ce6-4d96-b8cf-4550a653c825.png",
    brand: "Richard Mille",
    category: "horlogerie d'exception",
    isNew: true
  },
  {
    id: "15",
    title: "Éléphant Doré Tiffany & Co",
    price: "€24,500",
    image: "/lovable-uploads/f8a072cf-ab2f-4c3a-87e7-ff07d4556a0b.png",
    brand: "Tiffany & Co",
    category: "objets d'art",
  },
  {
    id: "18",
    title: "Secrétaire Louis XV Bleu Provence",
    price: "€45,000",
    image: "/lovable-uploads/233c8d87-8162-4a99-a5b5-3651fd6f4cfc.png",
    brand: "Mobilier d'Exception",
    category: "mobilier ancien",
    isNew: true
  },
  {
    id: "19",
    title: "Bracelet Art Déco Diamants Platine",
    price: "€285,000",
    image: "/lovable-uploads/e5021bfe-7f3a-4390-8d80-778b82752be3.png",
    brand: "Collection Art Déco",
    category: "haute joaillerie",
  },
  {
    id: "20",
    title: "Broche Saphirs & Diamants Jarretière",
    price: "€195,000",
    image: "/lovable-uploads/97e466b2-3c00-4374-a7c9-717d060e90b0.png",
    brand: "Joaillerie Impériale",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "21",
    title: "Bracelet Géométrique Diamants",
    price: "€165,000",
    originalPrice: "€190,000",
    image: "/lovable-uploads/dde580ee-890e-41e1-97bf-4a31b4477bc5.png",
    brand: "Maison Contemporaine",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "22",
    title: "Plateau Agate Bleue Céleste",
    price: "€12,500",
    image: "/lovable-uploads/4ea6babe-ba7c-4469-92bb-20afa242b397.png",
    brand: "Objets Précieux",
    category: "objets d'art",
  },
  {
    id: "23",
    title: "Bague Art Déco Émeraude & Diamants",
    price: "€78,000",
    image: "/lovable-uploads/9cde1c8e-eb8b-44a1-8aeb-82ac3f45d57d.png",
    brand: "Patrimoine Joaillier",
    category: "haute joaillerie",
  },
  {
    id: "24",
    title: "Coupe Cristal Baccarat Dorée",
    price: "€8,750",
    image: "/lovable-uploads/7d086724-acc7-4df4-9e50-4b7fe066473d.png",
    brand: "Baccarat Crystal",
    category: "arts de la table",
  },
  {
    id: "25",
    title: "Broche Papillon Diamants Multicolores",
    price: "€145,000",
    image: "/lovable-uploads/bc4f15f9-ff40-4bfc-879c-fc3d8d4d1ebd.png",
    brand: "Haute Joaillerie Contemporaine",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "26",
    title: "Boucles d'Oreilles Saphir Ceylon",
    price: "€95,000",
    image: "/lovable-uploads/90385b67-236d-4462-826c-06e84ea15fa8.png",
    brand: "Pierres Précieuses d'Exception",
    category: "haute joaillerie",
  },
  {
    id: "27",
    title: "Boucles d'Oreilles Saphir Royal",
    price: "€125,000",
    originalPrice: "€145,000",
    image: "/lovable-uploads/04a1cdfc-aba5-4cd9-9717-87117c2036c4.png",
    brand: "Joaillerie Royale",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "28",
    title: "Manchettes Diamants Sculpture",
    price: "€285,000",
    image: "/lovable-uploads/cab08419-9bb5-411c-9eb5-1bfb5b2e9f11.png",
    brand: "Haute Joaillerie Contemporaine",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "29",
    title: "Bague Torsadée Or & Diamants",
    price: "€45,500",
    originalPrice: "€52,000",
    image: "/lovable-uploads/d680c704-760c-47b1-91d8-090053404fe6.png",
    brand: "Maison Cartier",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "30",
    title: "Bracelet Dragon Oriental Émeraudes",
    price: "€195,000",
    image: "/lovable-uploads/8a8618fe-302e-4fda-8e64-785c154cc5c2.png",
    brand: "Collection Asiatique",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "31",
    title: "Bracelet Émeraudes Impériales",
    price: "€325,000",
    originalPrice: "€375,000",
    image: "/lovable-uploads/690d00df-ed63-4982-9911-e6d736f564dd.png",
    brand: "Joaillerie Impériale",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "32",
    title: "Collier Maille Précieuse Multi-Pierres",
    price: "€165,000",
    image: "/lovable-uploads/77038f8b-5074-4572-b223-6a03541a7e00.png",
    brand: "Haute Couture Joaillerie",
    category: "haute joaillerie",
    isNew: true
  },
  {
    id: "33",
    title: "Montre Chanel Première Matelassée",
    price: "€28,500",
    originalPrice: "€32,000",
    image: "/lovable-uploads/a9249f30-fc38-432c-8935-d9ebd6555dcf.png",
    brand: "Chanel Horlogerie",
    category: "horlogerie de luxe",
    isSale: true
  },
  {
    id: "34",
    title: "Alliance Diamants Éternelle",
    price: "€18,750",
    image: "/lovable-uploads/25b29b5e-fc08-487b-9745-65eb3954543a.png",
    brand: "Maison d'Alliance",
    category: "haute joaillerie",
  },
  {
    id: "35",
    title: "Collier Étoile Filante Diamants",
    price: "€145,000",
    originalPrice: "€165,000",
    image: "/lovable-uploads/9b132ae2-a3ca-467a-94bf-09fb82428383.png",
    brand: "Constellation Joaillerie",
    category: "haute joaillerie",
    isSale: true
  },
  {
    id: "36",
    title: "Broche Art Nouveau Émail Bleu",
    price: "€35,000",
    image: "/lovable-uploads/6f1fb3bf-d2f4-431d-945f-8a7f3217d99a.png",
    brand: "Collection Art Nouveau",
    category: "bijoux d'art",
    isNew: true
  }
];

const TrendingProducts = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50/50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-4"></div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Collections Impériales
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Découvrez nos pièces de collection les plus convoitées, sélectionnées par nos maîtres experts 
            pour leur authenticité et leur provenance royale exceptionnelle
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
        
        <div className="text-center">
          <button className="group bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-12 py-4 rounded-full font-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
            <span className="relative z-10 font-playfair tracking-wide">Voir Toute la Collection Royale</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
