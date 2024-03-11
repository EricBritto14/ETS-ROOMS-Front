import React, { useState } from "react";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import InputDisable from "../inputs/InputDisable";
import TrashIcon from "../../components-icons/TrashIcon";
import InputTimer from "../inputs/InputTimer";
import ModalExcluir from "./modalExcluir";
import MiniModal from "./modalExcluir";
import InputCheckbox from "../inputs/InputCheckbox";
import InputSelect from "../inputs/InputSelect";
import InputDate from "../inputs/InputDate";
import { render } from "react-dom";
import DeleteAlert from "./alerts/DeleteAlert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 810,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: 559,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

export default function ModalEditAgendamento() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");

  const testeLixeira = () => {
    alert("Deseja excluir este item?");
  };

  const [startTime, setStartTime] = useState("7:30");
  const [endTime, setEndTime] = useState("17:00");

  const arredondarTempo = (time) => {
    const timeParts = time.split(":");
    const minutes = parseInt(timeParts[1]);
    const roundedMinutes = Math.ceil(minutes / 30) * 30;
    return `${timeParts[0]}:${roundedMinutes.toString().padStart(2, "0")}`;
  };

  function generateTimeOptions() {
    const options: string[] = [];
    const startTime = 7 * 60 + 30;
    const endTime = 17 * 60;
    const interval = 30;
    for (let minutes = startTime; minutes <= endTime; minutes += interval) {
      const hour = Math.floor(minutes / 60);
      const minute = minutes % 60;
      const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      options.push(formattedTime);
    }
    return options;
  }

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const top100Eventos = [
    { label: "Python" },
    { label: "Java" },
    { label: "HTML" },
    { label: "React" },
    { label: "Vue" },
    { label: "SQL" },
    { label: "Banco de dados" },
    { label: "Respbarry Pi" },
    { label: "Arduino" },
    { label: "IA" },
    { label: "C#" },
  ];

  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 bg border-b border-gray-400  flex justify-between">
              <h1 className="text-2xl font-normal">Editar agendamento</h1>
              <button onClick={handleOpenDeleteModal}>
                <TrashIcon size={30} color="#000" />
              </button>
            </div>
            <form className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4">
                <InputDisable value="Leonardo" disabled />
                <InputSelect
                  options={top100Eventos.map((film) => ({
                    label: film.label,
                    value: film.label,
                  }))}
                  onChange={(e) => console.log(e.target.value)}
                />
                {/* {isFormDirty && ( */}

              
                <Input
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  
                  // onChange={handleInputChange}
                  placeholder="*EDV ou senha"
                  required
                  title="Por favor, preencha este campo."
                />

                {/* )} */}
                <InputDisable value="Leonardo.Oliveira@br.bosch.com" disabled />
                <Input
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  placeholder="*Descrição"
                />
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full h-2/6">
                  <div className="flex flex-col gap-5">
                    <div className="gap-2">
                      <div className="grid grid-flow-col grid-rows-2 gap-3">
                        <div className="w-full flex items-center gap-3">
                          <p>*Início</p>
                          <InputDate sizeW="w-32" sizeH="h-10" defaultValue={undefined} onChange={undefined} />
                          <InputTimer
                            sizeW="w-24"
                            sizeH="h-10"
                            value={startTime}
                            options={generateTimeOptions()}
                            onChange={(e) =>
                              setStartTime(arredondarTempo(e.target.value))
                            }
                          />
                        </div>
                        <div className="w-full flex items-center gap-3">
                          <p className="pr-3">*Fim</p>
                          <InputDate sizeW="w-32" sizeH="h-10" defaultValue={undefined} onChange={undefined} />
                          <InputTimer
                            sizeW="w-24"
                            sizeH="h-10"
                            value={endTime}
                            options={generateTimeOptions()}
                            onChange={(e) =>
                              setEndTime(arredondarTempo(e.target.value))
                            }
                          />
                          {/* <p className="text-gray-400">30min</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/5">
                  <InputCheckbox textCheck="Recorrente" />
                </div>
                <div className="w-full h-full flex justify-between pt-3">
                  <ButtonCancel nameButton="Cancelar" />
                  <ButtonConfirm
                    nameButton="Editar"
                    colorButton="bg-blue-500"
                    onClick={undefined}
                  />
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <DeleteAlert open={openDeleteModal} onClose={handleCloseDeleteModal} />
    </>
  );
}
function setError(arg0: string) {
  throw new Error("Function not implemented.");
}

