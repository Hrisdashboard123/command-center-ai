import { Eye, Clock, MousePointer, ArrowDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sessionData = [
  { time: "00:00", sessions: 120 },
  { time: "04:00", sessions: 45 },
  { time: "08:00", sessions: 310 },
  { time: "12:00", sessions: 480 },
  { time: "16:00", sessions: 520 },
  { time: "20:00", sessions: 380 },
  { time: "23:59", sessions: 200 },
];

const topPages = [
  { page: "/home", views: 12400, avgTime: "2:34", bounceRate: "32%" },
  { page: "/pricing", views: 8200, avgTime: "3:12", bounceRate: "24%" },
  { page: "/features", views: 6800, avgTime: "1:58", bounceRate: "41%" },
  { page: "/blog/ai-analytics", views: 5100, avgTime: "4:22", bounceRate: "18%" },
  { page: "/contact", views: 3200, avgTime: "1:12", bounceRate: "52%" },
];

const metrics = [
  { label: "Avg. Page Views/Session", value: "4.2", icon: Eye },
  { label: "Avg. Session Duration", value: "3m 24s", icon: Clock },
  { label: "Scroll Depth (avg)", value: "68%", icon: ArrowDown },
  { label: "Click-through Rate", value: "2.8%", icon: MousePointer },
];

const TrafficBehavior = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-xl font-heading text-foreground">Traffic & User Behavior</h2>

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="card-elevated p-4">
            <m.icon className="h-4 w-4 text-primary mb-2" />
            <div className="text-xl text-data text-foreground">{m.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Sessions Chart */}
      <div className="card-elevated p-5">
        <h3 className="text-sm font-medium text-foreground mb-4">Sessions by Time of Day</h3>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={sessionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
            <XAxis dataKey="time" stroke="hsl(220, 10%, 40%)" fontSize={12} />
            <YAxis stroke="hsl(220, 10%, 40%)" fontSize={12} />
            <Tooltip contentStyle={{ backgroundColor: "hsl(220, 18%, 10%)", border: "1px solid hsl(220, 15%, 18%)", borderRadius: "8px", color: "hsl(0, 0%, 95%)", fontSize: 12 }} />
            <Line type="monotone" dataKey="sessions" stroke="hsl(0, 86%, 40%)" strokeWidth={2} dot={{ fill: "hsl(0, 86%, 30%)", r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Pages Table */}
      <div className="card-elevated p-5">
        <h3 className="text-sm font-medium text-foreground mb-4">Top Pages</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Page</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Views</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Avg. Time</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Bounce</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((p, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-2.5 text-foreground font-mono text-xs">{p.page}</td>
                  <td className="py-2.5 text-right text-data text-foreground">{p.views.toLocaleString()}</td>
                  <td className="py-2.5 text-right text-muted-foreground">{p.avgTime}</td>
                  <td className="py-2.5 text-right text-muted-foreground">{p.bounceRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrafficBehavior;
