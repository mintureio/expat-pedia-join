import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Registration {
  id: string;
  full_name: string;
  designation: string;
  organization: string;
  email: string;
  contact: string;
  photo_url: string;
  is_doctor: boolean;
  hospital_name: string | null;
  specialty: string | null;
}

const Directory = () => {
  const [users, setUsers] = useState<Registration[]>([]);
  const [doctors, setDoctors] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      // @ts-ignore - Types will be regenerated after migration
      const { data, error } = await (supabase as any)
        .from("registrations")
        .select("*")
        .order("full_name", { ascending: true });

      if (error) throw error;

      const regularUsers = data?.filter((reg: any) => !reg.is_doctor) || [];
      const doctorUsers = data?.filter((reg: any) => reg.is_doctor) || [];

      setUsers(regularUsers);
      setDoctors(doctorUsers);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      toast({
        title: "Error",
        description: "Failed to load directory",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChat = (name: string) => {
    toast({
      title: "Chat",
      description: `Starting chat with ${name}...`,
    });
  };

  const handleCall = (contact: string) => {
    window.location.href = `tel:${contact}`;
  };

  const UserCard = ({ user }: { user: Registration }) => {
    const initials = user.full_name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.photo_url} alt={user.full_name} />
              <AvatarFallback className="text-lg">{initials}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">{user.full_name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{user.designation}</p>
              
              {user.is_doctor ? (
                <div className="space-y-1 mb-3">
                  <p className="text-sm">
                    <span className="font-medium">Hospital:</span> {user.hospital_name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Specialty:</span> {user.specialty}
                  </p>
                </div>
              ) : (
                <p className="text-sm mb-3">
                  <span className="font-medium">Company:</span> {user.organization}
                </p>
              )}
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${user.email}`} className="hover:underline">
                  {user.email}
                </a>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => handleChat(user.full_name)}
                  className="gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCall(user.contact)}
                  className="gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Loading directory...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Member Directory</h1>

        {doctors.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Doctors</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {doctors.map((doctor) => (
                <UserCard key={doctor.id} user={doctor} />
              ))}
            </div>
          </section>
        )}

        {users.length > 0 && (
          <section>
            <h2 className="text-3xl font-semibold mb-6">Members</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          </section>
        )}

        {users.length === 0 && doctors.length === 0 && (
          <div className="text-center text-muted-foreground py-12">
            No registrations yet. Be the first to register!
          </div>
        )}
      </main>
    </div>
  );
};

export default Directory;
