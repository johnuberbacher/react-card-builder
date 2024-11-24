import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPage from "./components/CardPage";
import LorcanaCard from "./components/lorcana/Card";
import LorcanaForm from "./components/lorcana/Form";
import YugiohCard from "./components/yugioh/Card";
import YugiohForm from "./components/yugioh/Form";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import "react-material-symbols/rounded";

function App() {
  const divRef = useRef(null);
  const twoDimensionalCanvas = useRef(null);
  const [canvasPath, setCanvasPath] = useState(null);
  const [cardBuilderType, setCardBuilderType] = useState(0);
  const [rotateY, setRotateY] = useState(true);
  const [threeDimensional, setThreeDimensional] = useState(true);
  const [zoomPercent, setZoomPercent] = useState(0);
  const [inputValues, setInputValues] = useState({
    name: "John Uberbacher",
    artwork: "/lorcana/cards/template.png",

    type: "Character",
    lorcanaVersion: "Reluctant Ally",
    lorcanaClassification: "Storyborn • Ally • Knight ",
    template: "emerald-character",
    lorcanaInkable: true,
    cost: 6,
    lore: 3,
    effect: "Exert shosen opposing character.",
    strength: 3,
    willpower: 5,
    rarity: "common",

    lorcanaUnnamedAbility: "Exert chosen opposing character.",
    lorcanaNamedAbilityTitle: "Adventure Ahead",
    lorcanaNamedAbilityDescription:
      "Whenever you play a character with cost 2 or less, you may exert them to draw a card.",
    lorcanaCopyright: "Disney Lorcana © Disney",
    lorcanaArtist: "John Uberbacher",
    lorcanaCardNumber: "1/204 • EN • 1",
    lorcanaFlavorText:
      "The best part about a beachside concert is that there's always room for one more.",

    yugiohTemplateType: "character",
    yugiohElement: "dark",
    yugiohLevel: 5,
    yugiohEdition: "1st Edition",
    yugiohCardNumber: "JU25-EN004",
    yugiohTemplate: "normal",
    yugiohEffect:
      'If this card is banished: You can Special Summon 1 Level 4 or lower LIGHT Spellcaster monster from your hand or Deck, except "Astral Sorcerer of the Mystic Veil." You can only use each effect of "Astral Sorcerer of the Mystic Veil" once per turn.',
    yugiohCardType: "Monster/Effect",
    yugiohAttack: 2000,
    yugiohDefense: 1600,
    yugiohIdentifier: "1234567890",
    yugiohCopyright: "2025 KONAMI",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setInputValues((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        setInputValues((prevState) => ({
          ...prevState,
          artwork: img.src,
        }));
      };
    }
  };

  const handleToggleCardBuilderType = useCallback((value) => {
    setCardBuilderType(value);
    handleCapture();
  }, []);

  const handleToggleRotateY = () => {
    setRotateY(!rotateY);
  };

  const handleToggleThreeDimensional = () => {
    setThreeDimensional(!threeDimensional);
  };

  const handleCapture = useCallback(() => {
    if (!divRef.current) {
      console.warn("divRef is not available");
      return;
    }

    toPng(divRef.current, { useCORS: true })
      .then((dataUrl) => {
        if (!dataUrl || typeof dataUrl !== "string") {
          throw new Error("Invalid data URL generated by toPng");
        }

        setCanvasPath(dataUrl);

        const canvas = twoDimensionalCanvas.current;
        if (!canvas) {
          throw new Error("Canvas element is not available");
        }

        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
        };
        img.onerror = (err) => {
          console.error("Error loading the image", err);
        };
        img.src = dataUrl;
      })
      .catch((error) => {
        console.error("Error capturing image", error);
      });
  }, [divRef, setCanvasPath]);

  const data = [
    {
      name: "Lorcana",
      backImage: "./lorcana/cards/normal_back.png",
    },
    {
      name: "Yu-Gi-Oh",
      backImage: "./yugioh/cards/normal_back.png",
    },
  ];

  const saveAsImage = () => {
    if (!canvasPath) {
      console.warn("No canvas path available to save as image.");
      return;
    }

    const link = document.createElement("a");
    link.href = canvasPath;
    link.download = inputValues.name + ".png";
    link.click();
  };

  const saveAsPDF = () => {
    const canvas = twoDimensionalCanvas.current;
    if (!canvas) {
      console.warn("Canvas not found.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const canvasImg = canvas.toDataURL("image/png");
    pdf.addImage(canvasImg, "PNG", 0, 0, 210, 298);

    pdf.save(inputValues.name + ".pdf");
  };

  useEffect(() => {
    // Capture the canvas after fields are updated
    setTimeout(() => {
      handleCapture();
    }, 100); // Adjust timeout if needed
  }, [cardBuilderType]);

  useEffect(() => {
    handleCapture();
  }, [inputValues, handleCapture]);

  return (
    <div className="flex flex-col h-screen bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
      <div className="bg-grid relative h-full flex flex-row">
        <div className="py-4 pl-4 h-full w-80 min-w-80 overflow-hidden z-10">
          <div className="h-full overflow-y-auto flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 shadow-lg rounded-xl p-4">
            <div className="text-2xl mb-1 dark:text-white select-none">
              {data[cardBuilderType].name} Builder
            </div>
            <div className="text-neutral-400 text-sm mb-4 select-none">
              Craft personalized trading cards with custom names and effects
            </div> 
            <div className="w-full flex flex-col justify-between rounded-xl pt-4 px-4 pb-1 border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-600 relative h-full overflow-y-auto">
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
                  setInputValues={setInputValues}
                />
              )}
            </div>
            <div className="w-full mt-4">
              <div
                onClick={() => saveAsImage()}
                className="cursor-pointer text-center select-none text-white bg-indigo-700 border border-indigo-500 focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 shadow-xl hover:shadow-2xl mb-4"
              >
                Save as Image
              </div>
              <div
                onClick={() => saveAsPDF()}
                className="cursor-pointer text-center select-none text-white bg-indigo-700 border border-indigo-500 focus:outline-none hover:bg-indigo-600 focus:ring-4 focus:ring-neutral-100 font-medium rounded-xl text-sm px-5 py-2.5 shadow-xl hover:shadow-2xl"
              >
                Save as PDF
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full relative">
          <Header toggleCardBuilderType={handleToggleCardBuilderType} />
          <div className="h-full w-full">
            <div className="overflow-hidden h-0 w-0">
              {cardBuilderType === 0 && (
                <LorcanaCard
                  canvasPath={canvasPath}
                  inputValues={inputValues}
                  ref={divRef}
                />
              )}

              {cardBuilderType === 1 && (
                <YugiohCard
                  canvasPath={canvasPath}
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
                  setZoomPercent={setZoomPercent}
                  zoomPercent={zoomPercent}
                />
              </div>
            )}
          </div>
          <Footer
            toggleRotateY={handleToggleRotateY}
            toggleThreeDimensional={handleToggleThreeDimensional}
            threeDimensional={threeDimensional}
            zoomPercent={zoomPercent}
            setZoomPercent={setZoomPercent}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
