// src/components/ContentGrid.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Corrected import
import TutorialContent from './TutorialContent'; // Corrected import name
import TutorialSidebar from './TutorialSidebar'; // Corrected import name
import type { NavLinkItem } from '@/lib/constants'; // Corrected type import

type ContentGridProps = {
    tutorialContent: React.ReactNode; // Renamed for clarity
    navigationLinks: NavLinkItem[]; // Renamed for clarity
    navigationTitle: string; // Renamed for clarity
};

const ContentGrid = ({ tutorialContent, navigationLinks, navigationTitle }: ContentGridProps) => {
    const location = useLocation();

useEffect(() => {
  const handleHashScroll = () => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 64;
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: top - navbarHeight - 20,
          behavior: 'smooth',
        });
      }
    }
  };

  // Delay scroll to allow layout/render completion
  setTimeout(() => handleHashScroll(), 100);

}, [location]);

    const contentWidthClass = navigationLinks && navigationLinks.length > 0 ? ' w-full md:w-3/5' : 'w-full';

    return (
        <div className='w-full gap-5 flex max-w-7xl mx-auto py-5'> {/* Added py-5 for top/bottom padding */}
            <TutorialContent className={contentWidthClass}>
                {tutorialContent}
            </TutorialContent>
            {navigationLinks && navigationLinks.length > 0 && (
                <TutorialSidebar title={navigationTitle} links={navigationLinks} />
            )}
        </div>
    );
};

export default ContentGrid;