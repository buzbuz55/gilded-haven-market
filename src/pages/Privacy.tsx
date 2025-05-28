
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-gray max-w-none">
          <h1 className="font-playfair text-4xl font-semibold text-gray-900 mb-8 tracking-tight">
            Privacy Policy & Disclaimers
          </h1>
          
          <div className="space-y-8 font-inter text-gray-700 leading-relaxed">
            
            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Product Liability Disclaimer
              </h2>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="font-semibold text-yellow-800 mb-2">IMPORTANT NOTICE:</p>
                <p className="text-yellow-700">
                  LUXE operates as a marketplace platform connecting buyers and sellers. We do not manufacture, own, or directly sell any products listed on our platform.
                </p>
              </div>
              
              <div className="space-y-4">
                <p>
                  <strong>No Liability for Products:</strong> LUXE expressly disclaims all liability, responsibility, and warranties for any products sold through our platform. We do not accept any claims or liability related to:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Product authenticity, quality, condition, or functionality</li>
                  <li>Product safety, defects, or compliance with regulations</li>
                  <li>Product descriptions, specifications, or representations</li>
                  <li>Any damages, injuries, or losses resulting from product use</li>
                </ul>
                
                <p>
                  <strong>Seller Responsibility:</strong> All responsibility for products lies solely with the individual sellers who list items on our platform. Sellers are responsible for:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Accurate product descriptions and representations</li>
                  <li>Product authenticity and condition</li>
                  <li>Compliance with all applicable laws and regulations</li>
                  <li>Customer service and dispute resolution</li>
                </ul>
                
                <p>
                  <strong>Manufacturer Responsibility:</strong> For any issues related to product defects, safety, warranties, or recalls, buyers must contact the original manufacturer directly. LUXE has no relationship with manufacturers and cannot assist with manufacturer-related issues.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Privacy Policy
              </h2>
              
              <h3 className="font-semibold text-lg mb-3">Information We Collect</h3>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This may include your name, email address, phone number, shipping address, and payment information.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">How We Use Your Information</h3>
              <p className="mb-4">
                We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and comply with legal obligations.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Information Sharing</h3>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Data Security</h3>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Platform Terms
              </h2>
              
              <p className="mb-4">
                <strong>AS-IS Basis:</strong> All products and services on LUXE are provided on an "as-is" basis. We make no warranties or representations about the accuracy, reliability, or completeness of any content on our platform.
              </p>
              
              <p className="mb-4">
                <strong>Limitation of Liability:</strong> To the fullest extent permitted by law, LUXE shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
              
              <p className="mb-4">
                <strong>Dispute Resolution:</strong> Any disputes regarding products must be resolved directly between buyers and sellers. LUXE may facilitate communication but is not responsible for resolving product-related disputes.
              </p>
            </section>

            <section>
              <h2 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p><strong>Email:</strong> privacy@luxe.com</p>
                <p><strong>Address:</strong> LUXE Legal Department, [Address]</p>
              </div>
            </section>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
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
