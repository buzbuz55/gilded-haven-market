
const CTAButton = () => {
  return (
    <div className="text-center">
      <button className="group bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-12 py-4 rounded-full font-medium hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden">
        <span className="relative z-10 font-playfair tracking-wide">Voir Toute la Collection Royale</span>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default CTAButton;
