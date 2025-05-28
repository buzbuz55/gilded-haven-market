
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
    <div className="min-h-screen bg-gray-50 font-inter">
      <Header />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Card className="border-0 shadow-lg rounded-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="font-playfair text-2xl font-medium text-gray-900">Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Payment Methods */}
              <div>
                <Label className="font-inter text-base font-medium text-gray-900">Payment Method</Label>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("card")}
                    className={`p-4 border rounded-xl flex items-center justify-center font-inter font-medium transition-all ${
                      selectedMethod === "card" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("paypal")}
                    className={`p-4 border rounded-xl flex items-center justify-center font-inter font-medium transition-all ${
                      selectedMethod === "paypal" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Wallet className="w-5 h-5 mr-2" />
                    PayPal
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedMethod("apple")}
                    className={`p-4 border rounded-xl flex items-center justify-center font-inter font-medium transition-all ${
                      selectedMethod === "apple" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    Apple Pay
                  </button>
                </div>
              </div>

              {/* Card Details */}
              {selectedMethod === "card" && (
                <form onSubmit={handlePayment} className="space-y-5">
                  <div>
                    <Label htmlFor="cardNumber" className="font-inter font-medium text-gray-900">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="mt-2 rounded-xl border-gray-200 font-inter" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="font-inter font-medium text-gray-900">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required className="mt-2 rounded-xl border-gray-200 font-inter" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="font-inter font-medium text-gray-900">CVV</Label>
                      <Input id="cvv" placeholder="123" required className="mt-2 rounded-xl border-gray-200 font-inter" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="name" className="font-inter font-medium text-gray-900">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" required className="mt-2 rounded-xl border-gray-200 font-inter" />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-gray-900 hover:bg-gray-800 font-inter font-medium rounded-xl">
                    Complete Payment
                  </Button>
                </form>
              )}

              {/* Alternative Payment Methods */}
              {selectedMethod !== "card" && (
                <div className="text-center py-8">
                  <p className="font-inter text-gray-600 mb-6">
                    You will be redirected to {selectedMethod === "paypal" ? "PayPal" : "Apple Pay"} to complete your payment.
                  </p>
                  <Button onClick={() => alert(`Redirecting to ${selectedMethod}...`)} className="w-full h-12 bg-gray-900 hover:bg-gray-800 font-inter font-medium rounded-xl">
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
