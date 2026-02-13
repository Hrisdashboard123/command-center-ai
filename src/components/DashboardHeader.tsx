import { Bell, ChevronDown, Menu, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
  onMenuClick: () => void;
}

const DashboardHeader = ({ onMenuClick }: Props) => {
  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="lg:hidden text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
        </button>

        {/* Website Selector */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-sm text-foreground hover:bg-secondary/80 transition-colors">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <span>mywebsite.com</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>

        {/* Date Range */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Calendar className="h-3.5 w-3.5" />
          <span>Last 30 days</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        {/* Search */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary text-sm text-muted-foreground hover:text-foreground transition-colors">
          <Search className="h-3.5 w-3.5" />
          <span>Search...</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-4.5 w-4.5" />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
        </button>

        {/* User */}
        <button className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-secondary transition-colors">
          <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-bold">
            JD
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground hidden md:block" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
