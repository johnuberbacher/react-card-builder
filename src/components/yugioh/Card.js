import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { MaterialSymbol } from "react-material-symbols";
import "react-material-symbols/rounded";

const YugiohCard = forwardRef(
  ({ inputValues, templateImage, cardImage }, ref) => {
    return (
      <div
        ref={ref}
        className="w-[750px] h-[1090.5px] aspect-[5/7.27] relative bg-cover bg-center bg-white"
       
      >
      <img
        src={"./yugioh/" + inputValues.template + ".png"}
        className="select-none absolute top-0 left-0 right-0 h-auto w-full"
      />
        <div
          style={{ lineHeight: "85px" }}
          className="select-none absolute top-[-5px] left-[58px] font-ygo-matrix-sc-2 text-[85px]"
        >
          {inputValues.name}
        </div>
        <div className="absolute flex flex-row top-[130px] right-[74px] gap-0.5">
          {Array.from({ length: parseInt(inputValues.level) }, (_, index) => (
            <div
              key={index}
              className="w-[49px] h-auto aspect-[1/1] relative bg-cover bg-center"
              style={{
                backgroundImage: `url("./yugioh/level.png")`,
              }}
            ></div>
          ))}
        </div>

        {(inputValues.template === "Spell" ||
          inputValues.template === "Trap") && (
          <div className="select-none absolute top-[102px] right-[68px] font-ygo-stone-serif-sc-bold text-[40px]">
            [{inputValues.template} Card]
          </div>
        )}

        <div
          style={{ backgroundImage: `url(${inputValues.artwork})` }}
          className="object-fit bg-center bg-cover select-none absolute rounded-[2px] top-[199px] left-[85px] w-[580px] h-[570px] object-cover0"
        ></div>

        {inputValues.template === "Spell" || inputValues.template === "Trap" ? (
          <div></div>
        ) : (
          <div className="absolute top-[806px] left-[56px] text-[32px] font-ygo-stone-serif-sc-bold">
            {"[" + inputValues.type + "]"}
          </div>
        )}

        <div
          className={
            "absolute left-[56px] right-[56px] text-[22.25px] leading-[22.25px] font-ygo-stone-serif-sc-bold " +
            (inputValues.template === "Spell" || inputValues.template === "Trap"
              ? "top-[818px]"
              : "top-[858px]")
          }
        >
          {inputValues.effect}
        </div>

        {inputValues.template === "Spell" || inputValues.template === "Trap" ? (
          <div></div>
        ) : (
          <div>
            <div
              className="absolute bottom-[75px] right-[220px] text-[26.5px] font-ygo-stone-serif-sc-bold"
              style={{ textAlign: "right" }}
            >
              ATK/{inputValues.attack}
            </div>
            <div
              className="absolute bottom-[75px] right-[53px] text-[26.5px] font-ygo-stone-serif-sc-bold"
              style={{ textAlign: "right" }}
            >
              DEF/{inputValues.defense}
            </div>
          </div>
        )}
        <div
          style={{ backgroundImage: `url("./yugioh/seal.png)` }}
          className="object-fit bg-center bg-cover select-none absolute rounded-[2px] bottom-[50px] right-[50px] w-[24px] h-[24px] object-cover"
        ></div>
      </div>
    );
  }
);

export default YugiohCard;
