import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import authVisual from "@/assets/auth-visual.jpg";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center">
        <img
          src={authVisual}
          alt="AI Data Storytelling"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 px-12 text-center max-w-lg">
          <h2 className="text-3xl font-heading text-foreground mb-4 animate-fade-up">
            Turn Web Data Into Predictive Intelligence
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            AI-powered analytics, heatmaps, and predictive insights for your entire web presence
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Predictive", value: "Graphs" },
              { label: "Behavior", value: "Heatmaps" },
              { label: "Funnel", value: "Analysis" },
            ].map((item, i) => (
              <div
                key={i}
                className="card-elevated p-3 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="text-primary text-sm font-bold">{item.label}</div>
                <div className="text-muted-foreground text-xs">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-up">
          <div className="mb-6">
            <h1 className="text-2xl font-heading text-foreground mb-2">
              WebInsight<span className="text-primary">AI</span>
            </h1>
            <p className="text-muted-foreground">Create your analytics workspace</p>
          </div>

          <div className="card-elevated p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-foreground">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="John Doe" className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Work Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input type="email" placeholder="you@company.com" className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-foreground">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Confirm</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-9 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                      {showConfirm ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Website URL</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="https://yoursite.com" className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Role</Label>
                <Select>
                  <SelectTrigger className="bg-secondary border-border text-foreground">
                    <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="marketer">Marketer</SelectItem>
                    <SelectItem value="analyst">Analyst</SelectItem>
                    <SelectItem value="founder">Founder</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" className="mt-0.5 rounded border-border accent-primary" />
                I accept the Terms of Service and Data Policy
              </label>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-red-sm">
                Create Analytics Workspace
              </Button>
            </form>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
