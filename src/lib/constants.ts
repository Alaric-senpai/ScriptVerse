// src/lib/constants.ts
// (If you're not using TypeScript, you can omit the `type` keyword)

export type NavLinkItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

// You can export your navLinks array directly from here if you want it centralized
export const useEffectNavLinks: NavLinkItem[] = [
  { id: "introduction", label: "🚀 Introduction to `useEffect`" },
  { id: "basic-usage", label: "📝 Basic Usage: Every Render" },
  { id: "dependency-array", label: "🔗 Controlling with Dependency Array" },
  { id: "cleanup-function", label: "🧹 Cleaning Up Effects" },
];