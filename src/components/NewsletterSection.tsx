
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">✨</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            We'll alert you when new items and sales are added each week.
          </h2>
        </div>

        <Button 
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-12 py-3"
        >
          GET NOTIFICATIONS
        </Button>
      </div>
    </section>
  );
};

export default NewsletterSection;
