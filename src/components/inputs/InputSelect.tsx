import React from "react";

export default function InputSelect({ options, ...rest }) {
  return (
    <>
      <select
        className="w-11/12 h-12 pl-3 flex-shrink-0 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100"
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}
