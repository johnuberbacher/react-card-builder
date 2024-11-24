import React from "react";

const TextField = ({
  value,
  onChange,
  placeholder,
  type = "text",
  id,
  name,
  className = "",
  required = false,
}) => {
  return (
    <div className={`text-field-container ${className}`}>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-field"
        required={required}
      />
    </div>
  );
};

export default TextField;
