import React from "react";

export default function Input(props) {

  if (props.file) {
    return (
    <label>
      <input
        className="hidden"
        type="file"
        required
        multiple
        title="Por favor, preencha este campo."
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => { props.onChange(e.target.files) }}
        maxLength={20}
      />
      <p className={
          `${props.className} flex items-center cursor-pointer w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black bg-slate-300 hover:bg-slate-400 focus:border-black focus:bg-gray-100`
        }
        title="Por favor, preencha este campo."
        >
        {props.placeholder}
        </p>
    </label>
    )
  }

  return (
    <>
      <input
        className={
          `${props.className} w-11/12 h-12 pl-3 flex-shrink-0 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100`
        }
        type={"text"}
        required
        title="Por favor, preencha este campo."
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => { props.onChange(e.target.value) }}
        maxLength={20}
      />
    </>
  );
}
