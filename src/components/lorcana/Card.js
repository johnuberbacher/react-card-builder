import React, {
    forwardRef,
    useState,
    useEffect,
    useRef,
    useCallback,
  } from "react";
  import { MaterialSymbol } from "react-material-symbols";
  import "react-material-symbols/rounded";
  
  const LorcanaCard = forwardRef(({ inputValues, templateImage, cardImage }, ref) => {
    return (
      <div ref={ref} className="w-[750px] h-auto aspect-[5/7] relative">
        <div
            ref={ref}
            className="select-none absolute top-7 left-6 right-6 h-[540px] w-auto object-fit bg-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${inputValues.artwork})`,
            }}
          ></div>
          
        <img
          src={inputValues.lorcanaInkable === true ? "./lorcana/icons/inkable.png" : "./lorcana/icons/uninkable.png"}
          className="select-none absolute top-0 left-0 h-auto w-auto"
        />

        <img
          src={"./lorcana/cards/" + inputValues.template + ".png"}
          className="select-none absolute top-0 left-0 right-0 h-auto w-full"
        />
  
        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center text-white font-memo text-[48px] top-[42px] left-[38px]">
          {inputValues.cost}
        </div>
  
        <div
          style={{ lineHeight: "85px" }}
          className="select-none uppercase absolute bottom-[416px] left-[41px] right-[228px] text-[56px] text-white font-bystander-semibold overflow-hidden whitespace-nowrap"
        >
          {inputValues.name}
        </div>
  
        <div className="select-none absolute bottom-[392px] left-[41px] right-[228px] text-[31.75px] text-white font-brandon-medium overflow-hidden whitespace-nowrap">
          {inputValues.characterType}
        </div>
  
        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center font-memo text-[56px] bottom-[398px] right-[124px]">
          {inputValues.strength}
        </div>
  
        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center text-white font-memo text-[56px] bottom-[398px] right-[38px]">
          {inputValues.willpower}
        </div>
  
        <div className="absolute flex flex-col items-center justify-center h-[250px] w-18 border border-red-500 bottom-[88px] right-[40px]">
          {Array.from({ length: parseInt(inputValues.lore) }, (_, index) => (
            <img src={"./lorcana/icons/lore.png"} className="w-[40px] h-auto" />
          ))}
        </div>
        
        <div className="absolute flex flex-col items-center justify-center h-20 w-full bottom-1 left-0 right-0">
          <img src={"./lorcana/icons/" + inputValues.rarity + ".png"} className="w-12 h-auto mx-auto" />
        </div>
          
          <div className="h-[250px] w-[615px] flex flex-col items-start justify-center border border-red-500 absolute bottom-[88px] left-[44px]">
          {inputValues.effect}
          </div>
      </div>
    );
  });
  
  export default LorcanaCard;
  