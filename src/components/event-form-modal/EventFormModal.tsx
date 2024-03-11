import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import InputPassword from "../inputs/InputPassword";
import InputDate from "../inputs/InputDate";
import ButtonCancel from "../button-cancel/ButtonCancel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import InputCheckbox from "../inputs/InputCheckbox";
import InputTimer from "../inputs/InputTimer";
import { InstrutorWithMaterias } from '../../pages/home/Agendar';
import { API_URL } from "../../config";
import axios, { AxiosError } from "axios";
import { MateriaData } from "../../pages/resume-page/ResumePage";
import { formatDate } from "../../utils/date";
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

const EventFormModal = ({
  showForm,
  onClose,
  handleFormSubmit,
  endTime,
  setEndTime,
  selectedDate,
  instrutores,
  local,
  nomeSala
}: {
  instrutores: InstrutorWithMaterias[],
  selectedDate: any,
  setEndTime: any,
  endTime: any,
  handleFormSubmit: any,
  onClose: any,
  showForm: any,
  startTime: any,
  setStartTime: any,
  local: string,
  nomeSala: string
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState(selectedDate);
  const [selectedEndDate, setSelectedEndDate] = useState(selectedDate);
  const [edv, setEdv] = useState("");
  const [startTime, setStartTime] = useState("7:30");
  const [selectedInstrutor, setSelectedInstrutor] = useState<InstrutorWithMaterias | undefined>(instrutores[0]);
  const [selectedMateria, setSelectedMateria] = useState<MateriaData | undefined>(instrutores[0]?.materias[0]);
  const [desc, setDesc] = useState('');
  const [recorrencia, setRecorrencia] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [severity, setSeverity] = useState<"success" | "error">("success");

  const openAlert = (message, _severity: "success" | "error") => {
    setSeverity(_severity);
    setAlertMessage(message);
    setIsAlertOpen(true);
  };

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  useEffect(() => {
    setSelectedInstrutor(instrutores[0]);
    setSelectedMateria(instrutores[0]?.materias[0]);
  }, [instrutores])

  const arredondarTempo = (time) => {
    const timeParts = time.split(":");
    const minutes = parseInt(timeParts[1]);
    const roundedMinutes = Math.ceil(minutes / 30) * 30;
    return `${timeParts[0]}:${roundedMinutes.toString().padStart(2, "0")}`;
  };

  const createEvento = async () => {
    try {
      const payload = {
        descricao: desc,
        data_inicio: formatDate(selectedStartDate),
        data_fim: formatDate(selectedEndDate),
        hora_inicio: startTime,
        hora_fim: endTime,
        local,
        edv,
        nome_sala: nomeSala,
        instrutor: selectedInstrutor?.id_instrutor,
        materia: selectedMateria?.id,
        recorrencia,
        tipo_recorrencia: 'mensal'
    };
    const res = await axios.post(`${API_URL}/evento/`, payload);

    console.log(res.data);
    onClose();
    openAlert("Agendamento realizado com sucesso!", "success");
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      if (error.response?.status == 403) {
        openAlert("EDV não é igual ao do instrutor selecionado", "error");
      }
    }
    // Trate os erros conforme necessário
  }
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

  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const handleCancelConfirmation = () => {
    setIsConfirmationDialogOpen(false);
  };

  return (
    <>
      <Modal
        open={showForm}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-[94%] h-[94%]">
            <div className="w-full h-12 flex justify-between border-b">
              <h1 className="text-2xl font-normal">Solicitar agendamento</h1>
              <p className="text-2xl font-bold">{`${selectedDate.getDate()}, ${selectedDate.toLocaleString(
                "default",
                { month: "short" }
              )}`}</p>
            </div>
            <div className="w-full h-5/6 flex items-center">
              <div className="w-3/6 h-[90%] flex flex-col items-start gap-4">
                <InputSelect
                  options={instrutores ? instrutores.map((ins) => ({
                    label: ins.nome,
                    value: ins.id_instrutor,
                  })): []}
                  onChange={(e) => {
                    setSelectedInstrutor(instrutores?.find(i => i.id_instrutor == e.target.value))
                  }}
                />
                <InputSelect
                  options={selectedInstrutor ? selectedInstrutor.materias.map((mat) => ({
                    label: mat.nome,
                    value: mat.id,
                  })) : []}
                  onChange={(e) => {
                    const ms = selectedInstrutor ? selectedInstrutor.materias : []
                    console.log(ms);
                    const selected = ms.find(mat => mat.id == e.target.value);
                    console.log(selected)
                    setSelectedMateria(selected);
                  }}
                />
                <InputPassword placeholder="*EDV ou senha" value={edv} onChange={(e: any) => setEdv(e.target.value)}/>
                <Input placeholder="*E-mail do responsável" value={selectedInstrutor?.email}/>
                <Input placeholder="Descrição" value={desc} onChange={value => {setDesc(value)}}/>
              </div>
              <div className="w-2/4 h-[90%]">
                <div className="w-full h-2/6">
                  <div className="flex flex-col gap-5">
                    <div className="gap-2">
                      <div className="grid grid-flow-col grid-rows-2 gap-3">
                        <div className="w-full flex items-center gap-3">
                          <p>*Início</p>
                          <InputDate
                            sizeW="w-32"
                            sizeH="h-10"
                            defaultValue={
                              selectedDate.toISOString().split("T")[0]
                            }
                            onChange={(e) => {
                              setSelectedStartDate(e.target.value);
                            }}
                          />
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
                          <InputDate
                            sizeW="w-32"
                            sizeH="h-10"
                            defaultValue={
                              selectedDate.toISOString().split("T")[0]
                            }
                            onChange={(e) => {
                              setSelectedEndDate(e.target.value);
                            }}
                          />
                          <InputTimer
                            sizeW="w-24"
                            sizeH="h-10"
                            value={endTime}
                            options={generateTimeOptions()}
                            onChange={(e) => setEndTime(e.target.value)}
                          />
                          <p className="text-gray-400">30min</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-3/5">
                  <InputCheckbox 
                    value={recorrencia} 
                    onChange={(e) => setRecorrencia(e.target.checked)} 
                    textCheck="Recorrente" 
                    />
                </div>
                <div className="w-full h-full flex justify-between pt-3">
                  <ButtonCancel onClick={onClose} nameButton="Cancelar" />
                  <ButtonConfirm onClick={createEvento} nameButton="Agendar sala" />
                </div>
              </div>
            </div>
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
          severity={severity} // Você pode alterar para 'error', 'warning', 'info' conforme necessário
          onClose={closeAlert}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default EventFormModal;
