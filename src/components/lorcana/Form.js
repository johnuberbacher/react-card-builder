import React from "react";

const LorcanaForm = ({ inputValues, handleInputChange, handleFileChange }) => {
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
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.type} // Binding to inputValues
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          type="text"
          name="name"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.name} // Binding to inputValues
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="type"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Character Type:
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="characterType"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.characterType} // Binding to inputValues
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
          onChange={handleFileChange}
          type="file"
          accept="image/*"
          className="block w-full cursor-pointer border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:cursor-pointer file:me-4 file:p-2.5 dark:file:bg-neutral-700 dark:file:text-neutral-400"
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
          onChange={handleInputChange}
          name="template"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.template} // Binding to inputValues
        >
          <option value="amber-character">Amber Character</option>
          <option value="amethyst-character">Amethyst Character</option>
          <option value="emerald-character">Emerald Character</option>
          <option value="ruby-character">Ruby Character</option>
          <option value="sapphire-character">Sapphire Character</option>
          <option value="steel-character">Steel Character</option>
        </select>
      </div>
      <div className="mb-3">
        <label
          htmlFor="cost"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Ink Cost:
        </label>
        <input
          onChange={handleInputChange}
          type="range"
          name="cost"
          min="1"
          max="10"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.cost} // Binding to inputValues
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
          <span className="w-8 text-center">1</span>
          <span className="w-8 text-center">2</span>
          <span className="w-8 text-center">3</span>
          <span className="w-8 text-center">4</span>
          <span className="w-8 text-center">5</span>
          <span className="w-8 text-center">6</span>
          <span className="w-8 text-center">7</span>
          <span className="w-8 text-center">8</span>
          <span className="w-8 text-center">9</span>
          <span className="w-8 text-center">10</span>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="lore"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Lore:
        </label>
        <input
          onChange={handleInputChange}
          type="range"
          name="lore"
          min="0"
          max="4"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.lore}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
          <span className="w-8 text-center">0</span>
          <span className="w-8 text-center">1</span>
          <span className="w-8 text-center">2</span>
          <span className="w-8 text-center">3</span>
          <span className="w-8 text-center">4</span>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="effect"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Effect:
        </label>
        <input
          onChange={handleInputChange}
          value={inputValues.effect}
          type="text"
          name="effect"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="strength"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Strength:
        </label>
        <input
          onChange={handleInputChange}
          type="range"
          name="strength"
          min="0"
          max="10"
          step="1"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.strength}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
          <span className="w-8 text-center">0</span>
          <span className="w-8 text-center">1</span>
          <span className="w-8 text-center">2</span>
          <span className="w-8 text-center">3</span>
          <span className="w-8 text-center">4</span>
          <span className="w-8 text-center">5</span>
          <span className="w-8 text-center">6</span>
          <span className="w-8 text-center">7</span>
          <span className="w-8 text-center">8</span>
          <span className="w-8 text-center">9</span>
          <span className="w-8 text-center">10</span>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="willpower"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Willpower:
        </label>
        <input
          onChange={handleInputChange}
          type="range"
          name="willpower"
          min="1"
          max="10"
          step="1"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.willpower}
        />
        <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
          <span className="w-8 text-center">1</span>
          <span className="w-8 text-center">2</span>
          <span className="w-8 text-center">3</span>
          <span className="w-8 text-center">4</span>
          <span className="w-8 text-center">5</span>
          <span className="w-8 text-center">6</span>
          <span className="w-8 text-center">7</span>
          <span className="w-8 text-center">8</span>
          <span className="w-8 text-center">9</span>
          <span className="w-8 text-center">10</span>
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="template"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Rarity:
        </label>
        <select
          onChange={handleInputChange}
          name="rarity"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
          value={inputValues.rarity}
        >
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="super-rare">Super-Rare</option>
          <option value="legendary">Legendary</option>
        </select>
      </div>
    </div>
  );
};

export default LorcanaForm;
