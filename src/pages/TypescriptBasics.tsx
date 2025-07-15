import CodeElement from '../components/CodeElement';
import Header from '../components/Header';
import ContentGrid from '../components/ContentGrid';
import { type NavLinkItem } from '@/lib/constants'; 
import Seperator from '@/components/Seperator';

export const typescriptNavLinks: NavLinkItem[] = [
  { id: "intro", label: "🚀 Introduction to TypeScript" },
  { id: "basic-types", label: "💡 Basic Types" },
  { id: "interfaces", label: "🤝 Interfaces" },
  { id: "functions", label: "⚙️ Functions" },
  { id: "compilation", label: "📦 Compilation & Setup" },
];


const introCode = `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

// TypeScript
function greetTS(name: string): string {
  return "Hello, " + name;
}

// Benefits:
// - Catches errors early (e.g., greetTS(123) would be an error)
// - Provides better tooling and autocompletion
// - Improves code readability and maintainability
`;

const basicTypesCode = `// Explicit Type Declaration
let myName: string = "Alice";
let age: number = 30;
let isStudent: boolean = false;

// Type Inference (TypeScript guesses the type)
let greeting = "Hello World"; // TypeScript infers 'greeting' is a string
let count = 5;               // TypeScript infers 'count' is a number

// Array Types
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Any (use sparingly - it bypasses type checking)
let data: any = "can be anything";
data = 123;

// Union Types (can be one of several types)
let id: string | number = "abc-123";
id = 456;

// Tuple (fixed number of elements, each with a specific type)
let user: [string, number] = ["John Doe", 25];

// Enum (for a set of named constants)
enum Status {
  Pending,
  Approved,
  Rejected
}
let currentStatus: Status = Status.Approved; // 1
console.log(Status[0]); // "Pending"

// Void (for functions that don't return anything)
function logMessage(message: string): void {
  console.log(message);
}

// Never (for functions that never return)
function error(message: string): never {
  throw new Error(message);
}
`;

const interfacesCode = `// Defining an interface
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
  age: number;
  // A method signature
  greet(): void;
}

// Using the interface
const newUser: User = {
  id: 1,
  name: "Jane Doe",
  age: 28,
  greet() {
    console.log(\`Hello, my name is \${this.name}\`);
  }
};

newUser.greet(); // Output: Hello, my name is Jane Doe

// Interface for function types
interface SumFunction {
  (a: number, b: number): number;
}

const add: SumFunction = (x, y) => x + y;
console.log(add(5, 3)); // Output: 8

// Extending Interfaces
interface AdminUser extends User {
  role: string;
  permissions: string[];
}

const admin: AdminUser = {
  id: 2,
  name: "Admin Alpha",
  age: 40,
  role: "super-admin",
  permissions: ["read", "write", "delete"],
  greet() {
    console.log(\`Hello, I am \${this.name}, an \${this.role}\`);
  }
};
`;

const functionsCode = `// Function with type annotations for parameters and return value
function addNumbers(a: number, b: number): number {
  return a + b;
}

console.log(addNumbers(10, 5)); // Output: 15

// Optional Parameters (using ?)
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  }
  return firstName;
}

console.log(buildName("Bob")); // Output: Bob
console.log(buildName("Bob", "Smith")); // Output: Bob Smith

// Default Parameters
function createCar(make: string, year: number = 2024): string {
  return \`\${make} (\${year})\`;
}

console.log(createCar("Toyota")); // Output: Toyota (2024)
console.log(createCar("Honda", 2023)); // Output: Honda (2023)

// Rest Parameters (array of numbers)
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

// Arrow Functions with types
const multiply = (x: number, y: number): number => x * y;
console.log(multiply(4, 6)); // Output: 24
`;

const compilationCode = `// 1. Install TypeScript globally (if not already)
// npm install -g typescript

// 2. Create a TypeScript file (e.g., app.ts)
// console.log("Hello from TypeScript!");

// 3. Compile your TypeScript file to JavaScript
// tsc app.ts

// This will create 'app.js':
// // app.js (output)
// console.log("Hello from TypeScript!");

// 4. Initialize a TypeScript project (creates tsconfig.json)
// tsc --init

// 5. Compile all TypeScript files in the project
// tsc
`;

// --- TypeScript Basics Content Component ---
const TypescriptBasicsContent = () => {
  return (
    <>
      <section id="intro">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">1. Introduction to TypeScript</h2>
        <p className="text-blue-100/80 mb-4">
          **TypeScript** is an open-source language developed by Microsoft. It's a **superset of JavaScript**, meaning any valid JavaScript code is also valid TypeScript code. What makes TypeScript powerful is that it adds **optional static typing** to JavaScript.
        </p>
        <p className="text-blue-100/80 mb-4">
          This static typing helps you catch common errors during development (before runtime!), provides better tooling support (like intelligent autocompletion and refactoring), and makes your code more readable and maintainable, especially in larger projects.
        </p>
        <CodeElement language="typescript" code={introCode} title="JS vs. TS: A First Look" />
        <p className="text-blue-100/80 mt-4">
          Notice how TypeScript allows us to explicitly define the `name` parameter as a `string` and the function's return type as `string`. This clarity is one of its core strengths.
        </p>
      </section>

        <Seperator />

      <section id="basic-types">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">2. Basic Types in TypeScript</h2>
        <p className="text-blue-100/80 mb-4">
          TypeScript introduces several basic types that you can use to annotate your variables, function parameters, and return values. Understanding these fundamental types is crucial for writing type-safe code.
        </p>
        <CodeElement language="typescript" code={basicTypesCode} title="Common TypeScript Basic Types" />
        <p className="text-blue-100/80 mt-4">
          While TypeScript can often infer types (e.g., `let greeting = "Hello"`), explicitly declaring types (`let myName: string`) adds clarity and helps prevent mistakes, especially when the initial value doesn't fully indicate the future intended usage.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="interfaces">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">3. Interfaces: Defining Object Shapes</h2>
        <p className="text-blue-100/80 mb-4">
          **Interfaces** are a core concept in TypeScript for defining the "shape" of an object. They specify the names and types of properties that an object must have. Interfaces are purely a compile-time concept and are removed from the JavaScript output.
        </p>
        <CodeElement language="typescript" code={interfacesCode} title="Using Interfaces for Object and Function Types" />
        <p className="text-blue-100/80 mt-4">
          Interfaces are incredibly powerful for ensuring consistency across your codebase, especially when dealing with complex data structures or API responses. They also make it easier to extend type definitions.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="functions">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">4. Functions with TypeScript</h2>
        <p className="text-blue-100/80 mb-4">
          TypeScript allows you to add type annotations to function parameters and their return values, ensuring that functions are called with the correct arguments and produce expected output. This enhances readability and prevents common errors.
        </p>
        <CodeElement language="typescript" code={functionsCode} title="Type-Safe Functions in TypeScript" />
        <p className="text-blue-100/80 mt-4">
          Type annotations in functions make your code self-documenting and provide immediate feedback if you try to use them incorrectly.
        </p>
      </section>

      <hr className="border-t border-blue-900/50 my-8" />

      <section id="compilation">
        <h2 className="text-2xl font-semibold text-blue-300 mb-2">5. Compilation and Setup</h2>
        <p className="text-blue-100/80 mb-4">
          Since browsers don't directly understand TypeScript, you need a **compiler** to transform your `.ts` files into standard `.js` files. The TypeScript compiler (`tsc`) handles this process.
        </p>
        <CodeElement language="bash" code={compilationCode} title="Compiling TypeScript to JavaScript" />
        <p className="text-blue-100/80 mt-4">
          For larger projects, you'll typically use `tsc --init` to create a `tsconfig.json` file, which allows you to configure compiler options (like target JavaScript version, module system, etc.) for your entire project. Build tools like Webpack or Vite often integrate `tsc` seamlessly.
        </p>
      </section>
    </>
  );
};

// Main component for the TypeScript Basics page
const TypescriptBasics = () => {
  return (
    <div className="w-full h-full p-2 text-white">
      <Header title='Mastering TypeScript Basics' />
      <ContentGrid
        tutorialContent={<TypescriptBasicsContent />}
        navigationLinks={typescriptNavLinks}
        navigationTitle='TypeScript Tutorial Contents'
      />
    </div>
  );
};

export default TypescriptBasics;