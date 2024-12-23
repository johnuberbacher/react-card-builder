import React, { forwardRef } from "react";
import "react-material-symbols/rounded";

const YugiohCard = forwardRef(
  ({ inputValues, templateImage, cardImage }, ref) => {
    return (
      <div ref={ref} className="w-[750px] h-auto aspect-[7/10] relative">
        <div
          style={{ backgroundImage: `url(${inputValues.artwork})` }}
          className="object-fit bg-center bg-cover select-none absolute rounded-[2px] top-[189px] left-[85px] w-[580px] h-[570px] object-cover0"
        ></div>

        <img
          src={"./yugioh/cards/" + inputValues.yugiohTemplate + ".png"}
          className="select-none absolute top-0 left-0 right-0 bottom-0 h-full w-full object-fit"
          alt={"TCG Card Builder by John Uberbacher"}
        />

        <img
          src={
            inputValues.yugiohTemplate === "spell"
              ? "./yugioh/icons/spell.png"
              : inputValues.yugiohTemplate === "trap"
              ? "./yugioh/icons/trap.png"
              : "./yugioh/icons/" + inputValues.yugiohElement + ".png"
          }
          alt={"TCG Card Builder by John Uberbacher"}
          className="select-none absolute top-[48px] right-[50px]"
        />

        <div
          style={{ lineHeight: "85px" }}
          className="select-none absolute top-[36px] left-[58px] font-ygo-matrix-sc-2 text-[84px]"
        >
          {inputValues.name}
        </div>

        {inputValues.yugiohTemplate !== "spell" &&
          inputValues.yugiohTemplate !== "trap" && (
            <div className="absolute flex flex-row top-[126px] right-[74px] gap-0.5">
              {Array.from({ length: inputValues.yugiohLevel }, (_, index) => (
                <div
                  key={index}
                  className="w-[49px] h-auto aspect-[1/1] relative bg-cover bg-center"
                  style={{
                    backgroundImage: `url("./yugioh/icons/level.png")`,
                  }}
                ></div>
              ))}
            </div>
          )}

        {(inputValues.yugiohTemplate === "spell" ||
          inputValues.yugiohTemplate === "trap") && (
          <div className="select-none absolute top-[113px] right-[68px] font-ygo-stone-serif-sc-bold text-[41.75px]">
            [{inputValues.yugiohTemplate} Card]
          </div>
        )}

        {inputValues.yugiohTemplate === "spell" ||
        inputValues.yugiohTemplate === "trap" ? (
          <div></div>
        ) : (
          <div className="absolute top-[803px] left-[58px] text-[28px] font-ygo-stone-serif-sc-bold">
            {"[" + inputValues.yugiohCardType + "]"}
          </div>
        )}

        <div className="absolute left-[82px] bottom-[270px] text-[30px] font-ygo-matrix-sc-2 text-left">
          {inputValues.yugiohEdition}
        </div>

        <div className="absolute right-[82px] bottom-[270px] text-[30px] font-ygo-matrix-sc-2 text-right">
          {inputValues.yugiohCardNumber}
        </div>

        <div
          className={
            "absolute left-[58px] right-[56px] text-[22.25px] leading-[22.25px] font-ygo-matrix-book " +
            (inputValues.yugiohTemplate === "spell" ||
            inputValues.yugiohTemplate === "trap"
              ? "top-[810px]"
              : "top-[845px]")
          }
        >
          {inputValues.yugiohEffect}
        </div>

        {inputValues.yugiohTemplate === "spell" ||
        inputValues.yugiohTemplate === "trap" ? (
          <div></div>
        ) : (
          <div>
            <div
              className="absolute bottom-[62px] right-[212px] text-[26px] font-ygo-stone-serif-sc-bold"
              style={{ textAlign: "right" }}
            >
              ATK/{inputValues.yugiohAttack}
            </div>
            <div
              className="absolute bottom-[62px] right-[57px] text-[26px] font-ygo-stone-serif-sc-bold"
              style={{ textAlign: "right" }}
            >
              DEF/{inputValues.yugiohDefense}
            </div>
          </div>
        )}

        <div className="select-none absolute bottom-[17px] right-[315px] left-[36px] font-ygo-matrix-sc-2 text-[32px] overflow-hidden whitespace-nowrap">
          {inputValues.yugiohIdentifier}
        </div>

        <div className="select-none absolute bottom-[17px] right-[60px] left-[315px] font-ygo-matrix-sc-2 text-[32px] text-right overflow-hidden whitespace-nowrap flex flex-row gap-1.5 items-center justify-end">
          <span className="text-[24px] font-serif">©</span>
          {inputValues.yugiohCopyright}
        </div>

        <div
          style={{ backgroundImage: `url("./yugioh/icons/seal.png)` }}
          className="object-fit bg-center bg-cover select-none absolute rounded-[2px] bottom-[50px] right-[50px] w-[24px] h-[24px] object-cover"
        ></div>
      </div>
    );
  }
);

export default YugiohCard;
