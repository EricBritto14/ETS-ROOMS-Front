import React from "react";

export default function InputDate({ sizeW, sizeH, defaultValue, onChange }) {
  return (
    <input
      type="date"
      className={`${sizeW} ${sizeH} pl-3 rounded outline-none drop-shadow-md text-base text-gray-400 border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100 `}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}
