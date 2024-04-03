import React from "react";

const Heading = ({
  title,
  rightContent,
}: {
  title: string;
  rightContent?: React.ReactNode | null;
}) => {
  return (
    <div className={`w-full flex ${rightContent ? 'justify-between':'justify-start'}  items-center px-16 py-5 pt-12`}>
      <h3 className="leading-6 font-bold text-[32px]">{title}</h3>
      {rightContent}
    </div>
  );
};

export default Heading;
