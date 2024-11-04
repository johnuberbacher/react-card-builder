import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPage from "./components/CardPage";

function App() {
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [fields, setFields] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const data = [
    {
      name: "Yugioh",
      data: [
        {
          label: "Name",
          type: "text",
          default: "Protos Archnemeses",
          name: "name",
          top: 55.5,
          left: 38,
          fontSize: 39.5,
          fontColor: "#ffffff",
          fontFamily: "YuGiOhMatrixSC2",
        },
        {
          label: "Template",
          type: "select",
          default: "Normal",
          options: [
            { value: "Normal", path: "./yugioh/normalfront.png" },
            { value: "Fusion", path: "./yugioh/fusionfront.png" },
          ],
          name: "template",
          top: 100,
          left: 50,
          fontSize: 18,
          fontColor: "#ffffff",
          fontFamily: "Arial",
        },
        {
          label: "Type",
          type: "text",
          default: "Monster/Effect",
          name: "type",
          top: 476,
          left: 32,
          fontSize: 14,
          fontColor: "#000000",
          fontFamily: "YuGiOhStoneSerifSCBold",
        },
        {
          label: "Level",
          type: "number",
          min: 1,
          max: 12,
          default: 4,
          name: "level",
          step: 1,
          top: 112,
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
          top: 453,
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
          top: 576,
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
          top: 576,
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
          bottom: 16.5,
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
    initializeFields();

    const defaultTemplateField = data[0].data.find(
      (field) => field.name === "template"
    );
    const defaultTemplateOption = defaultTemplateField?.options
      ? defaultTemplateField.options[0]
      : null;

    if (defaultTemplateOption) {
      loadImage(defaultTemplateOption.path);
    }
  }, []);

  const initializeFields = () => {
    const initialFields = data[0].data.map((field) => ({
      ...field,
      value: field.default || "",
    }));

    setFields(initialFields);

    const initialInputValues = initialFields.reduce((acc, field) => {
      acc[field.name] = field.default || "";
      return acc;
    }, {});

    setInputValues(initialInputValues);
  };

  const changeField = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "template") {
      const selectedField = data[0].data.find((field) => field.name === name);
      if (selectedField) {
        const selectedOption = selectedField.options.find(
          (option) => option.value === value
        );
        if (selectedOption) {
          loadImage(selectedOption.path);
        }
      }
    }
  };

  const loadImage = (src) => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImage(img);
    };

    img.onerror = (err) => {
      console.error("Error loading image: ", err);
    };
  };

  const drawLevelImages = (ctx, level, x, y, direction, imageSize, align) => {
    const img = new Image();
    img.src = "./yugioh/level.png";

    img.onload = () => {
      for (let i = 0; i < level; i++) {
        const xOffset = direction === "horizontal" ? i * imageSize : 0;
        const yOffset = direction === "horizontal" ? 0 : i * imageSize;

        // Calculate the starting position based on alignment
        const xPosition =
          direction === "horizontal"
            ? x +
              (align === "end" ? -((level - 1) * imageSize) + xOffset : xOffset)
            : x;
        const yPosition = direction === "horizontal" ? y : y + yOffset;

        ctx.drawImage(img, xPosition, yPosition, imageSize, imageSize);
      }
    };
  };

  const drawImageAndText = (img, fields) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

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

      // Skip drawing text if the field has an image
      if (image) {
        // Draw level images if the field has an image and is a number
        if (name === "level" && inputValues[name]) {
          const levelCount = parseInt(inputValues[name], 10);
          const imageSize = field.width; // Size for each level image, based on field settings
          const xPosition = right !== undefined ? canvas.width - right : left;
          const yPosition =
            bottom !== undefined ? canvas.height - bottom : top - 40;

          drawLevelImages(
            ctx,
            levelCount,
            xPosition,
            yPosition,
            direction,
            imageSize,
            align
          );
          setImagePath(canvasRef.current.toDataURL("image/png"));
        }
        return; // Skip further processing for this field
      }

      // Calculate x position based on right or left
      const xPosition = right !== undefined ? canvas.width - right : left;

      // Calculate y position based on top or bottom
      const yPosition = bottom !== undefined ? canvas.height - bottom : top;

      ctx.fillStyle = fontColor || "white";
      ctx.font = `${fontSize || 20}px ${fontFamily || "Arial"}`;

      // Set text alignment based on the presence of right or left
      ctx.textAlign = right !== undefined ? "end" : "start";

      // Draw the text at the calculated position
      ctx.fillText(inputValues[name] || "", xPosition, yPosition);

      setImagePath(canvasRef.current.toDataURL("image/png"));
    });
  };

  useEffect(() => {
    if (image) {
      let imagePath;

      // Check if image is a string containing HTML or a DOM element
      if (typeof image === "string") {
        // Use regex to extract the src from the string
        const srcMatch = image.match(/src=["']([^"']+)["']/);
        imagePath = srcMatch ? srcMatch[1] : "";
      } else if (image instanceof HTMLImageElement) {
        // If image is a DOM element, get the src attribute directly
        imagePath = image.src;
      } else {
        imagePath = ""; // Handle cases where image is neither
      }

      if (imagePath) {
        const img = new Image(); // Create a new Image object
        img.src = imagePath; // Set the source to the extracted path

        // Once the image is loaded, draw it on the canvas
        img.onload = () => {
          setImagePath(imagePath); // Optional: you can still set the image path in state
          drawImageAndText(img, fields); // Pass the Image object to the draw function
        };

        // Handle image loading error if necessary
        img.onerror = (error) => {
          console.error("Error loading image:", error);
        };
      }
    }
  }, [image, inputValues]);

  const renderInputField = (field) => {
    const { label, type, options, name, min, max, step } = field;

    switch (type) {
      case "text":
      case "number":
        return (
          <div className="pb-4" key={name}>
            <label
              htmlFor={name}
              className="block mb-0.5 text-sm font-medium text-gray-900"
            >
              {label}
            </label>
            <input
              type={type}
              id={name}
              min={min}
              max={max}
              step={step}
              name={name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inputValues[name] || ""}
              onChange={changeField}
              required
            />
          </div>
        );

      case "select":
        return (
          <div className="pb-4" key={name}>
            <label
              htmlFor={name}
              className="block mb-0.5 text-sm font-medium text-gray-900"
            >
              {label}
            </label>
            <select
              id={name}
              name={name}
              className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={inputValues[name] || ""}
              onChange={changeField}
            >
              {options.map((option) => (
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
      className="flex flex-col bg-gray-50 overflow-hidden"
      style={{ height: "100vh" }}
    >
      <Header /> 
      <div className="h-full">
        {imagePath && <CardPage image={imagePath} />}

        <canvas
          ref={canvasRef}
          width={421}
          height={614}
          style={{ border: "0px" }}
          className="absolute top-0 left-0 opacity-0"
        />
        <img
          src="https://yugioh-france.fr/wp-content/uploads/2021/12/protos-archnemeses.jpg"
          className="absolute top-0 left-0 opacity-0"
          width={421}
          height={614}
        />
        <div className="absolute top-0 bottom-0 left-0 pt-20 pb-5 pl-5 h-full w-1/4 max-w-[350px]">
          <div className="flex flex-col overflow-hidden bg-white border border-gray-200 shadow-lg rounded-xl p-4 h-full">
            <div className="text-2xl mb-1">Yu-Gi-Oh!</div>
            <div className="text-gray-400 text-sm mb-4">
              Lorem ipsum dolor sit amet
            </div>
            <div className="w-full rounded-xl cursor-pointer p-4 border border-gray-200 relative h-full  overflow-y-auto">
              <div className="h-full flex flex-col">
                {fields.map(renderInputField)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
