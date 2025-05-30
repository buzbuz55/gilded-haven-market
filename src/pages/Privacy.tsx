
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <h1 className="font-playfair text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Politique de Confidentialité & Avis de Non-Responsabilité
          </h1>
          
          <div className="space-y-8 font-inter text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Avis de Non-Responsabilité Produits
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="font-semibold text-yellow-800 mb-2">AVIS IMPORTANT :</p>
                <p className="text-yellow-700">
                  LUXE opère en tant que maison de consignation royale connectant acheteurs et consignataires. Nous ne fabriquons, ne possédons, ni ne vendons directement les œuvres d'art et objets précieux répertoriés sur notre plateforme.
                </p>
              </div>
              
              <div className="space-y-4">
                <p>
                  <strong>Aucune Responsabilité sur les Objets :</strong> LUXE décline expressément toute responsabilité, obligation et garantie concernant les objets vendus via notre maison de consignation. Nous n'acceptons aucune réclamation ni responsabilité concernant :
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>L'authenticité, la qualité, l'état ou la fonctionnalité des objets</li>
                  <li>La sécurité, les défauts ou la conformité réglementaire des objets</li>
                  <li>Les descriptions, spécifications ou représentations des objets</li>
                  <li>Tout dommage, blessure ou perte résultant de l'utilisation d'objets</li>
                </ul>
                
                <p>
                  <strong>Responsabilité du Consignataire :</strong> Toute responsabilité concernant les objets incombe exclusivement aux consignataires individuels qui répertorient les pièces sur notre plateforme. Les consignataires sont responsables de :
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Descriptions et représentations exactes des objets</li>
                  <li>L'authenticité et l'état des objets</li>
                  <li>La conformité à toutes les lois et réglementations applicables</li>
                  <li>Le service client et la résolution des litiges</li>
                </ul>
                
                <p>
                  <strong>Responsabilité du Fabricant :</strong> Pour toute question liée aux défauts, à la sécurité, aux garanties ou aux rappels de produits, les acheteurs doivent contacter directement le fabricant d'origine. LUXE n'entretient aucune relation avec les fabricants et ne peut assister avec les questions liées aux fabricants.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Politique de Confidentialité
              </h2>
              
              <h3 className="font-semibold text-lg mb-3">Informations que Nous Collectons</h3>
              <p className="mb-4">
                Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, effectuez un achat, ou nous contactez pour obtenir de l'aide. Cela peut inclure votre nom, adresse e-mail, numéro de téléphone, adresse de livraison et informations de paiement.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Comment Nous Utilisons Vos Informations</h3>
              <p className="mb-4">
                Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services de maison de consignation, traiter les transactions, communiquer avec vous et respecter nos obligations légales.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Partage d'Informations</h3>
              <p className="mb-4">
                Nous ne vendons, n'échangeons, ni ne transférons vos informations personnelles à des tiers sans votre consentement, sauf tel que décrit dans cette politique ou tel qu'exigé par la loi.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Sécurité des Données</h3>
              <p className="mb-4">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, l'altération, la divulgation ou la destruction.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Conditions de la Plateforme
              </h2>
              
              <p className="mb-4">
                <strong>Base "Tel Quel" :</strong> Tous les objets et services sur LUXE sont fournis sur une base "tel quel". Nous ne donnons aucune garantie ou représentation quant à l'exactitude, la fiabilité ou l'exhaustivité du contenu de notre plateforme.
              </p>
              
              <p className="mb-4">
                <strong>Limitation de Responsabilité :</strong> Dans toute la mesure permise par la loi, LUXE ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, ou de toute perte de profits ou de revenus.
              </p>
              
              <p className="mb-4">
                <strong>Résolution des Litiges :</strong> Tout litige concernant les objets doit être résolu directement entre acheteurs et consignataires. LUXE peut faciliter la communication mais n'est pas responsable de résoudre les litiges liés aux objets.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Informations de Contact
              </h2>
              <p>
                Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter à :
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>E-mail :</strong> confidentialite@luxe.com</p>
                <p><strong>Adresse :</strong> LUXE Département Juridique, [Adresse]</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom spacing for mobile navigation */}
        <div className="h-20 md:hidden"></div>
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Privacy;
