// pages/Useeffect.jsx
import CodeElement from "../components/CodeElement"; // Corrected path
import Header from '../components/Header'; // Corrected path
import ContentGrid from '../components/ContentGrid'; // Corrected path
import { useEffectNavLinks } from '@/lib/constants'; // Import navLinks and type

// --- Code Snippets (kept here or move to a separate constants/data file if very large) ---
const basicCssCode = `:root {
  --radius: 0.65rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.141 0.005 285.823);
  /* ... more CSS variables ... */
}

.dark {
  --background: oklch(0.141 0.005 285.823);
  --foreground: oklch(0.985 0 0);
  /* ... more dark mode CSS variables ... */
}`;

const useEffectBasicCode = `import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Runs on every render
  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`;

const useEffectDependencyArrayCode = `import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function: runs when component unmounts or dependencies change
    return () => clearInterval(interval);
  }, []); // Empty dependency array: runs once on mount, cleans up on unmount

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;`;

const useEffectCleanupCode = `import React, { useEffect, useState } => {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    // Simulate subscribing to a chat API for user status
    console.log(\`Subscribing to user \${userId} status...\`);
    const subscribe = () => setIsOnline(true);
    const unsubscribe = () => setIsOnline(false);

    // Assume some external API calls
    subscribe(); 

    // Cleanup: unsubscribe when component unmounts or userId changes
    return () => {
      console.log(\`Unsubscribing from user \${userId} status...\`);
      unsubscribe();
    };
  }, [userId]); // Runs when userId changes

  return (
    <div>
      <p>User {userId} is {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}

export default UserStatus;`;
// --- End of Code Snippets ---

// UseEffectContent component (moved inside Useeffect.jsx or its own file)
// This renders the specific content for the useEffect tutorial
const UseEffectContent = () => {
  return (
    <> {/* Use a fragment to avoid an unnecessary div */}
      <section id="introduction">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">1. Introduction to `useEffect`</h2>
        <p className="text-blue-100/80 mb-4">
          The **`useEffect`** hook in React allows you to perform **side effects** in functional components. Side effects are operations that happen outside the normal flow of the React component's rendering, such as data fetching, subscriptions, or manually changing the DOM.
        </p>
        <p className="text-blue-100/80 mb-4">
          Think of it as React's way of handling "after-render" logic. Whenever your component renders (or re-renders), `useEffect` runs its callback function, letting you interact with the outside world.
        </p>
        <p className="text-blue-100/80 mt-4">
          While the above CSS code isn't a direct `useEffect` example, it illustrates how you might define global styles that your React components would then utilize, often needing `useEffect` for DOM interactions if you were to dynamically change them.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="basic-usage">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">2. Basic Usage: Running on Every Render</h2>
        <p className="text-blue-100/80 mb-4">
          When you provide `useEffect` with only a function (its first argument), it will run that function **after every render** of your component. This is useful for effects that need to constantly sync with the component's state or props.
        </p>
        <p className="text-blue-100/80 mb-4">
          A common example is updating the document title based on state.
        </p>
        <CodeElement language="jsx" code={useEffectBasicCode} title="useEffect Basic Example (No Dependency Array)" />
        <p className="text-blue-100/80 mt-4">
          In this example, every time `count` changes (and thus the component re-renders), the `useEffect` hook updates the browser tab's title.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="dependency-array">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">3. Controlling Effects with the Dependency Array</h2>
        <p className="text-blue-100/80 mb-4">
          The second argument to `useEffect` is an optional **dependency array**. This array tells React when to re-run the effect.
        </p>
        <ul className="list-disc list-inside text-blue-100/80 mb-4">
          <li>
            **Empty Array (`[]`):** The effect runs only **once after the initial render** and cleans up when the component unmounts. This is perfect for setting up subscriptions or fetching data once.
          </li>
          <li>
            **Array with values (`[prop1, state2]`):** The effect runs on the initial render and then **only when any of the values in the dependency array change**.
          </li>
          <li>
            **No Array (as seen above):** The effect runs **after every render**.
          </li>
        </ul>
        <CodeElement language="jsx" code={useEffectDependencyArrayCode} title="useEffect with Empty Dependency Array" />
        <p className="text-blue-100/80 mt-4">
          Here, the `setInterval` is set up only once when the `Timer` component mounts, and cleared only when it unmounts, thanks to the `[]` dependency array.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="cleanup-function">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">4. Cleaning Up Effects</h2>
        <p className="text-blue-100/80 mb-4">
          Many side effects require a **cleanup** step to prevent memory leaks or unwanted behavior. For example, clearing timers, cancelling network requests, or unsubscribing from event listeners.
        </p>
        <p className="text-blue-100/80 mb-4">
          If your `useEffect` callback function returns another function, that returned function will be executed by React when the component unmounts, or before the effect re-runs due to a change in its dependencies.
        </p>
        <CodeElement language="jsx" code={useEffectCleanupCode} title="useEffect with Cleanup Function" />
        <p className="text-blue-100/80 mt-4">
          This `UserStatus` component demonstrates subscribing and unsubscribing. The cleanup function ensures that when `userId` changes or the component unmounts, the previous subscription is properly torn down.
        </p>
      </section>
    </>
  );
};


const Useeffect = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Understanding the useEffect Hook in React' />
      <ContentGrid
        tutorialContent={<UseEffectContent />}
        navigationLinks={useEffectNavLinks} // Use the imported links
        navigationTitle='UseEffect Tutorial Contents' // Corrected title casing
      />
    </div>
  );
};

export default Useeffect;