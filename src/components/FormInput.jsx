import { useState } from "react";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="flex flex-col w-[280px]">
      <label className="text-xs text-gray-700">{label}</label>
      <input
        className="p-[15px] my-[10px] rounded-[5px] border border-gray-200 focus:border-red-600"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="text-xs p-[3px] text-red-600 hidden focus:block">
        {errorMessage}
      </span>
    </div>
  );
};

export default FormInput;
