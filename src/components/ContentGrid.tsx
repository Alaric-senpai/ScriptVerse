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

    // Scroll to section logic
    useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1));
            if (elem) {
                // Adjust scroll position to account for sticky navbar (optional, but good UX)
                const navbarHeight = 64; // Assuming your navbar height is 64px (h-16)
                const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - navbarHeight - 20, // 20px padding
                    behavior: "smooth"
                });
            }
        } else {
            // Scroll to top if no hash is present or on initial load
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    // Determine content width based on whether there are navigation links
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