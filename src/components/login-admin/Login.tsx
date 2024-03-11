import React, { useState } from "react";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import { Button, Input } from "@mui/material";
import InputPassword from "../inputs/InputPassword";

export default function Login() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [inputValue, setInputValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleInputChange = (value) => {
        setInputValue(value);
      };


  return (
    // <div>
    //   <div className="w-full h-screen bg-blue-400">
    //     <div>
    //       <img className="w-full h-full "src="../../../public/fundoLogin.png" alt="" />
    //     </div>
    //   </div>
    // </div>
    <div
      className="w-full h-screen flex justify-center items-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('../../../public/fundoLogin.png')" }}
    >
      <div className="w-96 h-96 bg-white p-10 flex flex-col space-y-9  ">
        
          <h1 className="text-gray-500">EDV: </h1>
          <Input
            inputValue={inputValue}
            onInputChange={handleInputChange}
            placeholder="Digite seu EDV"
          />
          <h1 className="text-gray-500">Senha: </h1>
          <Input
            inputValue={inputValue}
            onInputChange={handleInputChange}
            placeholder="*****"
            type={showPassword ? "text" : "password"}
          />

          <button className="bg-blue-500 w-84 h-12 rounded-lg text-white ">Acessar</button>
         
      </div>
    </div>
  );
}
