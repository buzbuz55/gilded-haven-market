
const SectionHeader = () => {
  return (
    <div className="text-center mb-20">
      <div className="inline-block mb-6">
        <div className="h-px w-24 bg-gradient-to-r from-amber-400 via-gold-500 to-orange-500 mx-auto mb-6"></div>
      </div>
      <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight sexy-text-shadow">
        Collections Impériales
      </h2>
      <p className="text-gray-600 text-xl max-w-4xl mx-auto font-light leading-relaxed serif-luxury">
        Découvrez nos pièces de collection les plus convoitées, sélectionnées par nos maîtres experts 
        pour leur authenticité et leur provenance royale exceptionnelle
      </p>
      <div className="mt-8">
        <p className="offer-chat text-amber-700 max-w-2xl mx-auto sexy-text-shadow">
          "Chaque pièce raconte une histoire d'élégance intemporelle et de raffinement absolu..."
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
