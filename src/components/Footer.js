import React, { useState } from "react";

const Footer = ({ image }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center pb-4 gap-4">
      <div className="flex flex-row items-center justify-center gap-2 mx-auto pl-24">
        <div className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-4 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl">
          Angled
        </div>
        <div className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl">
          25%
        </div>
        <div className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-4 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl">
          Start/Stop Spin
        </div>
      </div>
      <div className="cursor-pointer select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl mr-4">
        Share
      </div>
    </div>
  );
};

export default Footer;
