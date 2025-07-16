import React from "react";
// Reusable input field with label, type, and event handling
function InputField({ label, type, name, value, onChange, required }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default InputField;