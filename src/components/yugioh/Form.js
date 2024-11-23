import React from "react";

const YugiohForm = ({ toggleCardBuilderType }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="mb-3">
        <label
          htmlFor="type"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Card Type:
        </label>
        <select
          name="type"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Character">Character</option>
          <option value="Action">Action</option>
          <option value="Item">Item</option>
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor="name"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="Necro Gardna"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="image"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Artwork:
        </label>
        <input
          type="file"
          accept="image/*"
          className="block w-full cursor-pointer border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:cursor-pointer file:me-4 file:p-2.5 dark:file:bg-neutral-700 dark:file:text-neutral-400"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="template"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Template:
        </label>
        <select
          name="template"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="Normal">Normal</option>
          <option value="Effect">Effect</option>
          <option value="Fusion">Fusion</option>
          <option value="Ritual">Ritual</option>
          <option value="Trap">Trap</option>
          <option value="Spell">Spell</option>
        </select>
      </div>

      <div className="mb-3">
        <label
          htmlFor="level"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Level:
        </label>
        <input
          type="range"
          name="level"
          min="0"
          max="12"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="6"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
          {Array.from({ length: 13 }, (_, index) => (
            <span key={index} className="w-8 text-center">
              {index}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <label
          htmlFor="type"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Type:
        </label>
        <input
          type="text"
          name="type"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="Warrior / Effect"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="effect"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Effect:
        </label>
        <input
          type="text"
          name="effect"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="During your opponent's turn: You can banish this card from your Graveyard; negate the next attack this turn from a monster your opponent controls (this is a Quick Effect)."
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="attack"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Attack:
        </label>
        <input
          type="range"
          name="attack"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="2000"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="defense"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Defense:
        </label>
        <input
          type="range"
          name="defense"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          defaultValue="1500"
        />
      </div>
    </div>
  );
};

export default YugiohForm;
