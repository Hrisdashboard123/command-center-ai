import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  TrendingUp,
  Brain,
  BookOpen,
  Globe,
  Settings,
  X,
  Activity,
} from "lucide-react";

const navItems = [
  { label: "Analytics Overview", path: "/dashboard", icon: BarChart3 },
  { label: "Traffic & Behavior", path: "/dashboard/traffic", icon: Users },
  { label: "Conversion Funnels", path: "/dashboard/funnels", icon: TrendingUp },
  { label: "AI Predictive Insights", path: "/dashboard/insights", icon: Brain },
  { label: "Data Storytelling", path: "/dashboard/stories", icon: BookOpen },
  { label: "Websites & Properties", path: "/dashboard/websites", icon: Globe },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

interface Props {
  onClose: () => void;
}

const DashboardSidebar = ({ onClose }: Props) => {
  const location = useLocation();

  return (
    <div className="h-full flex flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          <span className="font-heading text-lg text-foreground">
            WebInsight<span className="text-primary">AI</span>
          </span>
        </div>
        <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-auto">
        {navItems.map((item) => {
          const isActive =
            item.path === "/dashboard"
              ? location.pathname === "/dashboard"
              : location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-150 ${
                isActive
                  ? "bg-primary/15 text-primary font-medium glow-red-sm"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              }`}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="card-elevated p-3 text-center">
          <p className="text-xs text-muted-foreground">AI Engine Active</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-500">Processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
