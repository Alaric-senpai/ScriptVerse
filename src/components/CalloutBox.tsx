import type React from "react";

type CalloutProps = {
    title:string;
    children: React.ReactNode
}

const CalloutBox = ({ title, children }:CalloutProps) => {
  return (
    <div className="bg-gray-900 p-4 rounded-md mt-6 border border-gray-700">
      <h4 className="text-lg font-semibold text-teal-300 mb-2">{title}</h4>
      {children}
    </div>
  );
};

export default CalloutBox;