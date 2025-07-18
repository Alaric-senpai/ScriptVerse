import Header from '@/components/Header'; // Assuming Header is used for the main page title
import CodeElement from '@/components/CodeElement';

// Reusable components
import TutorialSection from '@/components/TutorialSection';
import TutorialList from '@/components/TutorialList';
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph'; // Ensure this is imported

// --- Code Snippets for various setups ---
const vanillaSetup = `
# 1. Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# 2. Generate your tailwind.config.js and postcss.config.js files
npx tailwindcss init -p
`.trim();

const vanillaCssImport = `
/* ./src/index.css or ./styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
`.trim();

const tailwindConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes
  content: [
    "./index.html", // For plain HTML projects
    "./src/**/*.{js,jsx,ts,tsx,vue,svelte}", // For framework projects
  ],
  theme: {
    extend: {}, // Extend Tailwind's default theme here
  },
  plugins: [], // Add Tailwind plugins here
}
`.trim();

const buildCommand = `
# For development (watches for changes)
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

# For production (optimizes and minifies)
npx tailwindcss -i ./src/index.css -o ./dist/output.css --minify
`.trim();

const htmlLink = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet"> {/* Link to your compiled CSS */}
</head>
<body>
  <h1 class="text-3xl font-bold underline text-blue-600">
    Hello Tailwind!
  </h1>
</body>
</html>
`.trim();

const viteSetup = `
# 1. Create a new Vite project (e.g., React)
npm create vite@latest my-react-app -- --template react-ts # or react, vue, svelte

# 2. Navigate into your project directory
cd my-react-app

# 3. Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# 4. Generate Tailwind's config files
npx tailwindcss init -p

# 5. Configure your Tailwind template paths in tailwind.config.js
#    (Already covered in 'tailwindConfig' snippet)

# 6. Add Tailwind directives to your main CSS file (e.g., ./src/index.css)
#    (Already covered in 'vanillaCssImport' snippet)

# 7. Start your development server
npm run dev
`.trim();

const nextjsSetup = `
# 1. Create a new Next.js project
npx create-next-app@latest my-next-app --typescript --eslint --app # or --pages

# 2. Navigate into your project directory
cd my-next-app

# 3. Install Tailwind CSS and its peer dependencies
npm install -D tailwindcss postcss autoprefixer

# 4. Generate Tailwind's config files
npx tailwindcss init -p

# 5. Configure your Tailwind template paths in tailwind.config.js
#    Tailwind CLI usually suggests this for Next.js:
#    content: [
#      './pages/**/*.{js,ts,jsx,tsx,mdx}',
#      './components/**/*.{js,ts,jsx,tsx,mdx}',
#      './app/**/*.{js,ts,jsx,tsx,mdx}', // For App Router
#    ],

# 6. Add Tailwind directives to your global CSS file (e.g., ./app/globals.css or ./styles/globals.css)
#    (Already covered in 'vanillaCssImport' snippet)

# 7. Start your development server
npm run dev
`.trim();

const cdnDemo = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind CSS CDN Demo</title>
    <script src="https://cdn.tailwindcss.com"></script> {/* This line is key! */}
  </head>
  <body class="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen flex items-center justify-center">
    <div class="text-center p-8 bg-blue-900/50 rounded-xl shadow-2xl">
      <h1 class="text-5xl font-extrabold text-teal-400 mb-4 animate-bounce">
        Hello Tailwind!
      </h1>
      <p class="text-xl text-blue-200">
        This is a live demo with no build steps!
      </p>
      <button class="mt-8 px-6 py-3 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105">
        Cool Button
      </button>
    </div>
  </body>
</html>
`.trim();

const TailwindInstallation = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Setting Up Tailwind CSS' /> {/* Header is now directly in this component */}
      <>
        {/* 1. Overview */}
        <TutorialSection id="overview" title="1. 🗺️ Installation Overview">
          <ContentParagraph text="Getting Tailwind CSS set up in your project is usually straightforward, but the exact steps can vary slightly depending on your development environment. At its core, installation involves:" />
          <TutorialList
            type="disc"
            items={[
              "**Installing Tailwind CSS:** Using `npm` or `yarn`.",
              "**Configuring Tailwind:** Creating and modifying `tailwind.config.js` to tell Tailwind where your utility classes will be used.",
              "**Including Tailwind's Directives:** Adding `@tailwind` directives to your main CSS file.",
              "**Processing Your CSS:** Using a build tool (like PostCSS, Vite, Next.js's built-in bundler) to compile your Tailwind-infused CSS into a final, optimized stylesheet.",
            ]}
          />
          <ContentParagraph text="We'll cover the most common setups below. Choose the one that matches your project!" />
        </TutorialSection>

        {/* 2. Vanilla HTML/JS Setup */}
        <TutorialSection id="vanilla-setup" title="2. 🔧 Vanilla HTML/JS Setup">
          <ContentParagraph text="This is the most fundamental way to use Tailwind CSS. It's perfect for simple static websites or when you're not using a JavaScript framework." />
          <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Step 1: Install Tailwind CSS</h3>
          <ContentParagraph text="Open your terminal in your project's root directory and run the following command:" />
          <CodeElement language="bash" code={vanillaSetup} title="Install Tailwind CSS & Generate Configs" />
          <ContentParagraph text="The <InlineCode>-D</InlineCode> flag means it's a development dependency. The <InlineCode>npx tailwindcss init -p</InlineCode> command does two important things:" />
          <TutorialList
            type="disc"
            items={[
              "Creates a <InlineCode>tailwind.config.js</InlineCode> file: This is where you'll customize Tailwind.",
              "Creates a <InlineCode>postcss.config.js</InlineCode> file: This enables PostCSS, which Tailwind uses to process your CSS, and automatically includes `autoprefixer` for vendor prefixes.",
            ]}
          />

          <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Step 2: Configure Your Template Paths</h3>
          <ContentParagraph text="Open your newly created <InlineCode>tailwind.config.js</InlineCode> file. You need to tell Tailwind which files to scan for Tailwind classes so it can generate the necessary CSS." />
          <CodeElement language="javascript" code={tailwindConfig} title="tailwind.config.js" />
          <ContentParagraph text="Adjust the <InlineCode>content</InlineCode> array to include paths to all your HTML files, JavaScript files (if you're using utilities in JS/JSX/TSX), Vue files, Svelte files, etc. The example above covers common scenarios." />

          <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Step 3: Add Tailwind Directives to Your CSS</h3>
          <ContentParagraph text="Create a main CSS file (e.g., <InlineCode>./src/input.css</InlineCode> or <InlineCode>./styles/main.css</InlineCode>) and add the Tailwind directives:" />
          <CodeElement language="css" code={vanillaCssImport} title="input.css" />
          <ContentParagraph text="These directives will be replaced by all of Tailwind's generated styles when compiled." />

          <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Step 4: Build Your CSS</h3>
          <ContentParagraph text="Now, use the Tailwind CLI to process your input CSS file and generate your final `output.css`." />
          <CodeElement language="bash" code={buildCommand} title="Compile Tailwind CSS" />
          <ContentParagraph text="You'll typically run the <InlineCode>--watch</InlineCode> command during development to automatically recompile your CSS whenever you make changes. For production, use the <InlineCode>--minify</InlineCode> flag to get the smallest possible file." />

          <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">Step 5: Link Compiled CSS in HTML</h3>
          <ContentParagraph text="Finally, link the generated `output.css` file in your HTML's <InlineCode>&lt;head&gt;</InlineCode> section:" />
          <CodeElement language="html" code={htmlLink} title="index.html" />
          <CalloutBox title="Heads Up! CSS File Size">
            <ContentParagraph text="During development, your compiled `output.css` might be quite large. Don't worry! Tailwind's build process for production (using <InlineCode>--minify</InlineCode>) automatically removes all unused CSS, making your final stylesheet incredibly small. This is a huge performance benefit!" />
          </CalloutBox>
        </TutorialSection>

        {/* 3. Framework Integrations */}
        <TutorialSection id="framework-setup" title="3. 🚀 Framework Integrations (Recommended)">
          <ContentParagraph text="While the vanilla setup works, most modern web applications are built with frameworks like React, Vue, or Next.js. Tailwind CSS integrates seamlessly with these, often simplifying the build process. The core steps (installing Tailwind, configuring `tailwind.config.js`, and adding directives) remain the same, but the project setup command might differ." />
          <ContentParagraph text="**Note:** For these setups, the PostCSS and Autoprefixer dependencies are crucial, as frameworks often use PostCSS internally for CSS processing." />

          {/* React (Vite) */}
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3" id="vite-react">3.1. React (Vite) Setup</h3>
          <ContentParagraph text="Vite is a next-generation frontend tooling. It's fast and easy to set up Tailwind with Vite for React applications." />
          <CodeElement language="bash" code={viteSetup} title="React + Vite + Tailwind Setup" />
          <ContentParagraph text="After these steps, ensure your <InlineCode>tailwind.config.js</InlineCode> is correctly configured to scan your React components (e.g., <InlineCode>./src/**/*.{js,jsx,ts,tsx}</InlineCode>) and that your main CSS file (e.g., <InlineCode>./src/index.css</InlineCode>) contains the Tailwind directives." />

          {/* Next.js */}
          <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3" id="nextjs">3.2. Next.js Setup</h3>
          <ContentParagraph text="Next.js, a popular React framework for production, has excellent built-in support for Tailwind CSS. The official Next.js setup wizard often includes an option to configure Tailwind automatically." />
          <CodeElement language="bash" code={nextjsSetup} title="Next.js + Tailwind Setup" />
          <ContentParagraph text="Next.js will handle the PostCSS processing for you, making the integration very smooth. Just verify your `tailwind.config.js` `content` array covers your `pages`, `components`, and `app` (if using App Router) directories." />

          {/* Omitted CRA, Vue, Svelte setups for conciseness as per previous instructions.
              If you need specific code for these, please let me know. */}
        </TutorialSection>

        {/* 4. CDN Quick Start */}
        <TutorialSection id="cdn-quickstart" title="4. ⚡ CDN Quick Start (For Demos & Prototyping)">
          <ContentParagraph text="If you just want to quickly try out Tailwind CSS without any build process or complex setup, the CDN (Content Delivery Network) is your best friend!" />
          <ContentParagraph text="It's perfect for:" />
          <TutorialList
            type="disc"
            items={[
              "**Quick prototypes or demos**",
              "**Experimenting with Tailwind classes**",
              "**Using in CodePen, JSFiddle, or similar online editors**",
            ]}
          />
          <CalloutBox title="Important: Not for Production!">
            <ContentParagraph text="The CDN version is **large** and **unoptimized**, as it includes *all* of Tailwind's possible utility classes. It's meant for development convenience, not for a live production website where performance matters. For production, always use the build-tool method." />
          </CalloutBox>
          <CodeElement language="html" code={cdnDemo} title="Using Tailwind via CDN in HTML" />
          <ContentParagraph text="Just include the script tag in your HTML's <InlineCode>&lt;head&gt;</InlineCode>, and you can immediately start using Tailwind classes in your <InlineCode>&lt;body&gt;</InlineCode>." />
        </TutorialSection>

        {/* Next Steps / Conclusion */}
        <CalloutBox title="🚀 Ready to Customize?">
          <ContentParagraph text="With Tailwind CSS installed, your next step is often to **customize its default configuration** (<InlineCode>tailwind.config.js</InlineCode>) to match your project's design system, brand colors, fonts, and more. This is where Tailwind truly becomes powerful for consistent, custom designs!" />
        </CalloutBox>
      </>
    </div>
  );
};

export default TailwindInstallation;