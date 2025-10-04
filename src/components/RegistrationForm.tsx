import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload, CheckCircle2 } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(100, "Full name must be less than 100 characters"),
  designation: z.string().trim().min(2, "Designation is required").max(100, "Designation must be less than 100 characters"),
  organization: z.string().trim().min(2, "Organization name is required").max(150, "Organization name must be less than 150 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  contact: z.string().trim().min(10, "Contact number must be at least 10 digits").max(20, "Contact number must be less than 20 characters"),
  photo: z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE, "File size must be less than 5MB")
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), "Only .jpg, .jpeg, .png and .webp formats are supported"),
  isDoctor: z.boolean().optional(),
  hospitalName: z.string().trim().max(150, "Hospital name must be less than 150 characters").optional(),
  specialty: z.string().optional(),
  confirmAccuracy: z.boolean().refine((val) => val === true, "You must confirm the accuracy of information"),
  consentUsage: z.boolean().refine((val) => val === true, "You must consent to the use of your content"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to the Terms and Conditions"),
}).refine((data) => {
  if (data.isDoctor) {
    return data.hospitalName && data.hospitalName.length >= 2 && data.specialty;
  }
  return true;
}, {
  message: "Hospital name and specialty are required for doctors",
  path: ["hospitalName"],
});

type FormData = z.infer<typeof formSchema>;

export const RegistrationForm = () => {
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isDoctor: false,
      confirmAccuracy: false,
      consentUsage: false,
      agreeTerms: false,
    },
  });

  const watchPhoto = watch("photo");
  const watchIsDoctor = watch("isDoctor");
  const watchConfirmAccuracy = watch("confirmAccuracy");
  const watchConsentUsage = watch("consentUsage");
  const watchAgreeTerms = watch("agreeTerms");

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("photo", file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Registration data:", {
        ...data,
        photo: data.photo.name,
      });

      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Your information has been submitted successfully.",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-20 h-20 text-accent mb-6 animate-in zoom-in duration-500" />
        <h2 className="text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
          Registration Complete!
        </h2>
        <p className="text-lg text-muted-foreground max-w-md">
          Thank you for joining The Expatpedia directory. We'll review your submission and get in touch with you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="John Doe"
            className="transition-smooth"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="designation">Current Designation *</Label>
          <Input
            id="designation"
            {...register("designation")}
            placeholder="Senior Manager"
            className="transition-smooth"
          />
          {errors.designation && (
            <p className="text-sm text-destructive">{errors.designation.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg border border-border">
        <Checkbox
          id="isDoctor"
          checked={watchIsDoctor}
          onCheckedChange={(checked) =>
            setValue("isDoctor", checked as boolean, { shouldValidate: true })
          }
        />
        <Label
          htmlFor="isDoctor"
          className="text-sm font-medium cursor-pointer"
        >
          I am a doctor
        </Label>
      </div>

      {watchIsDoctor && (
        <div className="grid md:grid-cols-2 gap-6 p-4 bg-accent/5 rounded-lg border border-accent/20 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            <Label htmlFor="hospitalName">Hospital Name *</Label>
            <Input
              id="hospitalName"
              {...register("hospitalName")}
              placeholder="City General Hospital"
              className="transition-smooth"
            />
            {errors.hospitalName && (
              <p className="text-sm text-destructive">{errors.hospitalName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialty">Specialty *</Label>
            <Select
              onValueChange={(value) => setValue("specialty", value, { shouldValidate: true })}
            >
              <SelectTrigger className="transition-smooth">
                <SelectValue placeholder="Select your specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="endocrinology">Endocrinology</SelectItem>
                <SelectItem value="gastroenterology">Gastroenterology</SelectItem>
                <SelectItem value="general-surgery">General Surgery</SelectItem>
                <SelectItem value="internal-medicine">Internal Medicine</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="obstetrics-gynecology">Obstetrics & Gynecology</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="pediatrics">Pediatrics</SelectItem>
                <SelectItem value="psychiatry">Psychiatry</SelectItem>
                <SelectItem value="radiology">Radiology</SelectItem>
                <SelectItem value="urology">Urology</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.specialty && (
              <p className="text-sm text-destructive">{errors.specialty.message}</p>
            )}
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="organization">Company / Organization Name *</Label>
        <Input
          id="organization"
          {...register("organization")}
          placeholder="Acme Corporation"
          className="transition-smooth"
        />
        {errors.organization && (
          <p className="text-sm text-destructive">{errors.organization.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john.doe@example.com"
            className="transition-smooth"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact">Contact Number *</Label>
          <Input
            id="contact"
            {...register("contact")}
            placeholder="+1 (555) 123-4567"
            className="transition-smooth"
          />
          {errors.contact && (
            <p className="text-sm text-destructive">{errors.contact.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="photo">High-Resolution Photograph *</Label>
        <div className="flex items-center gap-4">
          <label
            htmlFor="photo"
            className="flex items-center justify-center px-6 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-smooth bg-muted/50 hover:bg-muted"
          >
            <Upload className="w-5 h-5 mr-2" />
            <span className="text-sm font-medium">
              {watchPhoto ? "Change Photo" : "Upload Photo"}
            </span>
            <input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </label>
          {photoPreview && (
            <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-border">
              <img
                src={photoPreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          JPG, PNG, or WEBP. Max file size: 5MB
        </p>
        {errors.photo && (
          <p className="text-sm text-destructive">{errors.photo.message}</p>
        )}
      </div>

      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-lg">Declarations</h3>
        
        <div className="flex items-start space-x-3">
          <Checkbox
            id="confirmAccuracy"
            checked={watchConfirmAccuracy}
            onCheckedChange={(checked) =>
              setValue("confirmAccuracy", checked as boolean, { shouldValidate: true })
            }
          />
          <Label
            htmlFor="confirmAccuracy"
            className="text-sm leading-relaxed cursor-pointer"
          >
            I confirm that the information provided is accurate to the best of my knowledge.
          </Label>
        </div>
        {errors.confirmAccuracy && (
          <p className="text-sm text-destructive ml-7">{errors.confirmAccuracy.message}</p>
        )}

        <div className="flex items-start space-x-3">
          <Checkbox
            id="consentUsage"
            checked={watchConsentUsage}
            onCheckedChange={(checked) =>
              setValue("consentUsage", checked as boolean, { shouldValidate: true })
            }
          />
          <Label
            htmlFor="consentUsage"
            className="text-sm leading-relaxed cursor-pointer"
          >
            I consent to the use of my submitted content in 'The Expatpedia' directory and its promotional materials.
          </Label>
        </div>
        {errors.consentUsage && (
          <p className="text-sm text-destructive ml-7">{errors.consentUsage.message}</p>
        )}

        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreeTerms"
            checked={watchAgreeTerms}
            onCheckedChange={(checked) =>
              setValue("agreeTerms", checked as boolean, { shouldValidate: true })
            }
          />
          <Label
            htmlFor="agreeTerms"
            className="text-sm leading-relaxed cursor-pointer"
          >
            I have read and agree to the{" "}
            <a href="#" className="text-primary hover:underline font-medium">
              Terms and Conditions
            </a>
            .
          </Label>
        </div>
        {errors.agreeTerms && (
          <p className="text-sm text-destructive ml-7">{errors.agreeTerms.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-accent hover:opacity-90 transition-smooth text-lg py-6 shadow-elegant"
      >
        {isSubmitting ? "Submitting..." : "Complete Registration"}
      </Button>
    </form>
  );
};
