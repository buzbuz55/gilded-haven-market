import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutReturn() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-sm text-center space-y-4">
        {sessionId ? (
          <>
            <CheckCircle2 className="w-14 h-14 mx-auto text-primary" />
            <h1 className="font-playfair text-3xl font-bold">Thank you</h1>
            <p className="text-muted-foreground">
              Your purchase is confirmed. A receipt is on its way to your email, and our team will contact you to arrange insured delivery.
            </p>
          </>
        ) : (
          <>
            <h1 className="font-playfair text-2xl font-bold">No order found</h1>
            <p className="text-muted-foreground">We couldn't find details for this checkout.</p>
          </>
        )}
        <Button asChild className="w-full"><Link to="/">Continue browsing</Link></Button>
      </div>
    </div>
  );
}
