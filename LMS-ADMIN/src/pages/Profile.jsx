import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

const admin = {
  name: "Muhamad Barhan",
  email: "barhan@example.com",
  contact: "9876543210",
  role: "Admin",
  profilePic: "",
};

export default function AdminProfilePage() {
  return (
    <>
      <PageHeader title="My Profile" />

      <div className="p-6 flex justify-center">
        <Card className="w-full max-w-xl bg-white text-gray-800 border border-gray-200 shadow-md rounded-2xl relative">
          {/* Edit Profile Button */}
          <div className="absolute top-4 right-4">
            <Button variant="outline" size="sm" className="gap-1">
              <Pencil className="w-4 h-4" />
              Edit
            </Button>
          </div>

          <CardHeader className="flex flex-col items-center pt-8">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src={admin.profilePic} alt={admin.name} />
              <AvatarFallback>
                {admin.name.split(" ")[0][0]}
                {admin.name.split(" ")[1]?.[0]}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-2xl">{admin.name}</CardTitle>
            <p className="text-sm text-gray-500">{admin.role}</p>
          </CardHeader>

          <Separator className="bg-gray-200" />

          <CardContent className="space-y-4 mt-4 text-sm">
            <div>
              <strong>Email:</strong> {admin.email}
            </div>
            <div>
              <strong>Contact:</strong> {admin.contact}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
