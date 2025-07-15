// src/components/TutorialSidebar.jsx
import { Link } from 'react-router-dom'; 
import type { NavLinkItem } from '@/lib/constants'; 

type TutorialSidebarProps = {
  title: string;
  links: NavLinkItem[];
};

const TutorialSidebar = ({ title, links }: TutorialSidebarProps) => {
  return (
    <div className="w-2/5 bg-slate-900/50 border-white/20 h-max shadow-md backdrop-blur-md border-2 p-3 rounded-md sticky top-4">
      <h2 className="text-xl font-bold mb-4 text-blue-200">{title}</h2>
      <nav>
        <ul className="space-y-2">
          {links.map((linkItem) => (
            <li key={linkItem.id}>
              <Link
                to={`#${linkItem.id}`} // Link to the section ID
                className="text-blue-300 hover:text-blue-100 transition-colors duration-200 block p-2 rounded hover:bg-blue-800/30"
              >
                {linkItem.icon && <span className="mr-2">{linkItem.icon}</span>}
                {linkItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TutorialSidebar;