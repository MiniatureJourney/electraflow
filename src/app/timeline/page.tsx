"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Flag, FileText, Megaphone, Users, Landmark, FileCheck } from "lucide-react";

export default function TimelinePage() {
  const steps = [
    { icon: Flag, title: "Election Announcement", desc: "ECI announces the schedule. The Model Code of Conduct (MCC) comes into force immediately.", done: true },
    { icon: FileText, title: "Voter List Finalization", desc: "The final electoral roll is published. Citizens verify their names.", done: true },
    { icon: FileCheck, title: "Nomination & Scrutiny", desc: "Candidates file nomination papers. ECI scrutinizes and finalizes valid candidates.", done: false, active: true },
    { icon: Megaphone, title: "Campaigning", desc: "Political rallies, speeches, and outreach. Ends strictly 48 hours before polling.", done: false },
    { icon: Users, title: "Polling Day", desc: "Voters visit the booths to cast their votes securely using EVM & VVPAT.", done: false },
    { icon: Landmark, title: "Counting & Results", desc: "EVMs are unpacked under strict security and results are declared for the constituency.", done: false },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
           <Link href="/dashboard" tabIndex={-1}>
             <Button variant="ghost" size="icon" tabIndex={0} aria-label="Back to Dashboard">
               <ArrowLeft className="w-5 h-5" aria-hidden="true" />
             </Button>
           </Link>
           <div>
              <h1 className="text-3xl font-bold tracking-tight">Election Timeline</h1>
              <p className="text-muted-foreground">The journey of a democratic election.</p>
           </div>
        </div>

        <div className="relative border-l-2 border-white/10 ml-6 pl-8 space-y-12 pb-12 mt-12">
           {steps.map((step, idx) => (
             <div key={idx} className="relative group">
                {/* Connector dot */}
                <div className={`absolute -left-[45px] top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 border-background
                  ${step.done ? 'bg-primary text-primary-foreground' : step.active ? 'bg-accent text-accent-foreground animate-bounce' : 'bg-white/10 text-muted-foreground'}
                `}>
                   <step.icon className="w-5 h-5" />
                </div>
                
                <Card className={`border-white/10 shadow-lg transition-transform hover:-translate-y-1 
                  ${step.active ? 'bg-accent/10 border-accent/30' : 'bg-white/5'}
                `}>
                   <CardContent className="p-6">
                      <h3 className={`text-xl font-bold mb-2 ${step.active ? 'text-accent' : ''}`}>{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                   </CardContent>
                </Card>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}
