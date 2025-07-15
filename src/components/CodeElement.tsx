import { Card, CardHeader, CardContent } from "./ui/card";
import { Highlight, themes, type Language } from "prism-react-renderer";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

type CodeElementProps = {
  code: string;
  language?: Language;
  title?: string; // Added a title prop for better context
};

const CodeElement = ({ code, language = "tsx", title }: CodeElementProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy!", err);
      // Optionally, provide user feedback about the copy failure
    }
  };

  return (
    <Card className="p-0 bg-blue-950/10 hover:shadow-md duration-300 cursor-pointer hover:border-pink-500/30 hover:shadow-pink-400/20 border-blue-950/20 border-2 w-full font-mono text-sm text-blue-100 shadow-md overflow-hidden">
      <CardHeader className="flex items-center justify-between min-h-12 h-max p-4 pb-3 bg-blue-950/30 border-b border-blue-950/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-md" />
          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-md" />
          <div className="w-3 h-3 rounded-full bg-green-400 shadow-md" />
          {title && <span className="ml-3 text-blue-100/80">{title}</span>}
        </div>
        <div className="text-xs uppercase tracking-wider text-blue-100/70">
          {language}
        </div>
        <button
          onClick={handleCopy}
          className="text-blue-100 hover:text-emerald-400 transition-colors duration-200 p-1 rounded"
          title="Copy code to clipboard"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </CardHeader>

      <CardContent className="p-4 overflow-x-auto text-sm">
        <Highlight theme={themes.shadesOfPurple} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style} className={`${className} !bg-transparent`}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell text-blue-300/50 pr-4 select-none text-right">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CardContent>
    </Card>
  );
};

export default CodeElement;