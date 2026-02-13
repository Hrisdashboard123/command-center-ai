import { BookOpen, Share2, Clock, FileText } from "lucide-react";

const stories = [
  {
    title: "Weekly Performance Summary",
    date: "Feb 10, 2026",
    summary: "Traffic increased 18% week-over-week driven by organic search. The /pricing page continues to be the highest converting page at 6.2%. Mobile engagement improved after the latest speed optimizations.",
    tags: ["Traffic", "Conversion", "Mobile"],
  },
  {
    title: "Campaign Impact Analysis",
    date: "Feb 7, 2026",
    summary: "The Q1 email campaign generated 2,400 visits with a 4.8% conversion rate — 2x above average. Blog content linked in emails had 65% read-through rates. Recommended: increase email frequency to bi-weekly.",
    tags: ["Campaign", "Email", "ROI"],
  },
  {
    title: "User Journey Insights",
    date: "Feb 3, 2026",
    summary: "Most users follow the path: Blog → Features → Pricing → Sign Up. Users who visit the blog first have 3x higher lifetime value. Consider adding CTAs in blog content to accelerate the journey.",
    tags: ["UX", "Journey", "Optimization"],
  },
];

const timeline = [
  { time: "2 hours ago", event: "AI detected conversion anomaly on /checkout" },
  { time: "6 hours ago", event: "Weekly report auto-generated and ready for review" },
  { time: "1 day ago", event: "New traffic source identified: ProductHunt referral" },
  { time: "2 days ago", event: "Engagement score improved to 72/100" },
  { time: "3 days ago", event: "Heatmap analysis completed for landing page redesign" },
];

const DataStorytelling = () => {
  return (
    <div className="space-y-6 animate-fade-up">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-heading text-foreground">Data Storytelling</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
          <FileText className="h-3.5 w-3.5" />
          Generate Report
        </button>
      </div>

      {/* Stories */}
      <div className="space-y-4">
        {stories.map((story, i) => (
          <div key={i} className="card-elevated p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-medium text-foreground">{story.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{story.date}</span>
                </div>
              </div>
              <button className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed mb-4">{story.summary}</p>
            <div className="flex gap-2">
              {story.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Insight Timeline */}
      <div className="card-elevated p-5">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium text-foreground">Insight Timeline</h3>
        </div>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-4 pb-4 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
              </div>
              <div>
                <p className="text-sm text-foreground/80">{item.event}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataStorytelling;
