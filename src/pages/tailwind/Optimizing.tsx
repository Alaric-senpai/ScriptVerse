import Header from '@/components/Header';
import CodeElement from '@/components/CodeElement';
import TutorialSection from '@/components/TutorialSection';
import TutorialList from '@/components/TutorialList';
import CalloutBox from '@/components/CalloutBox';
import ContentParagraph from '@/components/ContentParagraph';

// --- Code Snippets for this section ---

const purgeConfig = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/index.html', // Example: if you have a main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`.trim();

const postcssConfig = `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};
`.trim();

const cliBuildCommand = `
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
`.trim();

const packageJsonBuildScript = `
{
  "name": "my-tailwind-project",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev", // Or 'vite'/'react-scripts start'
    "build:tailwind": "npx tailwindcss -i ./styles/tailwind.css -o ./dist/tailwind.min.css --minify",
    "build:app": "next build", // Or 'vite build'/'react-scripts build'
    "build": "npm run build:tailwind && npm run build:app", // Combined build
    "start": "next start", // Or 'vite preview'/'react-scripts start'
    "lint": "next lint"
  }
}
`.trim();

const TailwindOptimization = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Optimizing Tailwind CSS for Production' />

      <TutorialSection id="intro" title="Introduction: Why Optimize? 🚀">
        <ContentParagraph text="Tailwind CSS's utility-first approach means you write a lot of classes in your HTML. While this is great for development speed, it also means your development CSS file contains *every single* utility class Tailwind offers. This can be several megabytes in size, which is far too large for a production website." />
        <ContentParagraph text="Fortunately, Tailwind CSS is built with production optimization in mind. It uses a process called **purging (or tree-shaking)** to remove all unused CSS, leaving only the styles your project actually uses. This results in incredibly small CSS bundles, often just a few kilobytes!" />
      </TutorialSection>

      ---

      <TutorialSection id="jit" title="1. Just-In-Time (JIT) Mode: The Modern Default ✨">
        <ContentParagraph text="Previously, Tailwind used a tool called PurgeCSS. However, with Tailwind CSS v2.1 and later, the **Just-In-Time (JIT) mode** (now the default behavior in Tailwind CSS v3.0+) fundamentally changed how Tailwind compiles CSS. Instead of generating all possible classes and then removing unused ones, JIT mode (via the PostCSS JIT engine) **generates CSS *on demand*** as it finds utility classes in your files." />
        <ContentParagraph text="This means two things:" />
        <TutorialList
          type='disc'
          items={[
            "**Faster Compilation:** Your development build times are much quicker, as Tailwind only generates the CSS you're actively using.",
            "**Automatic Optimization:** The resulting CSS file is already optimized and tiny by default, even in development, as it only contains the necessary utilities. There's no separate 'purging' step needed for production beyond configuring your `content` paths correctly.",
          ]}
        />
        <ContentParagraph text="Ensure you're using Tailwind CSS v3.0+ for the best experience, as JIT mode is the default and optimized for speed and production-ready output." />
      </TutorialSection>

      ---

      <TutorialSection id="content-config" title="2. Configuring `content` in `tailwind.config.js` 📁">
        <ContentParagraph text="Even with JIT mode, Tailwind needs to know *where* to look for your utility classes. This is configured in the `content` array within your `tailwind.config.js` file. This tells Tailwind which files it should scan to find used classes." />
        <ContentParagraph text="It's crucial to correctly specify these paths. If you miss a file type or directory, Tailwind won't detect the classes within them, and those styles won't be included in your final CSS." />
        <CodeElement language="javascript" code={purgeConfig} title="Example `tailwind.config.js` with content paths" />
        <ContentParagraph text="Make sure to include paths to all files where you use Tailwind classes, such as JavaScript/TypeScript files (e.g., `.js`, `.ts`, `.jsx`, `.tsx` for React/Vue components), HTML files, and any other template files." />
      </TutorialSection>

      ---

      <TutorialSection id="postcss-autoprefixer" title="3. PostCSS & Autoprefixer ➕">
        <ContentParagraph text="Tailwind CSS is a PostCSS plugin. Alongside Tailwind, you'll typically use **Autoprefixer**, another PostCSS plugin, to automatically add vendor prefixes (like `-webkit-`, `-moz-`) to your CSS properties. This ensures your styles work consistently across different browsers without you having to manually write them." />
        <ContentParagraph text="Your `postcss.config.js` file should look something like this:" />
        <CodeElement language="javascript" code={postcssConfig} title="Example `postcss.config.js`" />
        <ContentParagraph text="The `cssnano` plugin (included conditionally here) is another PostCSS plugin that minifies your CSS, removing whitespace and optimizing declarations. It's often only enabled in `production` environments to speed up development builds." />
      </TutorialSection>

      ---

      <TutorialSection id="build-process" title="4. Integrating into Your Build Process 🛠️">
        <ContentParagraph text="To generate your optimized production CSS, you'll run the Tailwind CSS CLI (Command Line Interface) as part of your project's build process. This is typically done via scripts in your `package.json` file." />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">CLI Command for Production:</h3>
        <ContentParagraph text="You'll use the `-i` flag for your input CSS (where you import Tailwind's base, components, and utilities) and the `-o` flag for your output CSS file. The `--minify` flag tells Tailwind to minify the output CSS." />
        <CodeElement language="bash" code={cliBuildCommand} title="Tailwind CSS CLI Build Command" />
        <h3 className="text-xl font-semibold text-blue-200 mt-6 mb-3">`package.json` Scripts:</h3>
        <ContentParagraph text="Integrate this into your `package.json` build scripts so that your CSS is generated and optimized when you deploy your application." />
        <CodeElement language="json" code={packageJsonBuildScript} title="Example `package.json` Build Scripts" />
        <ContentParagraph text="When you run `npm run build` (or `yarn build`), it will first generate the optimized Tailwind CSS file and then build your main application." />
      </TutorialSection>

      ---

      <CalloutBox title="🏁 The Result: Tiny CSS Files!">
        <ContentParagraph text="By correctly configuring your `content` paths and integrating Tailwind into your build process, you'll end up with extremely small CSS bundles for production. This significantly improves page load times and overall website performance, providing a better experience for your users. Tailwind CSS is designed for this efficiency from the ground up!" />
        
      </CalloutBox>
    </div>
  );
};

export default TailwindOptimization;