import React from "react";

export default function InputTimer({ sizeW, sizeH, value, onChange, options }) {
  return (
    <>
      <select
        className={`${sizeW} ${sizeH} pl-1 rounded outline-none drop-shadow-md text-base text-gray-400 border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100`}
        value={value}
        onChange={onChange}
      >
        {options.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>
    </>
  );
}
