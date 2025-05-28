
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Messages = () => {
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const conversations = [
    {
      id: 1,
      seller: "LuxuryTimepieces",
      lastMessage: "Hi! I'm interested in the Cartier watch.",
      time: "2 min ago",
      unread: true
    },
    {
      id: 2,
      seller: "ArtGalleryPro",
      lastMessage: "Thank you for your purchase!",
      time: "1 hour ago",
      unread: false
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold ml-4">Messages</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${
                      conv.unread ? "border-gray-900 bg-gray-50" : "border-transparent"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm">{conv.seller}</h3>
                      <span className="text-xs text-gray-500">{conv.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 truncate">{conv.lastMessage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg">LuxuryTimepieces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 h-64 overflow-y-auto mb-4">
                <div className="flex justify-end">
                  <div className="bg-gray-900 text-white p-3 rounded-lg max-w-xs">
                    Hi! I'm interested in the Cartier watch.
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-lg max-w-xs">
                    Hello! Thank you for your interest. The watch is in excellent condition and comes with authenticity certificate.
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Messages;
