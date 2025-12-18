"use client";
import React from "react";
import { ExternalLink } from "lucide-react";

interface BrowserFrameProps {
  url: string;
  children: React.ReactNode;
}

export const BrowserFrame = ({ url, children }: BrowserFrameProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-[#1a1a2e] rounded-[20px] border border-gray-700/50">
      <div className="flex items-center justify-between px-4 py-3 bg-[#252542] rounded-t-[20px] border-b border-gray-700/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex-1 mx-4 max-w-md">
          <div className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[#1a1a2e] rounded-lg text-gray-400 text-sm">
            <span>{url}</span>
          </div>
        </div>

        <a
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};
