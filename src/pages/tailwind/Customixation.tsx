import Header from '@/components/Header';
import CodeElement from '@/components/CodeElement';
import TutorialSection from '@/components/TutorialSection';
import TutorialList from '@/components/TutorialList';
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph';

// --- Code Snippets for this section ---

const themeConfigExtend = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
  ],
  theme: {
    // This 'extend' object ADDS to Tailwind's default theme values.
    extend: {
      colors: {
        'primary-brand': '#FF5733', // Your main brand color
        'secondary-cta': '#33C7FF', // A bright call-to-action color
        'dark-background': '#1A202C', // Custom dark shade for backgrounds
      },
      fontFamily: {
        'heading': ['"Roboto Condensed"', 'sans-serif'], // Custom font for headings
        'body': ['"Open Sans"', 'sans-serif'],      // Custom font for body text
      },
      spacing: {
        '13': '3.25rem', // Adds a custom spacing value
        '15': '3.75rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem', // Adds a larger border-radius option
        '5xl': '2.5rem',
      },
      // You can extend other properties too, like:
      // boxShadow, opacity, transitionProperty, animation, etc.
    },
    // If you define a property DIRECTLY here (outside 'extend'),
    // it will OVERWRITE Tailwind's defaults for that property.
    // Example: This would remove ALL default breakpoints except 'tablet'
    // screens: {
    //   'tablet': '640px',
    // },
  },
  plugins: [],
}
`.trim();

const customUtilitiesExample = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... other config
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
          '&::-webkit-scrollbar': {
            'display': 'none', /* Chrome, Safari, Opera */
          },
        },
        '.text-gradient-blue-purple': {
          'background-image': 'linear-gradient(to right, #6366F1, #8B5CF6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
`.trim();

const applyExample = `
/* In your main CSS file (e.g., styles/app.css) */

@tailwind base;
@tailwind components;
@tailwind utilities;

.btn-custom-primary {
  @apply bg-primary-brand text-white font-bold py-2 px-4 rounded-lg
         hover:bg-primary-brand/90 focus:outline-none focus:ring-2
         focus:ring-primary-brand/50 focus:ring-opacity-75 transition duration-300;
}

.card-feature {
  @apply bg-dark-background p-6 rounded-4xl shadow-lg;
  /* You can mix custom CSS with @apply utilities */
  border: 1px solid rgba(255, 255, 255, 0.1);
}
`.trim();

const TailwindCustomization = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Customizing Tailwind CSS: Beyond the Defaults' />

      <TutorialSection id="intro" title="Introduction: Making Tailwind Truly Yours 🎨">
        <ContentParagraph text="Tailwind CSS comes with a fantastic default design system, but rarely will it perfectly match your project's unique brand or design language. This is where **customization** comes in. Tailwind is designed from the ground up to be fully configurable, allowing you to extend its default theme, add new utilities, and even integrate it with existing CSS." />
        <ContentParagraph text="The `tailwind.config.js` file is your control panel for this customization. Let's explore how to make Tailwind work precisely for your needs." />
      </TutorialSection>

      ---

      <TutorialSection id="theme-extend" title="1. Extending the Default Theme: `theme.extend` vs. Overwrite 🤔">
        <ContentParagraph text="The `theme` object in `tailwind.config.js` is where you define and extend Tailwind's default design tokens (colors, spacing, fonts, breakpoints, etc.)." />
        <ContentParagraph text="It's crucial to understand the difference between defining properties directly under `theme` and defining them within `theme.extend`:" />
        <TutorialList
          type="disc"
          items={[
            "**`theme.extend` (Recommended):** This is where you should add your custom values. When you place a property (e.g., `colors`, `fontFamily`, `spacing`) inside `extend`, your custom values are **added to** Tailwind's default values for that property. This means you keep all of Tailwind's defaults *plus* your new ones.",
            "**Directly under `theme` (Overwrite):** If you define a property directly under `theme` (e.g., `theme: { colors: { ... } }` without `extend`), you will **completely overwrite** Tailwind's default values for that property. This is rarely what you want, as it removes all the built-in utilities for that type.",
          ]}
        />
        <CodeElement language="javascript" code={themeConfigExtend} title="Customizing `tailwind.config.js` with `extend`" />
        <ContentParagraph text="Always prefer `extend` unless you have a very specific reason to remove all of Tailwind's default values for a certain property." />
      </TutorialSection>

      ---

      <TutorialSection id="custom-colors" title="2. Customizing Colors 🌈">
        <ContentParagraph text="Tailwind's default color palette is extensive, but you'll almost always need to define your brand's specific colors. You can add new colors and even define custom shades within `theme.extend.colors`." />
        <ContentParagraph text="Once defined, these custom colors become available as utility classes, like `bg-primary-brand`, `text-secondary-cta`, or `border-dark-background`." />
        
      </TutorialSection>

      ---

      <TutorialSection id="custom-fonts" title="3. Customizing Fonts and Typography ✒️">
        <ContentParagraph text="To use custom fonts that you've imported into your project (e.g., via Google Fonts or self-hosting), you'll define them in `theme.extend.fontFamily`. Remember to wrap multi-word font names in quotes." />
        <ContentParagraph text="After defining them, you can use utilities like `font-heading` or `font-body` to apply them to your text elements." />
        <ContentParagraph text="You can also extend other typography-related properties like `fontSize`, `lineHeight`, and `letterSpacing` if your design system requires specific values outside of Tailwind's defaults." />
        
      </TutorialSection>

      ---

      <TutorialSection id="spacing-breakpoints" title="4. Customizing Spacing, Breakpoints, and Other Scales 📏">
        <ContentParagraph text="Tailwind's numerical spacing scale (`p-4`, `m-8`) is based on `rem` units by default (where `1` unit usually equals `0.25rem`). You can add custom spacing values (e.g., `spacing: { '13': '3.25rem' }`) to fit your design system's specific needs." />
        <ContentParagraph text="Similarly, you can adjust the default **breakpoints** (`sm`, `md`, `lg`, `xl`, `2xl`) if your responsive design calls for different screen sizes. This is done within `theme.extend.screens`." />
        <ContentParagraph text="Many other scales are customizable in `theme.extend`, including `borderRadius`, `boxShadow`, `minWidth`, `maxWidth`, `minHeight`, `maxHeight`, `zIndex`, `opacity`, `transitionProperty`, and more. Explore the Tailwind CSS documentation for a full list!" />
      </TutorialSection>

      ---

      <TutorialSection id="custom-utilities" title="5. Adding Custom Utilities with Plugins or `@apply` 🔧">
        <ContentParagraph text="Sometimes, you might need a very specific CSS rule that doesn't have a direct Tailwind utility, or you want to combine several utilities into a semantic class (like a custom button style). Tailwind offers a few ways to do this:" />

        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Adding Utilities via a Tailwind Plugin:</h3>
        <ContentParagraph text="For entirely new utility classes that don't map directly to an existing Tailwind property, you can write a simple plugin directly in your `tailwind.config.js` using the `addUtilities` function. This is great for highly specific, non-design-system-related utilities." />
        <CodeElement language="javascript" code={customUtilitiesExample} title="Adding Custom Utilities via `tailwind.config.js` Plugin" />
        <ContentParagraph text="Once added, you can use these as `no-scrollbar` or `text-gradient-blue-purple` in your HTML." />

        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Creating Components with `@apply`:</h3>
        <ContentParagraph text="The `@apply` directive allows you to extract common utility patterns into a single custom class within your CSS. This is useful when you want to create highly reusable, semantic component classes (like a custom button or card) while still leveraging Tailwind's underlying utilities. You'd typically do this in your main CSS file (e.g., `src/input.css` or `styles/app.css`)." />
        <CodeElement language="css" code={applyExample} title="Creating Custom Components with `@apply`" />
        <ContentParagraph text="Now, in your HTML, you can use `<button class='btn-custom-primary'>` or `<div class='card-feature'>`, keeping your HTML cleaner for complex, recurring components. Tailwind will replace `@apply` with the actual utility classes during compilation." />
      </TutorialSection>

      ---

      <CalloutBox title="🌟 The Power of Tailored Design">
        <ContentParagraph text="Customization is where Tailwind CSS truly unleashes its full potential. By defining your own design system within `tailwind.config.js` and intelligently using `@apply` for component abstraction, you can build incredibly consistent, highly optimized, and uniquely branded interfaces, all while retaining the speed and maintainability benefits of a utility-first workflow." />
        
      </CalloutBox>
    </div>
  );
};

export default TailwindCustomization;