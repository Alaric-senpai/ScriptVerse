import { Link } from 'react-router-dom';
import type { NavLinkItem } from '@/lib/constants';

type TutorialSidebarProps = {
  title: string;
  links: NavLinkItem[];
  basePath?: string; // Optional: allow flexibility in base route
};

const TutorialSidebar = ({ title, links, basePath = '' }: TutorialSidebarProps) => {
  return (
    <div className="w-full md:w-2/5 hidden md:block bg-slate-900/50 border-white/20 h-max shadow-md backdrop-blur-md border-2 p-3 rounded-md sticky top-4">
      <h2 className="text-xl font-bold mb-4 text-blue-200">{title}</h2>
      <nav>
        <ul className="space-y-2">
          {links.map((linkItem) => {
            const href =
              linkItem.type === 'id'
                ? `${basePath}#${linkItem.id}`
                : `${basePath}${linkItem.id}`;

            return (
              <li key={linkItem.id}>
                <Link
                  to={href}
                  className="text-blue-300 flex items-center gap-4 p-4 hover:text-blue-100 bg-blue-800/5 transition-colors duration-200 rounded hover:bg-blue-800/30"
                >
                  {linkItem.icon && <span className="mr-2">{linkItem.icon}</span>}
                  {linkItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TutorialSidebar;
