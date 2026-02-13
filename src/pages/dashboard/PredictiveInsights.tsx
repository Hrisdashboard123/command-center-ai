import { Brain, TrendingUp, AlertTriangle, Sparkles } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const forecastData = [
  { week: "W1", actual: 4200, predicted: 4100 },
  { week: "W2", actual: 4800, predicted: 4600 },
  { week: "W3", actual: 5100, predicted: 5200 },
  { week: "W4", actual: 4900, predicted: 5000 },
  { week: "W5", actual: null, predicted: 5400 },
  { week: "W6", actual: null, predicted: 5800 },
  { week: "W7", actual: null, predicted: 6200 },
  { week: "W8", actual: null, predicted: 6500 },
];

const predictions = [
  { metric: "Traffic (next 30d)", prediction: "+18%", confidence: "87%" },
  { metric: "Conversion Rate", prediction: "+0.3%", confidence: "72%" },
  { metric: "Revenue", prediction: "+22%", confidence: "65%" },
];

const anomalies = [
  { type: "spike", message: "Unusual traffic spike from Russia detected — bot activity suspected", severity: "critical" },
  { type: "drop", message: "Newsletter signup rate dropped 15% this week", severity: "warning" },
  { type: "pattern", message: "Weekend traffic consistently 40% lower — schedule campaigns mid-week", severity: "info" },
];

const recommendations = [
  "Increase ad spend on Tuesday-Thursday based on peak conversion windows",
  "A/B test pricing page layout — predicted 12% lift in conversions",
  "Blog content on 'AI analytics' drives highest quality traffic — publish weekly",
  "Retarget cart abandoners within 2 hours for 3x recovery rate",
];

const PredictiveInsights = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-xl font-heading text-foreground">AI Predictive Insights</h2>

      {/* Predictions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {predictions.map((p, i) => (
          <div key={i} className="card-elevated p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{p.metric}</span>
            </div>
            <div className="text-2xl text-data text-foreground">{p.prediction}</div>
            <div className="text-xs text-muted-foreground mt-1">Confidence: {p.confidence}</div>
            <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: p.confidence }} />
            </div>
          </div>
        ))}
      </div>

      {/* Forecast Chart */}
      <div className="card-elevated p-5">
        <h3 className="text-sm font-medium text-foreground mb-4">Traffic Forecast (8 Weeks)</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
            <XAxis dataKey="week" stroke="hsl(220, 10%, 40%)" fontSize={12} />
            <YAxis stroke="hsl(220, 10%, 40%)" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: "8px", color: "hsl(0, 0%, 95%)", fontSize: 12 }} />
            <Line type="monotone" dataKey="actual" stroke="hsl(0, 86%, 40%)" strokeWidth={2} dot={{ fill: "hsl(0, 86%, 30%)", r: 4 }} connectNulls={false} />
            <Line type="monotone" dataKey="predicted" stroke="hsl(220, 10%, 55%)" strokeWidth={2} strokeDasharray="6 3" dot={{ fill: "hsl(220, 10%, 55%)", r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Anomaly Detection */}
        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <h3 className="text-sm font-medium text-foreground">Anomaly Detection</h3>
          </div>
          <div className="space-y-3">
            {anomalies.map((a, i) => (
              <div key={i} className={`p-3 rounded-md border text-sm ${
                a.severity === "critical"
                  ? "border-primary/40 bg-primary/5 text-foreground"
                  : a.severity === "warning"
                  ? "border-warning/40 bg-warning/5 text-foreground"
                  : "border-border bg-secondary/30 text-foreground/80"
              }`}>
                {a.message}
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">AI Recommendations</h3>
          </div>
          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-md bg-secondary/30 border border-border">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground/80">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveInsights;
