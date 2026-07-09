import type { LucideIcon } from "lucide-react";

const sizeMap = {
  sm: { box: "w-9 h-9 rounded-lg", icon: "w-4 h-4" },
  md: { box: "w-11 h-11 rounded-xl", icon: "w-5 h-5" },
  lg: { box: "w-14 h-14 rounded-2xl", icon: "w-6 h-6" },
};

const variantMap = {
  light: "bg-blue-50 text-blue-600",
  solid: "bg-gradient-to-br from-blue-600 to-blue-400 text-white shadow-lg",
  dark: "bg-blue-500/10 border border-blue-400/20 text-blue-300",
};

export default function IconBadge({
  icon: Icon,
  size = "md",
  variant = "light",
  className = "",
}: {
  icon: LucideIcon;
  size?: keyof typeof sizeMap;
  variant?: keyof typeof variantMap;
  className?: string;
}) {
  return (
    <div className={`${sizeMap[size].box} ${variantMap[variant]} flex items-center justify-center shrink-0 ${className}`}>
      <Icon className={sizeMap[size].icon} strokeWidth={1.75} />
    </div>
  );
}
