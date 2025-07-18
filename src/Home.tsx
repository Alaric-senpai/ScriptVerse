import { Link } from 'react-router'; 

const tutorialPoints = [
    {
        name: 'React Hooks (useEffect)',
        path: '/useeffect',
        description: 'Master side effects in React with the `useEffect` hook.',
        icon: '⚛️'
    },

    {
        name: 'TypeScript Fundamentals',
        path: '/typescript-basics',
        description: 'Learn static typing to build robust and scalable applications.',
        icon: 'TS'
    },
    {
      name: 'Get familiar with TailwindCSS',
      path: '/tailwindcss-essentials',
      description: 'Learn the basics of tailwindcss',
      icon: 'CSS'
    }
]

const Home = () => {
  return (
    <>
    <div className="w-full min-h-screen flex items-center flex-col justify-center px-4 py-10 text-white relative overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-20"></div>

      <div className="relative z-10 text-center backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-3xl shadow-2xl animate-fade-in max-w-3xl space-y-6">
        <div className="flex justify-center animate-float">
          <span className="text-6xl">📚</span> {/* Changed icon to a book/learning theme */}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-sky-300 to-indigo-300">
          Your Comprehensive JavaScript & TypeScript Guide!
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          Unlock the full potential of web development with our in-depth tutorials on <span className="text-sky-200 font-semibold">JavaScript</span>, <span className="text-indigo-200 font-semibold">TypeScript</span>, and various modern frameworks. From foundational concepts to advanced patterns, we've got you covered!
        </p>
        {/* Using a regular div/span for the CTA as Button from '@/components/ui/button' might not be designed for Link */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg animate-bounce transition-all duration-300 inline-block cursor-pointer text-lg">
          🚀 Start Your Learning Journey!
        </div>
      </div>

      <div className="relative z-10 my-8 mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {tutorialPoints.map((point, idx) => (
              <Link
                  to={point.path}
                  key={idx}
                  className=" bg-white/15 border-2 border-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg hover:scale-105 hover:border-blue-400 transition-all duration-300 ease-in-out group flex flex-col items-start text-left"
              >
                  <div className="text-4xl mb-3 group-hover:animate-wiggle">{point.icon}</div> {/* Added icon */}
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">{point.name}</h2>
                  <p className="text-white/70 text-sm flex-grow">{point.description}</p>
                  <span className="mt-4 text-sm text-blue-300 group-hover:text-blue-200 group-hover:underline transition-colors">
                      Learn More &rarr;
                  </span>
              </Link>
          ))}
      </div>
    </div>
    
    </>
  );
};

export default Home;