// src/components/TutorialContent.jsx
import React from 'react';

type TutorialContentProps = {
    children: React.ReactNode; // Use children to pass the actual content
    className?: string; // Allow optional className for flexibility
};

const TutorialContent = ({ children, className }: TutorialContentProps) => {
  return (
    // The width will be controlled by ContentGrid, but you can add base spacing here
    <div className={`space-y-8 ${className || ''}`}>
        {children}
    </div>
  );
};

export default TutorialContent;