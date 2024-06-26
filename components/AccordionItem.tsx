"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

type AccordionItemProps = {
  title: string;
  content: React.ReactNode;
};

function AccordionItem({ title, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="overflow-hidden mt-1">
      <button
        className="flex pl-2 items-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hover:text-blue-500 text-lg">{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-8 w-8 ml-5 hover:text-blue-500" />
        ) : (
          <ChevronDownIcon className="h-8 w-8 ml-5 hover:text-blue-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pb-3 text-white text-sm">{content}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
