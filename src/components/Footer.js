import React, { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";

const Footer = ({
  toggleRotateY,
  toggleThreeDimensional,
  threeDimensional,
  zoomPercent,
  setZoomPercent,
}) => {
  return (
    <div className="w-full flex flex-row items-center justify-center pb-4 gap-4 absolute bottom-0 right-0 left-0">
      <div className="flex flex-row items-center justify-center gap-2 mx-auto">
        <div
          onClick={() => toggleThreeDimensional()}
          className="cursor-pointer select-none flex items-center justify-center text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm w-11 h-11  dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl"
        >
          {threeDimensional ? "3D" : "2D"}
        </div>
        <div
          onClick={() => threeDimensional ? setZoomPercent(100) : null}
          className={`select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none focus:ring-neutral-100 font-medium rounded-xl text-sm text-center w-[62px] px-0 py-2.5 dark:bg-neutral-800 dark:text-white dark:border-neutral-600  dark:focus:ring-neutral-700 shadow-xl ${
            threeDimensional
              ? "cursor-pointer hover:bg-neutral-100 focus:ring-4 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 hover:shadow-2xl"
              : "opacity-50 cursor-not-allowed "
          }`}
        >
          {zoomPercent}%
        </div>
        <div
          onClick={() => threeDimensional ? toggleRotateY() : null}
          className={`flex items-center justify-center select-none text-neutral-900 bg-white border border-neutral-300 focus:outline-none focus:ring-neutral-100 font-medium rounded-xl text-sm text-center w-[44px] h-[42px] dark:bg-neutral-800 dark:text-white dark:border-neutral-600  dark:focus:ring-neutral-700 shadow-xl ${
            threeDimensional
              ? "cursor-pointer hover:bg-neutral-100 focus:ring-4 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 hover:shadow-2xl"
              : "opacity-50 cursor-not-allowed "
          }`}
        >
          <MaterialSymbol icon="360" size={24} fill />
        </div>
      </div>
    </div>
  );
};

export default Footer;
