import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="p-4 border-b text-center z-50">
        20% off for the next 3 days
      </div>
      <div>{children}</div>
    </div>
  );
}
