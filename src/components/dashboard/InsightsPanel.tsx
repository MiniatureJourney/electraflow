import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, BookOpen, Clock, AlertCircle } from "lucide-react";

export function InsightsPanel() {
  return (
    <div className="space-y-6" aria-label="Insights Panel" tabIndex={0}>
      <Card className="bg-primary/5 border-primary/20 shadow-lg shadow-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-foreground font-semibold">
            <BookOpen className="w-5 h-5 text-primary" aria-hidden="true" />
            Your AI Learning Insights
          </CardTitle>
          <CardDescription className="text-foreground/80">Personalized recommendations based on your progress.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-accent flex gap-3 focus-within:ring-2 focus-within:ring-accent" tabIndex={0}>
              <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Update your Voter ID Details</h4>
                <p className="text-sm text-foreground/80 mt-1">The deadline to correct details on the electoral roll is in 3 days. Since you marked yourself as a first-time voter, double-check your form status.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-3 focus-within:ring-2 focus-within:ring-chart-2" tabIndex={0}>
              <CheckCircle2 className="w-5 h-5 text-chart-2 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h4 className="font-semibold text-sm text-foreground">Model Code of Conduct Mastered</h4>
                <p className="text-sm text-foreground/80 mt-1">You successfully passed the MCC quiz yesterday. Keep up the streak!</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/5 border-white/10">
         <CardHeader className="flex flex-row items-center justify-between pb-2">
           <div className="space-y-1">
             <CardTitle className="text-lg text-foreground font-semibold">Constituency Timeline</CardTitle>
             <CardDescription className="text-foreground/80">Mumbai South Official Schedule</CardDescription>
           </div>
           <Link href="/timeline" aria-label="View Full Timeline" tabIndex={-1}>
              <Button variant="ghost" size="sm" className="hidden sm:flex gap-1">
                 View Full Timeline <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Button>
           </Link>
         </CardHeader>
         <CardContent className="pt-4">
           <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
             {[
               { title: "Elections Announced", date: "April 10", done: true },
               { title: "Voter List Finalized", date: "April 15", done: true },
               { title: "Nominations Filed", date: "April 20", done: false, current: true },
               { title: "Polling Day", date: "May 5", done: false },
             ].map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active" tabIndex={0} aria-label={`${step.title} on ${step.date}`}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow transition-colors z-10 ${step.done ? 'bg-chart-2/20 border-chart-2 text-chart-2' : step.current ? 'bg-accent/20 border-accent text-accent animate-pulse' : 'bg-background border-white/20 text-muted-foreground'}`}>
                     {step.done ? <CheckCircle2 className="w-5 h-5" aria-hidden="true" /> : <Clock className="w-5 h-5" aria-hidden="true" />}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 focus-within:ring-1 focus-within:ring-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-foreground">{step.title}</span>
                      <span className="text-xs text-foreground/70 font-medium">{step.date}</span>
                    </div>
                  </div>
                </div>
             ))}
           </div>
         </CardContent>
      </Card>
    </div>
  );
}
