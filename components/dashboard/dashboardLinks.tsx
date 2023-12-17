"use client";

import Link from "next/link";

interface Props {
  path: string;
  text: string;
  subtitle: string;
  icon: string;
}

export const DashboardLink = ({ path, text, subtitle, icon }: Props) => {

// The active link has bg-blue-700

  return (
    <Link
      key={path}
      href={path}
      className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{text}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
