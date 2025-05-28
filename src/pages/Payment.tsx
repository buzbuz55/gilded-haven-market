
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Wallet, Apple } from "lucide-react";
import Header from "@/components/Header";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const navigate = useNavigate();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock payment processing
    alert("Payment processed successfully!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Payment Methods */}
              <div>
                <Label className="text-base font-medium">Payment Method</Label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("card")}
                    className={`p-3 border rounded-lg flex items-center justify-center ${
                      selectedMethod === "card" ? "border-gray-900 bg-gray-50" : "border-gray-200"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("paypal")}
                    className={`p-3 border rounded-lg flex items-center justify-center ${
                      selectedMethod === "paypal" ? "border-gray-900 bg-gray-50" : "border-gray-200"
                    }`}
                  >
                    <Wallet className="w-5 h-5 mr-2" />
                    PayPal
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("apple")}
                    className={`p-3 border rounded-lg flex items-center justify-center ${
                      selectedMethod === "apple" ? "border-gray-900 bg-gray-50" : "border-gray-200"
                    }`}
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    Apple Pay
                  </button>
                </div>
              </div>

              {/* Card Details */}
              {selectedMethod === "card" && (
                <form onSubmit={handlePayment} className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <Button type="submit" className="w-full">
                    Complete Payment
                  </Button>
                </form>
              )}

              {/* Alternative Payment Methods */}
              {selectedMethod !== "card" && (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    You will be redirected to {selectedMethod === "paypal" ? "PayPal" : "Apple Pay"} to complete your payment.
                  </p>
                  <Button onClick={() => alert(`Redirecting to ${selectedMethod}...`)} className="w-full">
                    Continue with {selectedMethod === "paypal" ? "PayPal" : "Apple Pay"}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Payment;
