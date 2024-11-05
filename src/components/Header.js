import React, { useState } from "react";

const Header = ({ image }) => {
  return <div className="w-full flex flex-row items-center justify-between mx-auto bg-white dark:bg-neutral-900 dark:border-b dark:border-neutral-600 p-4 shadow-sm">
    
    <div className="text-white font-semibold">Card Builder</div>
    <div className="text-white font-semibold">Nav/Yu/Po/Lo/Mt/?</div>
    <div className="text-white font-semibold">Export</div>
  </div>;
};

export default Header;
