import { FileDown, FileText, Download, Calendar, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  { name: "Weekly Performance Report", date: "Feb 10, 2026", type: "PDF", size: "2.4 MB", status: "Ready" },
  { name: "Monthly Traffic Analysis", date: "Feb 1, 2026", type: "PDF", size: "5.1 MB", status: "Ready" },
  { name: "Conversion Funnel Export", date: "Jan 28, 2026", type: "CSV", size: "1.2 MB", status: "Ready" },
  { name: "AI Insights Summary Q1", date: "Jan 15, 2026", type: "PDF", size: "3.8 MB", status: "Ready" },
  { name: "Raw Analytics Data", date: "Jan 10, 2026", type: "CSV", size: "12.6 MB", status: "Ready" },
];

const templates = [
  { name: "Executive Summary", description: "High-level KPIs and AI insights for stakeholders" },
  { name: "SEO Performance", description: "Organic traffic, rankings, and content performance" },
  { name: "Campaign ROI", description: "Campaign attribution, cost analysis, and revenue impact" },
  { name: "Custom Report", description: "Build a report with your selected metrics and date range" },
];

const ReportsExports = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading text-foreground">Reports & Exports</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary text-sm">
            <Filter className="h-3.5 w-3.5 mr-2" />
            Filter
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-red-sm text-sm">
            <FileText className="h-3.5 w-3.5 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Report Templates */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">Report Templates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {templates.map((t, i) => (
            <button
              key={i}
              className="card-elevated p-4 text-left hover:border-primary/30 transition-colors group"
            >
              <FileText className="h-5 w-5 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-sm font-medium text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <div className="card-elevated p-5">
        <h3 className="text-sm font-medium text-foreground mb-4">Recent Reports</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted-foreground font-medium">Report</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Date</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Format</th>
                <th className="text-left py-2 text-muted-foreground font-medium">Size</th>
                <th className="text-right py-2 text-muted-foreground font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((r, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-3 text-foreground flex items-center gap-2">
                    <FileDown className="h-4 w-4 text-primary flex-shrink-0" />
                    {r.name}
                  </td>
                  <td className="py-3 text-muted-foreground">{r.date}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded text-xs bg-primary/10 text-primary border border-primary/20">
                      {r.type}
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">{r.size}</td>
                  <td className="py-3 text-right">
                    <button className="p-1.5 rounded text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Schedule */}
      <div className="card-elevated p-5">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium text-foreground">Scheduled Reports</h3>
        </div>
        <div className="space-y-3">
          {[
            { name: "Weekly Performance", freq: "Every Monday, 9:00 AM", recipients: "3 recipients" },
            { name: "Monthly Summary", freq: "1st of each month", recipients: "5 recipients" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-md bg-secondary/30 border border-border">
              <div>
                <div className="text-sm text-foreground">{s.name}</div>
                <div className="text-xs text-muted-foreground">{s.freq} · {s.recipients}</div>
              </div>
              <Button variant="outline" size="sm" className="border-border text-foreground hover:bg-secondary text-xs">
                Edit
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsExports;
