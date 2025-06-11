
const SectionHeader = () => {
  return (
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
  );
};

export default SectionHeader;
