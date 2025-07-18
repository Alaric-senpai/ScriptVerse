import Header from '@/components/Header';
import CodeElement from '@/components/CodeElement';

import TutorialSection from '@/components/TutorialSection';
import InlineCode from '@/components/InlineCode';
import TutorialList from '@/components/TutorialList'; // Corrected spelling from TutorialLIst
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph';

const introCode = `
<button class="my-custom-button">Click Me</button>

/* In your style.css */
.my-custom-button {
  padding: 1rem 2rem;
  background-color: #3b82f6; /* blue-500 */
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-in-out;
}
.my-custom-button:hover {
  background-color: #2563eb; /* blue-600 */
}

<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">Click Me</button>
`.trim();

const basicUtilityExample = `
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-4">
    <div class="shrink-0">
      <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
</div>
`.trim();

const TailwindIntro = () => { // Renamed from TailwindIntroContent to TailwindIntro
  return (
    <div className="w-full h-full p-2 text-white"> {/* This div was originally in the parent TailwindIntro, now it's here */}
      <Header title='Getting Started with Tailwind CSS' /> {/* Header is now directly in this component */}
      <>
        {/* 1. What is Tailwind CSS? */}
        <TutorialSection id="what-is-tailwind" title="1. 🤔 What is Tailwind CSS?">
          <ContentParagraph text="Imagine building a house with pre-made LEGO bricks instead of carving each piece of wood or mixing your own cement. That's essentially what Tailwind CSS is for web design!" />
          <ContentParagraph text="It's a **utility-first CSS framework** that provides thousands of small, single-purpose CSS classes (like " />
          <p className="text-blue-100/80 mb-4">
            <InlineCode>p-4</InlineCode> for padding, <InlineCode>bg-blue-500</InlineCode> for background color, or <InlineCode>flex</InlineCode> for flexbox). Instead of writing custom CSS rules, you apply these classes directly in your HTML markup to style your elements.
          </p>
          <ContentParagraph text="This approach means you spend less time writing custom CSS and more time composing beautiful designs directly in your HTML. Tailwind CSS doesn't offer pre-built components like buttons or cards; instead, it provides the fundamental building blocks (utilities) for you to create your unique designs." />
          {/* Consider adding an image placeholder here, e.g., <img src="/path/to/lego-bricks.png" alt="LEGO bricks illustration" className="my-4 rounded-md shadow-lg" /> */}
        </TutorialSection>

        {/* 2. Why Choose Tailwind? */}
        <TutorialSection id="why-tailwind" title="2. 💡 Why Choose Tailwind?">
          <ContentParagraph text="Tailwind CSS offers several compelling advantages, especially for beginners diving into modern web development:" />
          <TutorialList
            type="disc"
            items={[
              "**Speed & Efficiency:** Build UIs much faster because you're not constantly switching between HTML and CSS files. All your styling is right there where you're building your layout.",
              "**Consistency:** By using a predefined set of utilities (e.g., all your paddings come from Tailwind's scale like `p-1`, `p-2`, `p-4`), your designs naturally become more consistent across your entire project.",
              "**No More Naming Classes:** Forget about spending time coming up with clever (or terrible) class names for every single element. You just use the existing, descriptive utility names.",
              "**Responsive Design Built-in:** Easily make your designs adapt to different screen sizes using intuitive responsive prefixes like <InlineCode>md:text-lg</InlineCode> (text large on medium screens and up) or <InlineCode>lg:flex</InlineCode> (display flex on large screens and up).",
              "**Customization:** While it provides smart defaults, Tailwind is incredibly easy to customize. You can modify its configuration file (<InlineCode>tailwind.config.js</InlineCode>) to match your brand's unique colors, fonts, spacing, and more.",
              "**Small Production Builds:** One of Tailwind's superpowers! It scans your code and *only* includes the CSS utilities you actually use in your final project, resulting in tiny, optimized CSS files for your live website. This is thanks to its 'Just-In-Time' (JIT) mode.",
              "**Great Developer Experience (DX):** With excellent editor autocomplete plugins and immediate visual feedback, Tailwind makes styling feel more like writing HTML and less like debugging CSS.",
            ]}
          />
          <ContentParagraph text="It's a paradigm shift that, once embraced, significantly boosts productivity and design freedom." />
        </TutorialSection>

        {/* 3. Utility-First Explained */}
        <TutorialSection id="utility-first" title="3. 🧱 Utility-First Explained: The Core Idea">
          <ContentParagraph text="The 'utility-first' philosophy is the heart of Tailwind CSS. It's a different way of thinking about styling." />
          <ContentParagraph text="**Traditional Approach:** You create a meaningful class name (e.g., " />
          <p className="text-blue-100/80 mb-4">
            <InlineCode>.card</InlineCode>) and then define all its styles (padding, background, shadow, border-radius) in a separate CSS file.
          </p>
          <CodeElement
            language="css"
            code={`.card {
  padding: 1.5rem; /* p-6 */
  background-color: white; /* bg-white */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); /* shadow-lg */
}
`}
            title="Traditional CSS for a Card Component"
          />
          <ContentParagraph text="**Tailwind's Utility-First Approach:** Instead, you apply small, single-purpose utility classes directly to your HTML elements:" />
          <CodeElement
            language="html"
            code={basicUtilityExample}
            title="Tailwind CSS Utility-First Example"
          />
          <ContentParagraph text="Each class (like " />
          <p className="text-blue-100/80 mb-4">
            <InlineCode>p-6</InlineCode> for padding 1.5rem, <InlineCode>bg-white</InlineCode> for white background, <InlineCode>rounded-xl</InlineCode> for large border radius, <InlineCode>shadow-lg</InlineCode> for a large shadow) does one specific thing. By combining these, you build complex, unique components.
          </p>
          <ContentParagraph text="This might look like a lot of classes at first, but it eliminates the constant back-and-forth between HTML and CSS files and makes styling changes incredibly fast and predictable." />
        </TutorialSection>

        {/* 4. Code Example: Traditional vs. Tailwind */}
        <TutorialSection id="example" title="4. 🚀 Code Example: Traditional vs. Tailwind">
          <ContentParagraph text="Let's look at a simple button and how you'd style it with traditional CSS versus the Tailwind utility-first approach. This example highlights how all the styling is applied directly in the markup with Tailwind." />
          <CodeElement
            language="html"
            code={introCode}
            title="Tailwind vs. Traditional CSS for a Button"
          />
          <ContentParagraph text="As you can see, with Tailwind, all the styling is right there in your HTML. This might look like a lot of classes at first, but it quickly becomes intuitive and incredibly fast once you learn the utility names. It helps you design directly in the browser without writing any custom CSS." />
        </TutorialSection>

        {/* 5. Prerequisites */}
        <TutorialSection id="prerequisites" title="5. ✅ Prerequisites">
          <ContentParagraph text="Before diving deeper into Tailwind CSS, having a basic understanding of the following concepts will make your learning journey smoother:" />
          <TutorialList
            type="disc"
            items={[
              "**HTML:** You should be comfortable with HTML tags and structuring web pages (e.g., `<div>`, `<span>`, `<p>`, `<a>`).",
              "**CSS Fundamentals:** A basic grasp of CSS properties (like `padding`, `margin`, `color`, `font-size`), the box model, and how CSS rules are applied is beneficial. You don't need to be a CSS expert, just understand the basics.",
              "**JavaScript (Optional but Recommended):** If you plan to use Tailwind with modern JavaScript frameworks like React, Vue, or Angular (which is very common), knowing JavaScript fundamentals will be highly beneficial.",
              "**Node.js & npm/Yarn:** Tailwind CSS is typically installed and managed via Node.js package managers (`npm` or `yarn`). Knowing how to use these command-line tools is important for setting up your project.",
            ]}
          />
        </TutorialSection>

        {/* 6. Next Steps */}
        <TutorialSection id="next-steps" title="6. ➡️ Next Steps: Setting Up Tailwind">
          <ContentParagraph text="You've got a solid grasp of what Tailwind CSS is and why it's a fantastic tool for modern web development. The next logical step is to get it up and running in your own project!" />
          <ContentParagraph text="The next section will guide you through the **installation process** for Tailwind CSS, covering how to integrate it into a typical web development setup." />
          <CalloutBox title="📣 Shoutout to Tailwind Labs">
            <ContentParagraph text='Tailwind CSS is developed and maintained by ' />
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Tailwind Labs
            </a>
            , founded by Adam Wathan. Their focus on simplicity, accessibility, and developer speed has revolutionized frontend styling.
          </CalloutBox>
          <ContentParagraph text='Get ready to revolutionize your CSS workflow!' />
        </TutorialSection>
      </>
    </div>
  );
};

export default TailwindIntro;