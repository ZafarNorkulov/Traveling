import React from "react";

const EvolutionCard = ({ children }: { children: any }) => {
  return (
    <strong className="text-xs font-medium text-[#121] py-2 px-2 border border-[#8dd3bb] rounded-[4px]">
      {children}
    </strong>
  );
};

export default EvolutionCard;
