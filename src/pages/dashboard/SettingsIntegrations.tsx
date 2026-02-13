import { User, Key, Bell, Link, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const integrations = [
  { name: "Google Analytics", status: "connected", icon: "GA" },
  { name: "Google Tag Manager", status: "connected", icon: "GTM" },
  { name: "Slack", status: "not connected", icon: "SL" },
  { name: "Zapier", status: "not connected", icon: "ZP" },
];

const SettingsIntegrations = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <h2 className="text-xl font-heading text-foreground">Settings & Integrations</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-5">
            <User className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Profile Settings</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-foreground">Display Name</Label>
              <Input defaultValue="John Doe" className="bg-secondary border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Email</Label>
              <Input defaultValue="john@company.com" className="bg-secondary border-border text-foreground" />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Workspace Name</Label>
              <Input defaultValue="My Analytics" className="bg-secondary border-border text-foreground" />
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-5">
            <Bell className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Notification Rules</h3>
          </div>
          <div className="space-y-4">
            {[
              "Traffic anomaly alerts",
              "Weekly performance reports",
              "Conversion drop warnings",
              "AI insight notifications",
              "Security alerts",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-sm text-foreground">{item}</span>
                <Switch defaultChecked={i < 3} />
              </div>
            ))}
          </div>
        </div>

        {/* API Keys */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-5">
            <Key className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">API Keys</h3>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-md bg-secondary/30 border border-border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-foreground">Production Key</span>
                <span className="text-xs text-green-500">Active</span>
              </div>
              <code className="text-xs text-muted-foreground font-mono">wai_pk_••••••••••••3f8a</code>
            </div>
            <div className="p-3 rounded-md bg-secondary/30 border border-border">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-foreground">Test Key</span>
                <span className="text-xs text-muted-foreground">Inactive</span>
              </div>
              <code className="text-xs text-muted-foreground font-mono">wai_tk_••••••••••••9b2c</code>
            </div>
            <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
              Generate New Key
            </Button>
          </div>
        </div>

        {/* Integrations */}
        <div className="card-elevated p-6">
          <div className="flex items-center gap-2 mb-5">
            <Link className="h-4 w-4 text-primary" />
            <h3 className="text-sm font-medium text-foreground">Integrations</h3>
          </div>
          <div className="space-y-3">
            {integrations.map((int, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-md bg-secondary/30 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-xs font-bold text-primary">
                    {int.icon}
                  </div>
                  <div>
                    <div className="text-sm text-foreground">{int.name}</div>
                    <div className={`text-xs ${int.status === "connected" ? "text-green-500" : "text-muted-foreground"}`}>
                      {int.status}
                    </div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border text-foreground hover:bg-secondary text-xs"
                >
                  {int.status === "connected" ? "Configure" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsIntegrations;
