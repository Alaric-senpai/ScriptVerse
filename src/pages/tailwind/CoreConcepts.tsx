import Header from '@/components/Header';
import CodeElement from '@/components/CodeElement';
import TutorialSection from '@/components/TutorialSection';
import TutorialList from '@/components/TutorialList';
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph'; // This component now strictly expects a 'text' prop


// --- Code Snippets for this section ---
const utilityExample = `
<button class="my-custom-button">Click Me</button>

/* In your style.css */
.my-custom-button {
  padding: 12px 24px;
  background-color: blue;
  color: white;
  border-radius: 8px;
}

<button class="px-6 py-3 bg-blue-500 text-white rounded-lg">Click Me</button>
`.trim();

const responsiveExample = `
<p class="text-center md:text-left">
  This text will be centered on small screens and left-aligned on medium screens and up.
</p>

<div class="flex flex-col md:flex-row md:justify-between">
  <div class="p-4 bg-gray-700 rounded-md">Item 1</div>
  <div class="p-4 bg-gray-700 rounded-md">Item 2</div>
  <div class="p-4 bg-gray-700 rounded-md">Item 3</div>
</div>
`.trim();

const interactiveExample = `
<button class="bg-blue-500 text-white px-4 py-2 rounded
               hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
               active:scale-95 transition transform duration-150">
  Interactive Button
</button>

<div class="group border border-gray-700 p-4 rounded-md hover:bg-gray-800 transition">
  <p class="text-gray-300 group-hover:text-blue-400 transition">
    Hover over this box to change the text color.
  </p>
</div>
`.trim();

const tailwindConfigExtend = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... your content paths
  ],
  theme: {
    extend: { // <-- This is where you add new things without overwriting defaults
      colors: {
        'brand-primary': '#FF6347', // Custom brand color
        'custom-gray': { // Custom gray shades
          100: '#f0f0f0',
          500: '#808080',
          900: '#202020',
        }
      },
      fontFamily: {
        'headline': ['"Roboto"', 'sans-serif'], // Custom font family (use quotes for multi-word names)
      },
      spacing: {
        '128': '32rem', // Custom large spacing value
        '144': '36rem',
      },
      // You can extend many other things here:
      // animation, backgroundImage, borderRadius, boxShadow, etc.
    },
  },
  plugins: [], // Any Tailwind plugins you add go here
}
`.trim();


const TailwindCoreConcepts = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Tailwind CSS Core Concepts' />

      {/* 1. The Utility-First Philosophy */}
      <TutorialSection id="utility-first" title="1. 🧱 The Utility-First Philosophy: What Does That Mean?">
        <ContentParagraph text="At its heart, Tailwind CSS is a **utility-first** framework. This might sound intimidating, but it's quite simple: instead of writing custom CSS for every element, you assemble designs using small, single-purpose CSS classes directly in your HTML. Think of it like building with LEGO bricks. Each brick (utility class) does one specific thing, and by combining them, you can create anything from a simple button to a complex layout." />
        <ContentParagraph text="For example, instead of a traditional CSS approach where you define a class and then style it in a separate stylesheet, with Tailwind, you apply properties directly:" />
        <CodeElement language="html" code={utilityExample} title="Traditional CSS vs. Tailwind Utility-First" />
        <ContentParagraph text="Each class like `px-6` (horizontal padding), `py-3` (vertical padding), `bg-blue-500` (background color), `text-white` (text color), and `rounded-lg` (large border radius) applies a single CSS property." />

        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Why is this beneficial?</h3>
        <TutorialList
          type="disc"
          items={[
            "**No More Naming Classes:** You spend less time inventing clever (or not-so-clever) class names. The utility names are descriptive of their function.",
            "**Faster Development:** All your styling is right there in your HTML. No more jumping between HTML and CSS files to make a small style change.",
            "**Built-in Consistency:** Tailwind comes with a predefined design system for spacing, colors, font sizes, etc. When you use `p-4`, you're using a value from this system, which naturally makes your designs consistent across the entire project.",
            "**Easier Maintenance:** If you need to change a style, you just modify the classes on that element, without worrying about accidentally breaking styles on other elements that might share the same custom class.",
          ]}
        />

        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Initial Concerns (and why they fade):</h3>
        <TutorialList
          type="disc"
          items={[
            "**\"My HTML looks messy with too many classes!\"** This is a common first reaction. However, you'll quickly get used to it. Plus, when building with component-based frameworks like React or Vue, these long class lists often get encapsulated within reusable components.",
            "**\"It feels like inline styles.\"** Not quite! Inline styles don't offer responsive design, pseudo-classes (like hover), or easy customization via a config file. Tailwind compiles into a traditional stylesheet, just in a different way.",
          ]}
        />
        
      </TutorialSection>

      {/* 2. Understanding Tailwind's Design System */}
      <TutorialSection id="design-system" title="2. 🎨 Understanding Tailwind's Design System: The Building Blocks">
        <ContentParagraph text="Tailwind CSS comes with a sensible, default **design system** right out of the box. This system includes a comprehensive set of scales for things like:" />
        <TutorialList
          type="disc"
          items={[
            "**Spacing:** Uses a numerical scale (e.g., `1`, `2`, `3`, `4`, `px`, etc.) for padding (`p-*`), margin (`m-*`), width (`w-*`), height (`h-*`), and more. For example, `p-4` translates to `1rem` (16px), `p-2` to `0.5rem` (8px), etc.",
            "**Colors:** A vast palette with different shades (e.g., `blue-100` to `blue-900`, `red-500`, `gray-300`). Use them for text (`text-red-500`), backgrounds (`bg-blue-200`), borders (`border-gray-700`), and more.",
            "**Typography:** Classes for font sizes (`text-sm`, `text-xl`), font weights (`font-bold`, `font-light`), line heights (`leading-tight`), and even font families (`font-sans`, `font-serif`).",
            "**Flexbox & Grid:** Powerful layout utilities like `flex`, `grid`, `items-center`, `justify-between`, `grid-cols-3`, `gap-4`.",
            "**Shadows, Borders, Rounded Corners:** `shadow-md`, `border`, `border-blue-500`, `rounded-full`, `rounded-lg`.",
          ]}
        />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">How to Discover Utilities:</h3>
        <ContentParagraph text="The best way to learn is by doing and by using **Tailwind's excellent documentation** (tailwindcss.com). Also, if you're using a good code editor (like VS Code), installing the **Tailwind CSS IntelliSense** extension is a game-changer. It provides amazing autocomplete, syntax highlighting, and linting, making it feel like Tailwind is native to your HTML." />
        
      </TutorialSection>

      {/* 3. Responsive Design: Mobile-First by Default */}
      <TutorialSection id="responsive-design" title="3. 📱➡️🖥️ Responsive Design: Mobile-First by Default">
        <ContentParagraph text="One of Tailwind's most powerful features is its built-in approach to **responsive design**. It encourages a **mobile-first** workflow, which means:" />
        <TutorialList
          type='list-disc'
          items={[
            "**Base styles apply to all screen sizes (mobile first).** Any utility class you apply without a prefix (e.g., `text-center`, `flex`) will apply from the smallest screens upwards.",
            "**Breakpoints modify styles for larger screens.** You use **breakpoint prefixes** to apply styles *only* from a certain screen size and up.",
          ]}
        />
        <ContentParagraph text="Tailwind includes a default set of breakpoints:" />
        <TutorialList
          type="disc"
          items={[
            "`sm` (Small screens, default: `640px`)",
            "`md` (Medium screens, default: `768px`)",
            "`lg` (Large screens, default: `1024px`)",
            "`xl` (Extra large screens, default: `1280px`)",
            "`2xl` (Double extra large screens, default: `1536px`)",
          ]}
        />
        <ContentParagraph text="**How to use responsive classes:** Simply prefix the utility class with the breakpoint name and a colon: `[breakpoint]:[utility-class]`." />
        <CodeElement language="html" code={responsiveExample} title="Responsive Design Examples" />
        <ContentParagraph text="In the example, the text will be centered on small screens and left-aligned on medium screens (`md:text-left`) and up. The `div` elements will stack vertically (`flex-col`) on small screens, but on medium screens (`md:`) and wider, they'll display in a row (`flex-row`) and space out (`justify-between`)." />
        
      </TutorialSection>

      {/* 4. Hover, Focus, and Other States */}
      <TutorialSection id="interactive-states" title="4. ✨ Hover, Focus, and Other States: Adding Interactivity">
        <ContentParagraph text="Tailwind makes styling interactive states like `hover`, `focus`, `active`, and more incredibly easy and consistent. You apply these styles using a similar prefixing syntax:" />
        <TutorialList
          type="disc"
          items={[
            "`hover:bg-blue-700`: Changes background color on hover.",
            "`focus:ring-2 focus:ring-blue-500`: Adds a focus ring when an element (like an input or button) is focused.",
            "`active:scale-95`: Makes an element slightly shrink when actively clicked.",
            "`group-hover:text-blue-600`: If an element has the `group` class, this will apply `text-blue-600` to a child element when the *parent* group is hovered. This is super useful!",
          ]}
        />
        <CodeElement language="html" code={interactiveExample} title="Interactive States Examples" />
        <ContentParagraph text="The button demonstrates hover, focus, and active states. The `div` with the `group` class shows how `group-hover` can style child elements when the parent is hovered." />
      </TutorialSection>

      {/* 5. Customization: Making Tailwind Yours with tailwind.config.js */}
      <TutorialSection id="customization" title="5. ⚙️ Customization: Making Tailwind *Yours* with `tailwind.config.js`">
        <ContentParagraph text="While Tailwind's defaults are excellent, you'll almost always need to customize them to match your project's unique brand, design system, or specific requirements. This is done through the `tailwind.config.js` file that was generated during installation." />
        <CodeElement language="javascript" code={tailwindConfigExtend} title="Customizing `tailwind.config.js`" />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">`extend` vs. Overwriting:</h3>
        <ContentParagraph text="It's usually best practice to put your customizations inside the `theme.extend` object. This tells Tailwind to *add* your new values alongside its default values. If you define a property directly under `theme` (e.g., `theme: { colors: { ... } }` without `extend`), you will **overwrite all of Tailwind's default colors**, which is rarely what you want." />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Common Customizations:</h3>
        <TutorialList
          type="disc"
          items={[
            "**Colors:** Define your brand colors and name them intuitively.",
            "**Fonts:** Add custom font families that you've imported into your project.",
            "**Spacing:** Add unique spacing values not covered by the default scale.",
            "**Breakpoints:** Adjust the default screen sizes if your design system uses different breakpoints.",
          ]}
        />
        <ContentParagraph text="Customization is where Tailwind truly shines, allowing you to build highly bespoke designs with all the benefits of a utility-first workflow." />
      </TutorialSection>

      <CalloutBox title="🚀 Ready to Build?">
        <ContentParagraph text="You now have a solid understanding of Tailwind CSS's core philosophy, how its design system works, and how to apply responsive and interactive styles. The next step is to put this knowledge into practice and start building real UI components!" />
      </CalloutBox>
    </div>
  );
};

export default TailwindCoreConcepts;