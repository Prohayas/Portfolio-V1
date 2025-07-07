import React from "react";

type BadgeProps = {
  text: string;
};

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <div className="px-3.5 py-1.5 text-xs font-medium text-text-white bg-text-hover rounded-full mt-3">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Badge;
