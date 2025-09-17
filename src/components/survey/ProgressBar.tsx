import { cn } from "@/lib/utils";

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar = ({ current, total, className }: ProgressBarProps) => {
  const progress = (current / total) * 100;
  
  return (
    <div className={cn("evenpay-progress-bar", className)}>
      <div 
        className="evenpay-progress-fill"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};