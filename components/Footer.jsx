import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="pt-[50px] py-10 xl:py-15 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <h3>From NTC with love © {new Date().getFullYear()}</h3>
      </div>
      <div className="flex justify-center">
        <h3>This UI made by</h3>

        <div className="flex space-x-4">
          <SiNextdotjs className="mt-2 ml-2 cursor-pointer" />
          <SiShadcnui className="mt-2 ml-1 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
