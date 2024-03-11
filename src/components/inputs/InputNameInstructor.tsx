import React from "react";

export default function InputNameInstructor(props) {
  return (
    <>
      <input
        className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100"
        type="text"
        required title="Por favor, preencha este campo."
        placeholder={props.placeholder}
        maxLength={20}
        value={props.inputValue}
        onChange={(e) => props.onInputChange(e.target.value)}
      />
    </>
  );
}
