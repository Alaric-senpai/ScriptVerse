import Header from '@/components/Header';
import CodeElement from '@/components/CodeElement';
import TutorialSection from '@/components/TutorialSection';
import TutorialList from '@/components/TutorialList';
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph';

// --- Code Snippets for this section ---

// 1. Button Component
const buttonCode = `
<button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
               transition duration-300 ease-in-out">
  Primary Button
</button>

<button class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-lg shadow
               focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75
               transition duration-300 ease-in-out">
  Secondary Button
</button>

<button class="text-blue-600 hover:text-blue-800 font-semibold py-2 px-4 rounded-lg
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75
               transition duration-300 ease-in-out">
  Text Button
</button>
`.trim();

// 2. Card Component
const cardCode = `
<div class="max-w-sm mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden md:max-w-2xl my-8">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="https://via.placeholder.com/192" alt="Modern building">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreat</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-white hover:underline">
        Incredible views on our new mountain adventure!
      </a>
      <p class="mt-2 text-gray-400">
        Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine?
      </p>
      <button class="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
        Book now
      </button>
    </div>
  </div>
</div>
`.trim();

// 3. Navigation Bar Component
const navbarCode = `
<nav class="bg-gray-900 p-4">
  <div class="container mx-auto flex justify-between items-center">
    <a href="#" class="text-white text-2xl font-bold">MyBrand</a>

    <div class="hidden md:flex space-x-6">
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Home</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">About</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Services</a>
      <a href="#" class="text-gray-300 hover:text-white px-3 py-2 rounded-md">Contact</a>
    </div>

    <div class="md:hidden">
      <button class="text-gray-300 hover:text-white focus:outline-none">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
`.trim();

const BuildingUIComponents = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Building Common UI Components' />

      <TutorialSection id="intro" title="Introduction: Bringing Utilities to Life 🏗️">
        <ContentParagraph text="You've learned the fundamental building blocks of Tailwind CSS. Now, it's time to apply that knowledge to construct real-world UI components. This section will walk you through building several common components, demonstrating how to combine Tailwind's utility classes for effective and responsive designs." />
        <ContentParagraph text="The beauty of Tailwind is that you're not locked into predefined component styles. Instead, you're empowered to build *any* design you can imagine, directly in your HTML, by composing utilities. Let's get started!" />
      </TutorialSection>

      ---

      <TutorialSection id="buttons" title="1. Buttons: Versatility and States 👆">
        <ContentParagraph text="Buttons are fundamental interactive elements. With Tailwind, you can quickly create various button styles and handle their interactive states (hover, focus, active, etc.) with ease." />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Key Utilities Used:</h3>
        <TutorialList
          type="disc"
          items={[
            "`bg-*`, `hover:bg-*`: Background color and its hover state.",
            "`text-*`: Text color.",
            "`font-bold`, `font-semibold`: Font weight.",
            "`py-*`, `px-*`: Vertical and horizontal padding.",
            "`rounded-lg`: Border radius.",
            "`focus:outline-none`, `focus:ring-2`, `focus:ring-*`, `focus:ring-opacity-*`: Accessibility-focused outline and focus ring for keyboard navigation.",
            "`transition`, `duration-*`, `ease-in-out`: For smooth visual transitions on state changes."
          ]}
        />
        <CodeElement language="html" code={buttonCode} title="Example: Various Button Styles" />
        <ContentParagraph text="Notice how combinations of these utilities create distinct button appearances, all while keeping the styles local to the element." />
        
      </TutorialSection>

      ---

      <TutorialSection id="cards" title="2. Cards: Structured Content Blocks 📄">
        <ContentParagraph text="Cards are versatile containers for content, often featuring images, text, and calls to action. Tailwind's Flexbox and Grid utilities make creating responsive cards straightforward." />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Key Utilities Used:</h3>
        <TutorialList
          type="disc"
          items={[
            "`max-w-*`, `mx-auto`: Constraining width and centering the card.",
            "`bg-*`, `rounded-*`, `shadow-lg`, `overflow-hidden`: Styling the card's container.",
            "`md:flex`, `md:shrink-0`: For responsive layouts (e.g., stacking on mobile, flexing on medium screens and up).",
            "`h-*`, `w-*`, `object-cover`: Sizing and styling the image.",
            "`p-*`: Padding within content areas.",
            "`uppercase`, `tracking-wide`, `text-sm`, `font-semibold`: Typography styling for headings.",
            "`mt-*`: Margin-top for vertical spacing.",
            "`block`, `leading-tight`, `font-medium`, `hover:underline`: Text link styling."
          ]}
        />
        <CodeElement language="html" code={cardCode} title="Example: A Responsive Card Component" />
        <ContentParagraph text="This example showcases how a card can fluidly adapt its layout from a stacked mobile view to a side-by-side desktop view using responsive utility prefixes like `md:flex`." />
        
      </TutorialSection>

      ---

      <TutorialSection id="navbar" title="3. Navigation Bar: Responsive Header 🧭">
        <ContentParagraph text="A responsive navigation bar is crucial for almost any website. We'll build a basic one that adapts for mobile (with a hidden menu icon) and desktop (with visible links)." />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Key Utilities Used:</h3>
        <TutorialList
          type="disc"
          items={[
            "`bg-*`, `p-*`: Styling the nav container.",
            "`container`, `mx-auto`: Centering content within the nav bar.",
            "`flex`, `justify-between`, `items-center`: Flexbox for aligning logo and links.",
            "`text-*`, `font-bold`: Styling the logo.",
            "`hidden`, `md:flex`, `space-x-*`: Hiding/showing elements responsively and controlling spacing.",
            "`hover:text-*`, `px-*`, `py-*`, `rounded-md`: Styling nav links and their hover states.",
            "`md:hidden`: Hiding the mobile menu icon on desktop.",
            "SVG for the hamburger icon (not a Tailwind utility, but common)."
          ]}
        />
        <CodeElement language="html" code={navbarCode} title="Example: A Responsive Navigation Bar" />
        <ContentParagraph text="This navigation bar demonstrates hiding desktop links and showing a mobile menu button below a certain breakpoint (`md:`), and vice-versa, all with simple utility classes." />
        
      </TutorialSection>

      ---

      <CalloutBox title="💡 Component Thinking with Utilities">
        <ContentParagraph text="As you build more components, you'll notice a pattern: you're not writing CSS rules in a separate file. Instead, you're directly applying visual properties. This 'utility-first' mindset is a paradigm shift that, once embraced, significantly speeds up development and improves maintainability for consistent designs. You're building a reusable component by composing utilities, not by writing custom CSS classes." />
        <ContentParagraph text="In frameworks like React or Vue, you would encapsulate these HTML structures and their Tailwind classes into reusable components (e.g., `<Button>`, `<Card>`, `<Navbar>`), further streamlining your development process." />
      </CalloutBox>
    </div>
  );
};

export default BuildingUIComponents;