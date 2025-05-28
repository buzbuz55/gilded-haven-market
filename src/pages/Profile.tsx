
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Upload, Users, Heart } from "lucide-react";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("listings");

  const userStats = {
    followers: 1234,
    following: 89,
    rating: 4.9,
    totalSales: 67
  };

  const userListings = [
    {
      id: 1,
      title: "Modern Art Sculpture",
      price: "$3,200",
      image: "/placeholder.svg",
      status: "active"
    },
    {
      id: 2,
      title: "Vintage Watch Collection",
      price: "$12,500",
      image: "/placeholder.svg",
      status: "sold"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-600">Luxury Collector & Art Enthusiast</p>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{userStats.rating}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{userStats.totalSales} sales</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="font-bold text-lg">{userStats.followers}</div>
                  <div className="text-sm text-gray-600">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">{userStats.following}</div>
                  <div className="text-sm text-gray-600">Following</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6">
          {["listings", "liked", "followers"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab === "listings" && <Upload className="w-4 h-4 mr-2" />}
              {tab === "liked" && <Heart className="w-4 h-4 mr-2" />}
              {tab === "followers" && <Users className="w-4 h-4 mr-2" />}
              {tab}
            </Button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "listings" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Listings</h2>
              <Button>Add New Listing</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userListings.map((item) => (
                <Card key={item.id}>
                  <div className="relative">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                    <Badge 
                      className={`absolute top-2 right-2 ${
                        item.status === "sold" ? "bg-gray-500" : "bg-green-500"
                      }`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-lg font-bold mt-1">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "liked" && (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No liked items yet</h3>
            <p className="text-gray-600">Items you like will appear here</p>
          </div>
        )}

        {activeTab === "followers" && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Followers</h2>
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-medium">User {i + 1}</p>
                        <p className="text-sm text-gray-600">Art Collector</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Follow Back</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <MobileNavigation />
    </div>
  );
};

export default Profile;
