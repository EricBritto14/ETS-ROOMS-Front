import React, { useState } from "react";
import WatchOnIcon from "../../components-icons/WatchOnIcon";
import WatchOffDisabled from "../../components-icons/WatchOffDisabled";

export default function InputPassword(props) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-11/12">
      <input
        className="w-full h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover:bg-gray-100 focus:border-black focus:bg-gray-100 pr-16"
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
      <button
        className="absolute top-0 right-0 w-12 h-full flex items-center justify-center"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? <WatchOnIcon size={30} /> : <WatchOffDisabled size={30} />}
      </button>
    </div>
  );
}
