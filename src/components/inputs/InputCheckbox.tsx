import React from "react";

export default function InputCheckbox(props) {
  return (
    <>
      <div className="flex items-center gap-2">
        <input className="w-4 h-4" type="checkbox" value={props.value} onChange={props.onChange} />
        <p className="text-lg">{props.textCheck}</p>
      </div>
    </>
  );
}
