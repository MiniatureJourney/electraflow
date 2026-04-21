"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BrainCircuit, Send, Fingerprint, Activity, ArrowLeft } from "lucide-react";

export default function SimulatorPage() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hello! I am Electra, your AI election guide. Ask me any question about the voting rules, MVC, or checking your status." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [voteCasted, setVoteCasted] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setChatHistory(prev => [...prev, { role: "user", content: userMsg }]);
    setQuery("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      setChatHistory(prev => [...prev, { role: "ai", content: data.reply || "No response." }]);
    } catch (e) {
      setChatHistory(prev => [...prev, { role: "ai", content: "Network error fetching AI response." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 md:p-8 space-y-6">
      <div className="flex items-center gap-4 max-w-6xl mx-auto w-full">
        <Button variant="ghost" size="icon" asChild>
           <Link href="/dashboard"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <h1 className="text-2xl font-bold">Simulator & Query Agent</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
        {/* Chat / Query */}
        <Card className="bg-white/5 border-white/10 flex flex-col h-[70vh]">
           <CardHeader>
             <CardTitle className="flex items-center gap-2">
                 <BrainCircuit className="w-5 h-5 text-accent" /> AI Rule Assistant
             </CardTitle>
             <CardDescription>Ask questions powered by Gemini 2.5 Flash</CardDescription>
           </CardHeader>
           <CardContent className="flex-1 flex flex-col pt-0 gap-4 overflow-hidden">
              <ScrollArea className="flex-1 pr-4 bg-background/50 rounded-xl p-4 border border-white/5">
                 <div className="space-y-4">
                   {chatHistory.map((msg, i) => (
                     <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl max-w-[85%] text-sm ${msg.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-white/10 text-foreground rounded-bl-none'}`}>
                           {msg.content}
                        </div>
                     </div>
                   ))}
                   {isLoading && (
                     <div className="flex justify-start">
                        <div className="p-3 rounded-2xl bg-white/10 rounded-bl-none text-sm text-muted-foreground animate-pulse">
                           Electra is thinking...
                        </div>
                     </div>
                   )}
                 </div>
              </ScrollArea>
              <div className="flex items-center gap-2">
                 <Input 
                   value={query} 
                   onChange={e => setQuery(e.target.value)} 
                   onKeyDown={e => e.key === 'Enter' && handleSend()}
                   placeholder="Ask about Form 6, VVPAT, etc..." 
                   className="bg-white/5 border-white/10"
                 />
                 <Button onClick={handleSend} size="icon" disabled={isLoading} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Send className="w-4 h-4" />
                 </Button>
              </div>
           </CardContent>
        </Card>

        {/* Mock EVM Simulator */}
        <Card className="bg-white/5 border-white/10">
           <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <Fingerprint className="w-5 h-5 text-chart-2" /> Polling Booth Simulator
              </CardTitle>
              <CardDescription>Practice voting on a highly realistic mock EVM unit.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-6">
              {!voteCasted ? (
                  <div className="space-y-4">
                     <p className="text-sm text-muted-foreground mb-4">Select a candidate by pressing the blue button next to their symbol.</p>
                     <div className="grid gap-3">
                        {[
                           { name: "Candidate A", party: "Party 1" },
                           { name: "Candidate B", party: "Party 2" },
                           { name: "NOTA", party: "None of the Above" },
                        ].map((c, i) => (
                          <div key={i} className="flex items-center justify-between p-4 bg-background/50 border border-white/10 rounded-xl">
                              <div className="flex flex-col">
                                 <span className="font-bold text-lg">{c.name}</span>
                                 <span className="text-sm text-muted-foreground">{c.party}</span>
                              </div>
                              <Button 
                                onClick={() => setVoteCasted(true)}
                                className="w-16 h-12 rounded-full bg-blue-600 hover:bg-blue-500 shadow-[inset_0_-4px_0_rgba(0,0,0,0.3)] active:shadow-[inset_0_0px_0_rgba(0,0,0,0.3)] active:translate-y-1 transition-all"
                              />
                          </div>
                        ))}
                     </div>
                  </div>
              ) : (
                  <div className="flex flex-col items-center justify-center p-8 space-y-6 animate-in zoom-in duration-500">
                     <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                           <Activity className="w-8 h-8 text-white rotate-[180deg] animate-pulse" />
                        </div>
                     </div>
                     <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold tracking-tight text-green-500">Vote Cast Verification</h3>
                        <p className="text-muted-foreground">The VVPAT slip will display for 7 seconds and then drop into the sealed box.</p>
                     </div>
                     <Button variant="outline" className="mt-8" onClick={() => setVoteCasted(false)}>Reset Simulator</Button>
                  </div>
              )}
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
