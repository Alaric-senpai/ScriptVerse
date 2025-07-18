import type React from 'react';
import Seperator from './Seperator'; // Assuming Seperator is in the same components folder

type SectionProps = {
    id:string;
    title:string;
    children:React.ReactNode
}

const TutorialSection = ({ id, title, children }:SectionProps) => {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-2xl font-semibold text-blue-300 mb-2">{title}</h2>
      {children}
      <Seperator /> {/* Separator after each section for visual distinction */}
    </section>
  );
};

export default TutorialSection;