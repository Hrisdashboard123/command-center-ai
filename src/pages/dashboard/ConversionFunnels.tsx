import { TrendingDown, Target, Lightbulb } from "lucide-react";

const funnelSteps = [
  { label: "Landing Page", visitors: 10000, rate: "100%" },
  { label: "Product View", visitors: 6200, rate: "62%" },
  { label: "Add to Cart", visitors: 2800, rate: "28%" },
  { label: "Checkout Start", visitors: 1400, rate: "14%" },
  { label: "Purchase", visitors: 820, rate: "8.2%" },
];

const goals = [
  { name: "Newsletter Signup", completions: 1240, rate: "4.2%" },
  { name: "Free Trial Start", completions: 380, rate: "1.3%" },
  { name: "Demo Request", completions: 95, rate: "0.3%" },
];

const suggestions = [
  "Cart → Checkout drop-off is 50%. Consider adding trust badges and simplifying the form.",
  "Mobile users convert 40% less than desktop. Optimize mobile checkout flow.",
  "Users from organic search have 2x higher conversion. Invest in SEO content.",
];

const ConversionFunnels = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-xl font-heading text-foreground">Conversion Funnels</h2>

      {/* Funnel Visualization */}
      <div className="card-elevated p-6">
        <h3 className="text-sm font-medium text-foreground mb-6">Purchase Funnel</h3>
        <div className="space-y-3">
          {funnelSteps.map((step, i) => {
            const widthPct = (step.visitors / funnelSteps[0].visitors) * 100;
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="w-32 text-sm text-muted-foreground text-right flex-shrink-0">
                  {step.label}
                </div>
                <div className="flex-1 relative">
                  <div className="h-10 rounded-md bg-secondary overflow-hidden">
                    <div
                      className="h-full rounded-md transition-all duration-700"
                      style={{
                        width: `${widthPct}%`,
                        background: `linear-gradient(90deg, hsl(0, 86%, ${30 - i * 3}%), hsl(0, 70%, ${40 - i * 3}%))`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <div className="absolute -bottom-3 right-0 flex items-center gap-1 text-xs text-red-400">
                      <TrendingDown className="h-3 w-3" />
                      <span>
                        -{(((funnelSteps[i].visitors - funnelSteps[i + 1].visitors) / funnelSteps[i].visitors) * 100).toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>
                <div className="w-20 text-right">
                  <div className="text-sm text-data text-foreground">{step.visitors.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{step.rate}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Goal Tracking */}
        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Goal Tracking</h3>
          </div>
          <div className="space-y-4">
            {goals.map((goal, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-md bg-secondary/30 border border-border">
                <div>
                  <div className="text-sm text-foreground">{goal.name}</div>
                  <div className="text-xs text-muted-foreground">Rate: {goal.rate}</div>
                </div>
                <div className="text-lg text-data text-foreground">{goal.completions.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-4 w-4 text-warning" />
            <h3 className="text-sm font-medium text-foreground">AI Optimization Suggestions</h3>
          </div>
          <div className="space-y-3">
            {suggestions.map((s, i) => (
              <div key={i} className="p-3 rounded-md bg-secondary/30 border border-border text-sm text-foreground/80">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionFunnels;
