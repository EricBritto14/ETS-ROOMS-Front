import React, { useState } from "react";
import axios from "axios";
import { Box, Modal, Button } from "@mui/material";
import ButtonCancel from "../../button-cancel/ButtonCancel";
import ButtonConfirm from "../../button-confirm/ButtonConfirm";
import InputPassword from "../../inputs/InputPassword";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 430,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: 330,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

export default function DeleteAlert({open, onClose}) {
  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 border-b border-gray-400">
              <h1 className="text-2xl font-normal">Excluir agendamento</h1>
            </div>
            <div className="flex flex-col gap-2 pt-3">
              <h2 className="font-bold text-lg">Escolha uma ação: </h2>
              <div className="flex gap-2">
                <input type="radio" />
                <p className="text-gray-500">Excluir apenas essa ocorrência</p>
              </div>
              <div className="flex gap-2">
                <input type="radio" />
                <p className="text-gray-500">
                  Excluir essa e todas as ocorrências futuras
                </p>
              </div>
              <InputPassword />
            </div>
            <div className="w-full h-full flex justify-between pt-6">
            <ButtonCancel nameButton="Cancelar" />
              <ButtonConfirm
                nameButton="Excluir"
                colorButton="bg-red-600 hover:bg-red-700"
                
                />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
