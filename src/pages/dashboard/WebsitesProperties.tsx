import { Globe, Plus, BarChart3, Trash2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const websites = [
  { name: "mywebsite.com", status: "active", visitors: "28.4K", conversion: "3.2%", score: 72 },
  { name: "blog.mywebsite.com", status: "active", visitors: "12.1K", conversion: "1.8%", score: 58 },
  { name: "shop.mywebsite.com", status: "active", visitors: "8.6K", conversion: "5.4%", score: 84 },
  { name: "landing.campaign.com", status: "paused", visitors: "2.3K", conversion: "7.1%", score: 91 },
];

const WebsitesProperties = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading text-foreground">Websites & Properties</h2>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-red-sm">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {websites.map((site, i) => (
          <div key={i} className="card-elevated p-5">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{site.name}</div>
                  <div className={`text-xs ${site.status === "active" ? "text-green-500" : "text-muted-foreground"}`}>
                    {site.status === "active" ? "● Active" : "◯ Paused"}
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="p-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
                <button className="p-1.5 rounded text-muted-foreground hover:text-destructive hover:bg-secondary transition-colors">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-xs text-muted-foreground">Visitors</div>
                <div className="text-sm text-data text-foreground">{site.visitors}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Conv. Rate</div>
                <div className="text-sm text-data text-foreground">{site.conversion}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Score</div>
                <div className="text-sm text-data text-foreground">{site.score}/100</div>
              </div>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
                style={{ width: `${site.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitesProperties;
