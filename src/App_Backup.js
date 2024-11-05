import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPage from "./components/CardPage";

function App() {
  const canvasRef = useRef(null);
  const [templateImage, setTemplateImage] = useState(null);
  const [cardImage, setCardImage] = useState(null);
  const [canvasPath, setCanvasPath] = useState(null);
  const [fields, setFields] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const data = [
    {
      name: "Yugioh",
      data: [
        {
          label: "Name",
          type: "text",
          default: "Necro Gardna",
          name: "name",
          top: 24,
          left: 38,
          fontSize: 39.5,
          fontColor: "#ffffff",
          fontFamily: "YuGiOhMatrixSC2",
        },
        {
          label: "Artwork",
          type: "file",
          name: "image",
          top: 25.5,
          left: 38,
          right: 38,
          width: 28.25,
        },
        {
          label: "Template",
          type: "select",
          default: "Normal",
          options: [
            { value: "Normal", path: "./yugioh/normal_front.png" },
            { value: "Effect", path: "./yugioh/effect_front.png" },
            { value: "Fusion", path: "./yugioh/fusion_front.png" },
            { value: "Trap", path: "./yugioh/trap_front.png" },
            { value: "Spell", path: "./yugioh/spell_front.png" }
          ],
          name: "template",
          top: 70,
          left: 50,
          fontSize: 18,
          fontColor: "#ffffff",
          fontFamily: "Arial",
        },
        {
          label: "Type",
          type: "text",
          default: "Wyrm/Effect",
          name: "type",
          top: 467,
          left: 38,
          fontSize: 16.25,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSCBold",
        },
        {
          label: "Effect",
          type: "text",
          default:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          name: "effect",
          top: 488,
          left: 38,
          right: 30,
          fontSize: 14,
          lineHeight: 1.2,
          fontColor: "#000000",
          fontFamily: "YuGiOhMatrixBook",
        },
        {
          label: "Level",
          type: "number",
          min: 0,
          max: 12,
          default: 4,
          name: "level",
          step: 1,
          top: 72,
          right: 68,
          width: 28.25,
          image: "./yugioh/level.png",
          direction: "horizontal",
          align: "end",
        },
        {
          label: "Set ID",
          type: "text",
          default: "JU24-00000",
          name: "setId",
          top: 443,
          right: 44,
          textAlign: "end",
          fontSize: 12.5,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSC",
        },
        {
          label: "Attack",
          type: "number",
          default: 2500,
          name: "attack",
          min: 0,
          max: 9999,
          step: 100,
          top: 564,
          left: 263,
          fontSize: 15,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSCBold",
        },
        {
          label: "Defense",
          type: "number",
          default: 3000,
          name: "defense",
          min: 0,
          max: 9999,
          step: 100,
          top: 564,
          left: 350,
          fontSize: 15,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSCBold",
        },
        {
          label: "Serial Number",
          type: "text",
          default: "0123456789 1st Edition",
          name: "serialNumber",
          bottom: 25,
          left: 17,
          fontSize: 12.5,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSC",
        },
      ],
    },
    {
      name: "Lorcana",
      data: [
        {
          label: "Lore",
          type: "number",
          min: 1,
          max: 4,
          default: 2,
          name: "lore",
          step: 1,
          top: 112,
          right: 68,
          width: 28.25,
          image: "./yugioh/level.png",
          direction: "vertical",
          align: "start",
        },
      ],
    },
  ];

  useEffect(() => {
    const initializeFields = () => {
      const initialFields = data[0].data.map((field) => ({
        ...field,
        value: field.default || "",
      }));
      setFields(initialFields);
      setInputValues(
        initialFields.reduce(
          (acc, field) => ({ ...acc, [field.name]: field.default || "" }),
          {}
        )
      );
      loadImage(
        initialFields.find((field) => field.name === "template")?.options?.[0]
          ?.path,
        setTemplateImage
      );
    };

    initializeFields();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => setCardImage(img);
    }
  };

  const changeField = ({ target: { name, value } }) => {
    setInputValues((prev) => ({ ...prev, [name]: value }));

    if (name === "template") {
      const selectedOption = data[0].data
        .find((field) => field.name === name)
        ?.options.find((option) => option.value === value);
      if (selectedOption) loadImage(selectedOption.path, setTemplateImage);
    }

    drawImageAndText(templateImage, cardImage, fields);
  };

  const loadImage = (src, setter) => {
    const img = new Image();
    img.src = src;
    img.onload = () => setter(img);
    img.onerror = (err) => console.error("Error loading image: ", err);
  };

  const drawLevelImages = (ctx, level, x, y, direction, imageSize, align) => {
    const img = new Image();
    img.src = "./yugioh/level.png";
    img.onload = () => {
      for (let i = 0; i < level; i++) {
        const xOffset = direction === "horizontal" ? i * imageSize : 0;
        const yOffset = direction === "horizontal" ? 0 : i * imageSize;
        const xPosition =
          x +
          (direction === "horizontal"
            ? align === "end"
              ? -((level - 1) * imageSize)
              : 0
            : 0);
        ctx.drawImage(img, xPosition, y + yOffset, imageSize, imageSize);
      }
    };
  };

  useEffect(() => {
    drawImageAndText(templateImage, cardImage, fields);
  }, [templateImage, cardImage, fields, inputValues]);

  const drawImageAndText = (templateImg, cardImg, fields) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    if (templateImg) {
      ctx.drawImage(
        templateImg,
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
    }
    if (cardImg) ctx.drawImage(cardImg, 48, 110, 325, 325);

    fields.forEach((field) => {
      const {
        left,
        right,
        top,
        bottom,
        fontSize,
        fontColor,
        fontFamily,
        name,
        image,
        direction,
        align,
      } = field;

      if (image && name === "level" && inputValues[name]) {
        drawLevelImages(
          ctx,
          parseInt(inputValues[name], 10),
          right !== undefined ? canvasRef.current.width - right : left,
          bottom !== undefined ? canvasRef.current.height - bottom : top,
          direction,
          field.width,
          align
        );
        return;
      }

      ctx.fillStyle = fontColor || "white";
      ctx.font = `${fontSize || 20}px ${fontFamily || "Arial"}`;
      ctx.textBaseline = "top";
      const xPosition =
        left !== undefined ? left : canvasRef.current.width - right;
      const yPosition =
        top !== undefined ? top : canvasRef.current.height - (bottom || 0);
      const text = inputValues[name] || "";
      const maxWidth =
        left !== undefined && right !== undefined
          ? canvasRef.current.width - left - right
          : undefined;

      if (maxWidth) {
        wrapText(ctx, text, maxWidth, xPosition, yPosition, fontSize);
      } else {
        ctx.fillText(text, xPosition, yPosition);
      }
    });

    setCanvasPath(canvasRef.current.toDataURL("image/png"));
  };

  const wrapText = (ctx, text, maxWidth, xPosition, yPosition, fontSize) => {
    const words = text.split(" ");
    let currentLine = "",
      lines = [];

    words.forEach((word) => {
      const testLine = currentLine + word + " ";
      if (ctx.measureText(testLine).width > maxWidth && currentLine) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine = testLine;
      }
    });

    if (currentLine) lines.push(currentLine.trim());
    lines.forEach((line, index) =>
      ctx.fillText(line, xPosition, yPosition + index * fontSize)
    );
  };

  const renderInputField = (field) => {
    switch (field.type) {
      case "text":
      case "number":
        return (
          <div key={field.name} className="mb-3">
            <label
              htmlFor={field.name}
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              {field.label}:
            </label>
            <input
              type={field.type}
              name={field.name}
              value={inputValues[field.name] || ""}
              onChange={changeField}
              min={field.min}
              max={field.max}
              step={field.step}
              className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        );
      case "file":
        return (
          <div key={field.name} className="mb-3">
            <label
              htmlFor={field.name}
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              {field.label}:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block w-full cursor-pointer border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:cursor-pointer
    file:me-4
    file:p-2.5
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
            />
          </div>
        );
      case "select":
        return (
          <div key={field.name} className="mb-3">
            <label
              htmlFor={field.name}
              className="block select-none mb-1 text-xs font-medium text-neutral-900 dark:text-neutral-300"
            >
              {field.label}:
            </label>
            <select
              name={field.name}
              value={inputValues[field.name] || ""}
              onChange={changeField}
              className="cursor-pointer bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col bg-neutral-50 dark:bg-neutral-950 overflow-hidden"
      style={{ height: "100vh" }}
    >
      <Header />
      <div className="h-full flex flex-row">
        <div className="py-4 pl-4 h-full w-80 min-w-80">
          <div className="flex flex-col overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-600 shadow-lg rounded-xl p-4 h-full">
            <div className="text-2xl mb-1 dark:text-white select-none">
              Yu-Gi-Oh!
            </div>
            <div className="text-neutral-400 text-sm mb-4 select-none">
              Lorem ipsum dolor sit amet
            </div>
            <div className="w-full rounded-xl p-4 border border-neutral-200 dark:border-neutral-600 relative h-full bg-neutral-950  overflow-y-auto">
              <div className="h-full flex flex-col">
                {fields.map(renderInputField)}
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col">
          yo
          {canvasPath && <CardPage image={canvasPath} />}
          <Footer />
          <canvas
            ref={canvasRef}
            width={421}
            height={614}
            style={{ border: "0px" }}
            className="absolute top-0 right-0 opacity-5  pointer-events-none"
          />
          <img
            src="https://static.wikia.nocookie.net/yugioh/images/4/44/NecroGardna-THSF-EN-SR-1E.png"
            className="absolute top-0 right-0 opacity-0 pointer-events-none"
            width={421}
            height={614}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
