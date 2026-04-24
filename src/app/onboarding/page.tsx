"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { User, CheckCircle2, ArrowRight } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    state: "",
    constituency: "",
    hasVoterId: false,
    needsAccessibility: false,
  });

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
    else router.push("/dashboard"); // Finish onboarding
  };

  const handleBack = () => {
    if (step <= 1) return;
    setStep(step - 1);
  };

  const currentProgress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Background blobs */}
      <div className="fixed top-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-lg relative z-10">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center mb-4">
            <User className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Personalize Your Journey</h1>
          <p className="text-muted-foreground mt-2">Let&apos;s tailor the election timeline to you.</p>
        </div>

        <Card className="border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-2">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground font-medium">Step {step} of {totalSteps}</span>
              <span className="text-sm font-semibold text-primary">{Math.round(currentProgress)}%</span>
            </div>
            <Progress value={currentProgress} className="h-2 rounded-full bg-white/10" />
            <CardTitle className="text-2xl mt-6">
              {step === 1 && "Personal Details"}
              {step === 2 && "Location Info"}
              {step === 3 && "Voter Readiness"}
              {step === 4 && "Preferences"}
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              {step === 1 && "Basic info to verify eligibility."}
              {step === 2 && "To fetch your exact election timeline."}
              {step === 3 && "Do you already have your EPIC card?"}
              {step === 4 && "Accessibility and language settings."}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6 mt-4">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="E.g. Aditya Sharma" className="bg-background/50" 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="18" className="bg-background/50"
                    value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="space-y-2">
                  <Label>State / Union Territory</Label>
                  <Select
                    onValueChange={(val) =>
                      setFormData({ ...formData, state: val as string })
                    }
                  >
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Constituency</Label>
                  <Input placeholder="E.g. Mumbai South" className="bg-background/50"
                    value={formData.constituency} onChange={(e) => setFormData({...formData, constituency: e.target.value})} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-row items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">I have a Voter ID (EPIC)</Label>
                    <p className="text-sm text-muted-foreground">My name is on the electoral roll.</p>
                  </div>
                  <Switch checked={formData.hasVoterId} onCheckedChange={(val) => setFormData({...formData, hasVoterId: val})} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-row items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4">
                  <div className="space-y-0.5">
                    <Label className="text-base font-semibold">Accessibility Needs (PwD)</Label>
                    <p className="text-sm text-muted-foreground">Enable tailored facilities planning.</p>
                  </div>
                  <Switch checked={formData.needsAccessibility} onCheckedChange={(val) => setFormData({...formData, needsAccessibility: val})} />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between mt-6 pt-6 border-t border-white/5">
            <Button variant="ghost" className="text-muted-foreground" onClick={handleBack} disabled={step === 1}>
              Back
            </Button>
            <Button onClick={handleNext} className="gap-2 px-6">
              {step === totalSteps ? "Complete Profile" : "Continue"}
              {step === totalSteps ? <CheckCircle2 className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
