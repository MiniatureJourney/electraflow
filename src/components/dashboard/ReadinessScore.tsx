import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ReadinessScore({ learningScore }: { learningScore: number }) {
  return (
    <Card className="bg-white/5 border-white/10" tabIndex={0} aria-label={`Readiness Score: ${learningScore}%`}>
      <CardHeader>
        <CardTitle className="text-lg text-foreground font-semibold">Readiness Score</CardTitle>
        <CardDescription className="text-foreground/80">Your civic education progress.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center py-6">
         <div className="relative w-40 h-40 flex items-center justify-center">
           <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" className="stroke-white/10" />
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="8" className="stroke-accent" strokeDasharray="283" strokeDashoffset={283 - (283 * learningScore) / 100} strokeLinecap="round" />
           </svg>
           <div className="absolute flex flex-col items-center justify-center text-center mt-2">
              <span className="text-4xl font-extrabold text-foreground">{learningScore}%</span>
              <span className="text-xs text-foreground/70 font-medium">Mastered</span>
           </div>
         </div>
         <p className="mt-6 text-center text-sm text-foreground/80 font-medium">Complete quizzes and mock booths to increase your score before polling day!</p>
         <Link href="/simulator" className="w-full mt-6" aria-label="Take AI Quiz to boost readiness">
           <Button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
             Take AI Quiz
           </Button>
         </Link>
      </CardContent>
    </Card>
  );
}
