import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPage from "./components/CardPage";
import YuCard from "./components/cards/YuCard";
import LorcanaCard from "./components/lorcana/Card";
import LorcanaForm from "./components/lorcana/Form";
import YugiohForm from "./components/yugioh/Form";
import { toPng } from "html-to-image";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

function App() {
  const divRef = useRef(null);
  const twoDimensionalCanvas = useRef(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [cardImage, setCardImage] = useState(null);
  const [canvasPath, setCanvasPath] = useState(null);
  const [cardBuilderType, setCardBuilderType] = useState(0);
  const [rotateY, setRotateY] = useState(true);
  const [threeDimensional, setThreeDimensional] = useState(true);
  const [loading, setLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    type: "Character",
    name: "John Uberbacher",
    characterType: "Reluctant Hero",
    artwork: "/lorcana/cards/template.png",
    template: "amber-character",
    cost: 3,
    lore: 2,
    effect:
      "During your opponent's turn: You can banish this card from your Graveyard; negate the next attack this turn from a monster your opponent controls (this is a Quick Effect).",
    strength: 4,
    willpower: 3,
    rarity: "common",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        // Store the file URL in the state for use
        setInputValues((prevState) => ({
          ...prevState,
          artwork: img.src,
        }));
      };
    }
  };

  const handleToggleCardBuilderType = useCallback((value) => {
    // setLoading(true);
    setCardBuilderType(value);
  }, []);

  const handleToggleRotateY = () => {
    setRotateY(!rotateY);
  };

  const handleToggleThreeDimensional = () => {
    setThreeDimensional(!threeDimensional);
  };

  const handleCapture = useCallback(() => {
    if (divRef.current) {
      toPng(divRef.current)
        .then((dataUrl) => {
          setCanvasPath(dataUrl);
          const canvas = twoDimensionalCanvas.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            const img = new Image();
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
            };
            img.src = dataUrl;
          }
        })

        .catch(function (error) {
          console.error("Error capturing image", error);
        });
    }
  }, [divRef, setCanvasPath]);

  const data = [
    {
      name: "Lorcana",
      backImage: "./lorcana/normal_back.png",
      data: [
        {
          label: "Card Type",
          type: "select",
          default: "character",
          name: "type",
          options: [
            {
              value: "Character",
              label: "character",
            },
            {
              value: "Action",
              label: "action",
            },
            {
              value: "Item",
              label: "item",
            },
          ],
        },
        {
          label: "Name",
          type: "text",
          default: "John Uberbacher",
          name: "name",
        },
        {
          label: "Type",
          type: "text",
          default: "Reluctant Hero",
          name: "type",
        },
        {
          label: "Artwork",
          type: "file",
          name: "image",
        },
        {
          label: "Template",
          type: "select",
          default: "Sapphire Character",
          options: [
            {
              value: "Amber Character",
              path: "./lorcana/cards/amber-character.png",
            },

            {
              value: "Amethyst Character",
              path: "./lorcana/cards/amethyst-character.png",
            },

            {
              value: "Emerald Character",
              path: "./lorcana/cards/emerald-character.png",
            },

            {
              value: "Ruby Character",
              path: "./lorcana/cards/ruby-character.png",
            },

            {
              value: "Sapphire Character",
              path: "./lorcana/cards/sapphire-character.png",
            },

            {
              value: "Steel Character",
              path: "./lorcana/cards/steel-character.png",
            },
          ],
          name: "template",
        },
        {
          label: "Ink Cost",
          type: "range",
          min: 1,
          max: 10,
          default: 3,
          name: "cost",
        },
        {
          label: "Lore",
          type: "range",
          min: 0,
          max: 4,
          default: 2,
          name: "lore",
        },
        {
          label: "Effect",
          type: "text",
          default:
            "During your opponent's turn: You can banish this card from your Graveyard; negate the next attack this turn from a monster your opponent controls (this is a Quick Effect).",
          name: "effect",
        },
        {
          label: "Strength",
          type: "range",
          min: 0,
          max: 10,
          default: 4,
          step: 1,
          name: "strength",
        },
        {
          label: "Willpower",
          type: "range",
          min: 1,
          max: 10,
          default: 3,
          step: 1,
          name: "willpower",
        },
      ],
    },
    {
      name: "Yugioh",
      backImage: "./yugioh/normal_back.png",
      data: [
        {
          label: "Name",
          type: "text",
          default: "Necro Gardna",
          name: "name",
        },
        {
          label: "Artwork",
          type: "file",
          name: "image",
        },
        {
          label: "Template",
          type: "select",
          default: "Normal",
          options: [
            { value: "Normal", path: "./yugioh/normal_front.png" },
            {
              value: "Effect",
              path: "./yugioh/effect_front.png",
            },
            { value: "Fusion", path: "./yugioh/fusion_front.png" },
            { value: "Ritual", path: "./yugioh/ritual_front.png" },
            { value: "Trap", path: "./yugioh/trap_front.png" },
            { value: "Spell", path: "./yugioh/spell_front.png" },
          ],
          name: "template",
        },
        {
          label: "Level",
          type: "number",
          min: 0,
          max: 12,
          default: 6,
          name: "level",
        },
        {
          label: "Type",
          type: "text",
          default: "Warrior / Effect",
          name: "type",
        },
        {
          label: "Effect",
          type: "text",
          default:
            "During your opponent's turn: You can banish this card from your Graveyard; negate the next attack this turn from a monster your opponent controls (this is a Quick Effect).",
          name: "effect",
        },
        {
          label: "Attack",
          type: "number",
          min: 0,
          max: 9900,
          default: 2000,
          step: 100,
          name: "attack",
        },
        {
          label: "Defense",
          type: "number",
          min: 0,
          max: 9900,
          default: 1500,
          step: 100,
          name: "defense",
        },
      ],
    },
  ];

  useEffect(() => {
    // Capture the canvas after fields are updated
    setTimeout(() => {
      handleCapture();
      setLoading(false); // End loading after capture
    }, 100); // Adjust timeout if needed
  }, [cardBuilderType]);

  useEffect(() => {
    handleCapture();
  }, [inputValues, templateImage, cardImage, handleCapture]);

  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="bg-grid relative h-full flex flex-row">
        <div className="py-4 px-4 h-full w-80 min-w-80 overflow-hidden z-10">
          <div className="h-full overflow-y-auto flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 shadow-lg rounded-xl p-4">
            <div className="text-2xl mb-1 dark:text-white select-none">
              {data[cardBuilderType].name} Builder
            </div>
            <div className="text-neutral-400 text-sm mb-4 select-none">
              Lorem ipsum dolor sit amet
            </div>
            <div className="w-full rounded-xl p-4 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-600 relative h-full overflow-y-auto">
              <div className="h-full flex flex-col">
                {/*fields.map(renderInputField)*/}

                {cardBuilderType === 0 && (
                  <LorcanaForm
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    handleFileChange={handleFileChange}
                  />
                )}

                {cardBuilderType === 1 && (
                  <YugiohForm
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    handleFileChange={handleFileChange}
                  />
                )}

                <div className="cursor-pointer text-center select-none text-white bg-indigo-700 border border-indigo-500 focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 shadow-xl hover:shadow-2xl mb-4">
                  Save as Image
                </div>
                <div className="cursor-pointer text-center select-none text-white bg-indigo-700 border border-indigo-500 focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 shadow-xl hover:shadow-2xl">
                  Save as PDF
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full relative pr-4">
          <Header toggleCardBuilderType={handleToggleCardBuilderType} />
          {loading ? (
            <div className="loading absolute text-[200px] text-white top-0 left-32">
              Loading...
            </div>
          ) : (
            <div className="h-full w-full">
              <div className="overflow-hidden h-0 w-0">
                {cardBuilderType === 0 && (
                  <LorcanaCard
                    canvasPath={canvasPath}
                    templateImage={templateImage}
                    cardImage={cardImage}
                    inputValues={inputValues}
                    ref={divRef}
                  />
                )}

                {cardBuilderType === 1 && (
                  <YuCard
                    canvasPath={canvasPath}
                    templateImage={templateImage}
                    cardImage={cardImage}
                    inputValues={inputValues}
                    ref={divRef}
                  />
                )}
              </div>
              <canvas
                ref={twoDimensionalCanvas}
                className={`w-full h-full object-contain rounded-lg overflow-hidden max-w-xl m-auto flex p-10 ${
                  threeDimensional ? "hidden" : "flex"
                }`}
              />

              {canvasPath && threeDimensional && (
                <div className="select-none h-full w-full flex flex-col cursor-grab items-center justify-center overflow-hidden">
                  <CardPage
                    frontImage={canvasPath}
                    backImage={data[cardBuilderType].backImage}
                    rotateY={rotateY}
                  />
                </div>
              )}
            </div>
          )}
          <Footer
            toggleRotateY={handleToggleRotateY}
            toggleThreeDimensional={handleToggleThreeDimensional}
            threeDimensional={threeDimensional}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
