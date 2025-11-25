import { useEffect, useRef, useState } from "react";
import { Button } from "./components/ui/button";
import { cn } from "./lib/utils";

const alphabets = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

const Wordle = () => {
  const [word, setWord] = useState("dummy"); // target word (change dynamically in future)
//   const [quesses, setQuesses] = useState<string[]>(["demon", "daily", "delay"]); // previous guesses
  const [letters, setLetters] = useState<string[]>([]); // split letters from word
  const [guesses, setGuesses] = useState<string[][]>(
  Array.from({ length: 6 }, () => Array(5).fill(""))
);


  const inputRef = useRef<HTMLInputElement>(null);
  const [currentCell, setCurrentCell] = useState<[number, number]>([0, 0]); // tracks the active cell (row, col)

  useEffect(() => {
    setLetters(word.split(""));
  }, [word]);

  
  useEffect(() => {
  inputRef.current?.focus();
}, [currentCell]);


const handleButtonPress = (lt: string) => {
  const [row, col] = currentCell;
  if (row >= 6 || col >= 5) return;

  const updatedGuesses = [...guesses];
  updatedGuesses[row][col] = lt;
  setGuesses(updatedGuesses);

  // Move to next cell
  if (col < 4) {
    setCurrentCell([row, col + 1]);
  }
};

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">
        <h1 className="text-5xl font-black italic text-gray-800">Wordle Game</h1>

        {/* Wordle Grid */}
        <div className="w-full max-w-md rounded-xl shadow-xl bg-white p-6">
          <div className="grid grid-rows-6 gap-2">
            {[...Array(6)].map((_, row) => (
              <div key={row} className="grid grid-cols-5 gap-2">
                {[...Array(5)].map((_, col) => (
                    <input
                    key={`${row}-${col}`}
                    ref={currentCell[0] === row && currentCell[1] === col ? inputRef : null}
                    maxLength={1}
                    type="text"
                    className={cn(
                        "w-full aspect-square text-center text-2xl font-bold border border-gray-300 rounded-md",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500",
                        "text-gray-700"
                    )}
                    value={guesses[row][col]}
                    readOnly
                    />

                ))}
              </div>
            ))}
          </div>
        </div>

        {/* On-Screen Keyboard */}
        <div className="grid grid-cols-9 gap-2 w-full max-w-3xl px-4">
          {alphabets.map((letter, idx) => (
            <Button
              key={idx}
              variant="outline"
              className="text-lg font-semibold py-5 rounded-lg border-gray-400 hover:bg-gray-100"
              onClick={() => handleButtonPress(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wordle;
