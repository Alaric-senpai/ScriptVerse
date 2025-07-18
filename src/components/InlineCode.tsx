import type { PropsWithChildren } from "react";



const InlineCode = ({ children }:PropsWithChildren) => {
  return (
    <code className="bg-gray-800 text-blue-300 px-1 rounded text-sm">
      {children}
    </code>
  );
};

export default InlineCode;