import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Map, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Navbar */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center z-10 glass-nav border-b border-white/5 backdrop-blur-md sticky top-0" role="banner">
        <div className="flex items-center gap-2" tabIndex={0} aria-label="ElectraFlow Logo">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">ElectraFlow</span>
        </div>
        <nav className="flex items-center gap-4" aria-label="Main Navigation">
          <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" tabIndex={0}>
            Sign In
          </Link>
          <Link href="/onboarding" tabIndex={-1}>
            <Button className="rounded-full px-6 shadow-lg shadow-primary/25" tabIndex={0} aria-label="Get Started">Get Started</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-24 z-10" id="main-content">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-accent mb-8 backdrop-blur-md" tabIndex={0}>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          2026 Lok Sabha General Elections Target
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-foreground" tabIndex={0}>
          Understand Elections. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-chart-3">
            Participate with Confidence.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed font-medium" tabIndex={0}>
          ElectraFlow is the smart, AI-powered platform that decodes the democratic process. 
          From voter list verification to mock EVM interactions, master your civic duty in minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link href="/onboarding">
            <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-xl shadow-primary/20 w-full sm:w-auto">
              Start Your Voter Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-white/5 border-white/10 w-full sm:w-auto hover:bg-white/10 transition-colors">
              Explore Demo Dashboard
            </Button>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 w-full">
          {[
            { icon: Map, title: "Personalized Timelines", desc: "Track every phase tailored to your constituency's schedule." },
            { icon: Sparkles, title: "AI Voice Queries", desc: "Instantly get answers to complex legal and MCC questions." },
            { icon: Activity, title: "Readiness Score", desc: "Gamified learning to ensure you're 100% ready for polling day." },
          ].map((feature, i) => (
            <section key={i} className="flex flex-col items-start text-left p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02] focus-within:ring-2 focus-within:ring-white" tabIndex={0} aria-label={feature.title}>
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-accent">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground/80">{feature.desc}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
