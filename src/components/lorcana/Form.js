import React from "react";

const LorcanaForm = ({ inputValues, handleInputChange, handleFileChange }) => {
  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full mb-4">
        <label
          htmlFor="template"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Ink Color:
        </label>
        <select
          onChange={handleInputChange}
          name="template"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.template}
        >
          <option value="amber-character">Amber</option>
          <option value="amethyst-character">Amethyst</option>
          <option value="emerald-character">Emerald</option>
          <option value="ruby-character">Ruby</option>
          <option value="sapphire-character">Sapphire</option>
          <option value="steel-character">Steel</option>
        </select>
      </div>
      <div className="w-full mb-4">
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
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.name}
        />
      </div>
      <div className="w-full mb-4">
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
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.cost}
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
      <div className="w-full mb-4">
        <div className="inline-flex items-center">
          <input
            onChange={handleInputChange}
            name="lorcanaInkable"
            type="checkbox"
            checked={inputValues.lorcanaInkable}
            className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="lorcanaInkable"
            className="cursor-pointer ms-2 text-sm font-medium text-neutral-900 dark:text-neutral-300"
          >
            Inkable
          </label>
        </div>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaVersion"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Version:
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="lorcanaVersion"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaVersion}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaClassification"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Classification:
        </label>
        <input
          onChange={handleInputChange}
          type="text"
          name="lorcanaClassification"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaClassification}
        />
      </div>

      <div className="w-full mb-4">
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
          className="block w-full cursor-pointer border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:cursor-pointer file:me-4 file:p-2.5 dark:file:bg-neutral-700 dark:file:text-neutral-400"
        />
      </div>
      <div className="w-full mb-4">
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
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaUnnamedAbility"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Unnamed Ability:
        </label>
        <input
          onChange={handleInputChange}
          value={inputValues.lorcanaUnnamedAbility}
          type="text"
          name="lorcanaUnnamedAbility"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaNamedAbilityTitle"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Named Ability:
        </label>
        <input
          onChange={handleInputChange}
          value={inputValues.lorcanaNamedAbilityTitle}
          type="text"
          name="lorcanaNamedAbilityTitle"
          className="mb-1 bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <input
          onChange={handleInputChange}
          value={inputValues.lorcanaNamedAbilityDescription}
          type="text"
          name="lorcanaNamedAbilityDescription"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaFlavorText"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Flavor Text:
        </label>
        <input
          onChange={handleInputChange}
          value={inputValues.lorcanaFlavorText}
          type="text"
          name="lorcanaFlavorText"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-full mb-4">
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
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <div className="w-full mb-4">
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
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaArtist"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Artist:
        </label>
        <input
          type="text"
          name="lorcanaArtist"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaArtist}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaCardNumber"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Card Number:
        </label>
        <input
          type="text"
          name="lorcanaCardNumber"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaCardNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="template"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Rarity:
        </label>
        <select
          onChange={handleInputChange}
          name="rarity"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.rarity}
        >
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="super-rare">Super-Rare</option>
          <option value="legendary">Legendary</option>
        </select>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaArtist"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Artist:
        </label>
        <input
          type="text"
          name="lorcanaArtist"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaArtist}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="lorcanaCopyright"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Copyright:
        </label>
        <input
          type="text"
          name="lorcanaCopyright"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.lorcanaCopyright}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default LorcanaForm;
