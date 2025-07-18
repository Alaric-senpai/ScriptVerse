// src/lib/constants.ts
// (If you're not using TypeScript, you can omit the `type` keyword)

export type NavLinkItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  type: 'id'| 'link';
};

// You can export your navLinks array directly from here if you want it centralized
export const useEffectNavLinks: NavLinkItem[] = [
  {
    id: "introduction", label: "🚀 Introduction to `useEffect`",
    type: "id"
  },
  {
    id: "basic-usage", label: "📝 Basic Usage: Every Render",
    type: "id"
  },
  {
    id: "dependency-array", label: "🔗 Controlling with Dependency Array",
    type: "id"
  },
  {
    id: "cleanup-function", label: "🧹 Cleaning Up Effects",
    type: "id"
  },
];