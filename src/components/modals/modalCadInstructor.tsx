import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Box, Modal, Button } from "@mui/material";
import Input from "../inputs/Input";
import InputNameInstructor from "../inputs/InputNameInstructor";
import InputEventList from "../inputs/InputEventList";
import CircleInstructor from "../circle-instructor/CircleInstructor";
import Colorful from "../colorful/Colorful";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

interface Instructor {
  nome: string;
  edv: string;
  email: string;
  cor: string;
  materias: string[];
}

export default function ModalCadInstructors({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputValue, setInputValue] = useState("");
  const [existingInstructors, setExistingInstructors] = useState<Instructor[]>(
    []
  );
  const [existingColors, setExistingColors] = useState<string[]>([]); // New state for existing colors

  const [formData, setFormData] = useState<Instructor>({
    nome: "",
    edv: "",
    email: "",
    cor: "#000",
    materias: [],
  });
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const openAlert = (message: string) => {
    setAlertMessage(message);
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleColorChange = (color) => {
    setFormData(p => ({...p, cor: color }));
  };

  const handleFormSubmit = async () => {
    if (
      formData.cor.trim() === "" ||
      formData.edv.trim() === "" ||
      formData.email.trim() === "" ||
      formData.materias.length === 0 
    ) {
      alert("Preencha todos os campos obrigatórios.");
    }

    console.log('formdata', formData);
  
    try {
      const response = await axios.post(`${API_URL}/instrutor/`, formData);
      console.log("Cadastro bem-sucedido", response.data);
      openAlert("Instrutor cadastrado com sucesso");
      handleClose();
    } catch (error) {
      console.error("Erro ao cadastrar instrutor", error);
    }
  };

  useEffect(() => {
    // Fazer a solicitação GET à API Django aqui
    axios
      .get(`${API_URL}/instrutor/`)
      .then((response) => {
        const instructors = response.data.map((instructor) => {
          return {
            cor: instructor.cor,
            nome: instructor.nome,
          };
        });

        const colors = instructors.map((instructor) => instructor.cor);

        setExistingInstructors(instructors);
        setExistingColors(colors);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  }, []);

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 border-b border-gray-400">
              <h1 className="text-2xl font-normal">Cadastrar instrutor</h1>
            </div>
            <form className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4">
                <InputNameInstructor
                  inputValue={formData.nome}
                  onInputChange={(value) => handleInputChange("nome", value)}
                  placeholder="*Nome do instrutor"
                />
                <Input
                  value={formData.edv}
                  onChange={(value) => handleInputChange("edv", value)}
                  placeholder="*EDV"
                />
                <Input
                  value={formData.email}
                  onChange={(value) => handleInputChange("email", value)}
                  placeholder="*E-mail do instrutor"
                />
                <InputEventList
                  value={formData.materias}
                  onChange={(value) =>
                    handleInputChange("materias", value)
                  }
                  placeholder="*Adicionar matéria ou evento"
                />
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full grid grid-cols-2">
                  <div>
                    <p className="text-gray-400 text-sm pb-1">Sua Cor:</p>
                    <div className="flex">
                      <CircleInstructor cor={formData.cor} nome={inputValue} />
                      <p>{formData.nome}</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-sm">Mudar Cor:</p>
                    <Colorful
                      selectedColor={formData.cor}
                      onColorChange={handleColorChange}
                    />
                  </div>
                  <div className="grid col-span-2 pt-3">
                    <div className="w-full h-full flex flex-col justify-center">
                      <p className="text-gray-400 text-sm">Cores existentes</p>
                      <div className="h-40 flex flex-wrap pt-1 gap-2">
                        {existingInstructors.map((instructor, index) => (
                          <CircleInstructor
                            key={index}
                            cor={instructor.cor}
                            nome={instructor.nome}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full h-full flex justify-between pt-3">
                      <ButtonCancel
                        nameButton="Cancelar" 
                        onClick={handleClose} //AQUI
                      />
                      <ButtonConfirm
                        nameButton="Cadastrar"
                        onClick={handleFormSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
      <Snackbar
        open={isAlertOpen}
        autoHideDuration={6000} // Controla por quanto tempo o alerta é exibido (em milissegundos)
        onClose={closeAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success" // Você pode alterar para 'error', 'warning', 'info' conforme necessário
          onClose={closeAlert}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
