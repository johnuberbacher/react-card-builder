import React, { forwardRef } from "react";
import "react-material-symbols/rounded";

const LorcanaCard = forwardRef(
  ({ inputValues, templateImage, cardImage }, ref) => {
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
          src={
            inputValues.lorcanaInkable === true
              ? "./lorcana/icons/inkable.png"
              : "./lorcana/icons/uninkable.png"
          }
          className="select-none absolute top-0 left-0 h-auto w-auto"
          alt={"TCG Card Builder by John Uberbacher"}
        />

        <img
          src={"./lorcana/cards/" + inputValues.template + ".png"}
          className="select-none absolute top-0 left-0 right-0 h-auto w-full"
          alt={"TCG Card Builder by John Uberbacher"}
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
          {inputValues.lorcanaVersion}
        </div>

        <div className="select-none absolute bottom-[348px] left-[41px] right-[41px] text-center text-[32px] opacity-65 text-white font-brandon-italic-bold overflow-hidden whitespace-nowrap">
          {inputValues.lorcanaClassification}
        </div>

        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center font-memo text-[56px] bottom-[398px] right-[124px]">
          {inputValues.strength}
        </div>

        <div className="absolute flex flex-col items-center justify-center w-20 h-20 text-center text-white font-memo text-[56px] bottom-[398px] right-[38px]">
          {inputValues.willpower}
        </div>

        <div className="h-[250px] w-[610px] flex flex-col items-center justify-center  absolute bottom-[88px] left-[44px]">
          <div className="w-full flex flex-col gap-2">
            {inputValues.lorcanaUnnamedAbility && (
              <div className="font-brandon-medium text-[34px] leading-[36px]">
                {inputValues.lorcanaUnnamedAbility}
              </div>
            )}
            <div className="font-brandon-medium text-[34px] leading-[36px]">
              {inputValues.lorcanaNamedAbilityTitle && (
                <div className="inline-flex bg-[#57422a] rounded-br-xl overflow-hidden -ml-[15px] mr-1 px-3 uppercase text-white">
                  {inputValues.lorcanaNamedAbilityTitle}
                </div>
              )}
              {inputValues.lorcanaNamedAbilityDescription}
            </div>
          </div>
          {inputValues.lorcanaFlavorText && (
            <div>
              <img
                src={"./lorcana/icons/divider.png"}
                className="w-full h-auto mt-2 mb-1"
                alt={"TCG Card Builder by John Uberbacher"}
              />
              <div className="font-brandon-italic-light text-[36px] leading-[36px]">
                {inputValues.lorcanaFlavorText}
              </div>
            </div>
          )}
        </div>

        <div className="select-none text-white absolute bottom-[43px] right-[407px] left-[31px] font-brandon-medium text-[18px] text-left overflow-hidden whitespace-nowrap">
          {inputValues.lorcanaArtist}
        </div>

        <div className="absolute flex flex-col items-center justify-center h-[250px] w-18 bottom-[88px] right-[40px]">
          {Array.from({ length: parseInt(inputValues.lore) }, (_, index) => (
            <img
              src={"./lorcana/icons/lore.png"}
              className="w-[40px] h-auto"
              alt={"TCG Card Builder by John Uberbacher"}
            />
          ))}
        </div>

        <div className="absolute flex flex-col items-center justify-center h-20 w-full bottom-1 left-0 right-0">
          <img
            src={"./lorcana/icons/" + inputValues.rarity + ".png"}
            className="w-12 h-auto mx-auto"
            alt={"TCG Card Builder by John Uberbacher"}
          />
        </div>

        <div className="select-none text-white absolute bottom-[43px] right-[407px] left-[31px] font-brandon-medium text-[18px] text-left overflow-hidden whitespace-nowrap">
          {inputValues.lorcanaArtist}
        </div>

        <div className="select-none text-white absolute bottom-[14px] right-[407px] left-[31px] font-brandon-medium text-[25px] text-left overflow-hidden whitespace-nowrap">
          {inputValues.lorcanaCardNumber}
        </div>

        <div className="select-none text-white absolute bottom-[43px] right-[31px] left-[407px] font-brandon-medium text-[18px] text-right overflow-hidden whitespace-nowrap">
          {inputValues.lorcanaCopyright}
        </div>
      </div>
    );
  }
);

export default LorcanaCard;
