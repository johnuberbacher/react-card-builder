import React from "react";
import { MaterialSymbol } from "react-material-symbols";

const YugiohForm = ({
  inputValues,
  handleInputChange,
  handleFileChange,
  setInputValues,
}) => {
  function setRandomIdentifier() {
    // Generate a random 9-digit number
    const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;

    const updateInputValue = (key, value) => {
      setInputValues((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    };

    updateInputValue("yugiohIdentifier", randomNumber);
  }

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="w-full mb-4">
        <label
          htmlFor="yugiohTemplate"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Template:
        </label>
        <select
          onChange={handleInputChange}
          name="yugiohTemplate"
          className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.yugiohTemplate}
        >
          <option value="normal">Normal</option>
          <option value="effect">Effect</option>
          <option value="trap">Trap</option>
          <option value="spell">Spell</option>
          <option value="fusion">Fusion</option>
          <option value="ritual">Ritual</option>
          <option value="token">Token</option>
          <option value="synchro">Synchro</option>
          <option value="dark-synchro">Dark Syncrho</option>
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
          type="text"
          name="name"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.name}
          onChange={handleInputChange}
        />
      </div>

      {inputValues.yugiohTemplate !== "spell" &&
        inputValues.yugiohTemplate !== "trap" && (
          <div className="w-full mb-4">
            <label
              htmlFor="yugiohElement"
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              Element:
            </label>
            <select
              onChange={handleInputChange}
              name="yugiohElement"
              className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={inputValues.yugiohElement}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="fire">Fire</option>
              <option value="earth">Earth</option>
              <option value="water">Water</option>
              <option value="wind">Wind</option>
              <option value="laugh">Laugh</option>
              <option value="divine">Divine</option>
            </select>
          </div>
        )}

      {inputValues.yugiohTemplate !== "spell" &&
        inputValues.yugiohTemplate !== "trap" && (
          <div className="w-full mb-4">
            <label
              htmlFor="yugiohLevel"
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              Level:
            </label>
            <input
              type="range"
              name="yugiohLevel"
              min="0"
              max="12"
              className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChange}
              value={inputValues.yugiohLevel}
            />
            <div className="flex justify-between mt-2 text-xs text-gray-600 select-none">
              {Array.from({ length: 13 }, (_, index) => (
                <span key={index} className="w-8 text-center">
                  {index}
                </span>
              ))}
            </div>
          </div>
        )}

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
          htmlFor="yugiohEdition"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Edition:
        </label>
        <input
          type="text"
          name="yugiohEdition"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.yugiohEdition}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohCardNumber"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Card/Set Number:
        </label>
        <input
          type="text"
          name="yugiohCardNumber"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.yugiohCardNumber}
          onChange={handleInputChange}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohCardType"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Type:
        </label>
        <input
          type="text"
          name="yugiohCardType"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.yugiohCardType}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohEffect"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Effect:
        </label>
        <input
          type="text"
          name="yugiohEffect"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.yugiohEffect}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohAttack"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Attack:
        </label>
        <input
          type="range"
          name="yugiohAttack"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.yugiohAttack}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohDefense"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Defense:
        </label>
        <input
          type="range"
          name="yugiohDefense"
          min="0"
          max="9900"
          step="100"
          className="pl-0.5 pr-0.25 cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValues.yugiohDefense}
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohIdentifier"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Identifier:
        </label>
        <div className="w-full relative">
          <input
            type="text"
            name="yugiohIdentifier"
            className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={inputValues.yugiohIdentifier}
            onChange={handleInputChange}
          />
          <div
            onClick={() => setRandomIdentifier()}
            className="group absolute right-[5px] top-[5px] cursor-pointer select-none flex items-center justify-center text-neutral-900 bg-white border border-neutral-300 focus:outline-none hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 font-medium rounded-lg text-sm w-8 h-8  dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700 shadow-xl hover:shadow-2xl"
          >
            <MaterialSymbol
              icon="casino"
              size={20}
              fill
              className="rotate-[15deg] group-hover:rotate-[-5deg] transition-all relative"
            />
          </div>
        </div>
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="yugiohCopyright"
          className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
        >
          Copyright:
        </label>
        <input
          type="text"
          name="yugiohCopyright"
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValues.yugiohCopyright}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default YugiohForm;
