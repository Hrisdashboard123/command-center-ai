import {
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye,
  TrendingUp,
  Zap,
  Brain,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const trafficData = [
  { name: "Mon", visitors: 4200, pageviews: 8400 },
  { name: "Tue", visitors: 3800, pageviews: 7200 },
  { name: "Wed", visitors: 5100, pageviews: 10200 },
  { name: "Thu", visitors: 4600, pageviews: 9800 },
  { name: "Fri", visitors: 5800, pageviews: 12100 },
  { name: "Sat", visitors: 3200, pageviews: 5800 },
  { name: "Sun", visitors: 2900, pageviews: 5200 },
];

const sourceData = [
  { name: "Organic", value: 42 },
  { name: "Direct", value: 28 },
  { name: "Social", value: 18 },
  { name: "Referral", value: 12 },
];

const kpis = [
  {
    label: "Total Visitors",
    value: "28,459",
    change: "+12.5%",
    up: true,
    icon: Users,
  },
  {
    label: "Page Views",
    value: "84,230",
    change: "+8.2%",
    up: true,
    icon: Eye,
  },
  {
    label: "Conversion Rate",
    value: "3.24%",
    change: "+0.4%",
    up: true,
    icon: TrendingUp,
  },
  {
    label: "Engagement Score",
    value: "72/100",
    change: "-2.1%",
    up: false,
    icon: Zap,
  },
];

const insights = [
  "Traffic spike detected on Friday — correlates with email campaign launch",
  "Mobile bounce rate decreased 8% after page speed improvements",
  "Top converting page: /pricing with 6.2% conversion rate",
];

const AnalyticsOverview = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <div
            key={i}
            className="card-elevated p-5"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-muted-foreground">{kpi.label}</span>
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="text-2xl text-data text-foreground">{kpi.value}</div>
            <div className={`flex items-center gap-1 mt-1 text-sm ${kpi.up ? "text-green-500" : "text-red-400"}`}>
              {kpi.up ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
              <span>{kpi.change}</span>
              <span className="text-muted-foreground ml-1">vs last period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Traffic Chart */}
        <div className="lg:col-span-2 card-elevated p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Traffic Overview</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={trafficData}>
              <defs>
                <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(0, 86%, 30%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(0, 86%, 30%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
              <XAxis dataKey="name" stroke="hsl(220, 10%, 40%)" fontSize={12} />
              <YAxis stroke="hsl(220, 10%, 40%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 18%, 10%)",
                  border: "1px solid hsl(220, 15%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 95%)",
                  fontSize: 12,
                }}
              />
              <Area
                type="monotone"
                dataKey="visitors"
                stroke="hsl(0, 86%, 40%)"
                fill="url(#redGrad)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="pageviews"
                stroke="hsl(220, 10%, 55%)"
                fill="transparent"
                strokeWidth={1.5}
                strokeDasharray="4 4"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Sources */}
        <div className="card-elevated p-5">
          <h3 className="text-sm font-medium text-foreground mb-4">Traffic Sources</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sourceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" horizontal={false} />
              <XAxis type="number" stroke="hsl(220, 10%, 40%)" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="hsl(220, 10%, 40%)" fontSize={12} width={60} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 18%, 10%)",
                  border: "1px solid hsl(220, 15%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 95%)",
                  fontSize: 12,
                }}
              />
              <Bar dataKey="value" fill="hsl(0, 86%, 30%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="card-elevated p-5">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium text-foreground">AI Insight Highlights</h3>
        </div>
        <div className="space-y-3">
          {insights.map((insight, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-md bg-secondary/50 border border-border"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 animate-pulse-glow" />
              <p className="text-sm text-foreground/80">{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsOverview;
