// src/layouts/TailwindLayout.tsx
import { Outlet } from "react-router-dom"
import ContentGrid from "@/components/ContentGrid"
import type { NavLinkItem } from "@/lib/constants"
import {  BlocksIcon, BookOpen, ChartBarBigIcon, CheckCircle2, Hand, Inspect } from "lucide-react"

const navLinks: NavLinkItem[] = [
  {
    id: '',
    label: 'Introduction',
    icon: <Hand />,
    type: 'link'
  },
  {
    id: 'installation',
    label: 'Installation',
    icon: <Inspect />,
    type: 'link'
  },
  {
    id: 'core-concepts',
    label: 'Core concepts',
    icon: <CheckCircle2 />,
    type: 'link'
  },
  {
    id: 'common-ui',
    label: 'Building common components',
    icon: <BlocksIcon />,
    type: 'link'
  },
  {
    id: 'optimization',
    label: 'Optimizing TailwindCSS for prodcution',
    icon: <ChartBarBigIcon />,
    type:'link'
  },
  {
    id: 'customization',
    label: 'Customising tailwindCSS: beyond the defaults',
    icon: <BookOpen />,
    type: 'link'
  }
]

export default function TailwindLayout() {
  return (
    <div className="w-full h-full min-h-screen p-4">
      <ContentGrid
        navigationLinks={navLinks}
        navigationTitle="Available Sections"
        tutorialContent={<Outlet />}
      />
    </div>
  )
}
