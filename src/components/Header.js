import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

const Header = ({ toggleCardBuilderType }) => {
  return (
    <div className="flex flex-row items-end justify-end gap-4 pt-4 pr-4 absolute top-0 right-0 z-10">
      <div
        onClick={() => toggleCardBuilderType(0)}
        className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl"
      >
        Lorcana
      </div>
      <div
        onClick={() => toggleCardBuilderType(1)}
        className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl"
      >
        Yu-Gi-Oh
      </div>
    </div>
  );
};

export default Header;
