import React from "react";

const InputField = ({ type, placeholder, required, onChange, icon }: any) => {
  return (
    <div className="input-1">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      <i className={`fa-solid fa-${icon}`}></i>
    </div>
  );
};

export default InputField;
