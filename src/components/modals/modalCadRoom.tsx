import React, { useEffect, useState } from "react";
import { Box, Modal, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Input from "../inputs/Input";
import InputSelect from "../inputs/InputSelect";
import Carousel from "react-material-ui-carousel";
import ButtonConfirm from "../button-confirm/ButtonConfirm";
import ButtonCancel from "../button-cancel/ButtonCancel";
import { API_URL } from "../../config";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 810,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  height: 580,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  zIndex: "2",
};

export default function ModalCadRoom({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => setOpen(false);
  const [images, setImages] = useState<File[]>([]);
  const [data, setData] = useState({
    nome: "",
    predio: "",
    localizacao: "",
    lotacao: 0,
    computador: 0,
    postosRobotica: 0,
    televisao: 0,
    quadroBranco: 0
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

  useEffect(() => {
    setImages([]);
    setData({
      nome: "",
      predio: "",
      localizacao: "",
      lotacao: 0,
      computador: 0,
      postosRobotica: 0,
      televisao: 0,
      quadroBranco: 0
    });
  }, [open])

  const handleFiles = (files: FileList) => {
    setImages(Array.from(files));
  }

  const handleChange = (name: keyof typeof data, val: string) => {
    setData(p => ({
      ...p,
      [name]: val
    }));
  }

  const submit = async () => {
    const { data: { id_sala } } = await axios.post(`${API_URL}/sala/`, {
      nome_sala: data.nome,
      predio_sala: data.predio,
      localizacao_sala: data.localizacao,
      computador: data.computador,
      quadro_branco: data.quadroBranco,
      televisao: data.televisao,
      capacidade: data.lotacao,
      projetor: data.postosRobotica, // <<<- mudar se pa
    });

    for (const file of images) { 
      const res = await axios.postForm(`${API_URL}/upload/`, {
        file,
        sala_id: id_sala
      });      
      console.log('file response -> ', res.data);
    }

    openAlert("Sala cadastrada com sucesso");
  }

  const predios = [
    { label: "Ca170" },
    { label: "Ca140" },
    { label: "Ca600" },
  ];

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="w-[94%] h-[94%] ">
            <div className="w-full h-12 bg border-b ">
              <h1 className="text-2xl font-normal">Cadastrar sala</h1>
            </div>
            <div className="w-full h-5/6 flex flex-row p-4">

              <div className="w-3/6 flex flex-col items-start gap-3">
                <div className="w-full">
                  <label>Nome</label>
                  <Input placeholder="Sala 2" value={data.nome} onChange={(val) => handleChange("nome", val)} />
                </div>

                <div className="w-full">
                  <label>Prédio</label>
                  <InputSelect
                    placeholder="Prédio"
                    options={predios.map((p) => ({
                      label: p.label,
                      value: p.label,
                    }))}
                    onChange={(e) => handleChange("predio", e.target.value)}
                  />

                </div>
                <div className="w-full">
                  <label>Localização</label>
                  <Input placeholder="Prédio verde" value={data.localizacao} onChange={(val) => handleChange("localizacao", val)} />
                </div>

                <div className="w-full h-3/6  ">
                  <h1 className="text-gray-400 text-sm">
                    Preencha a seguir com as quantidades na sala:
                  </h1>
                  <div className="flex flex-col justify-between mt-4">
                    <ul className="flex flex-col">
                      <div className="w-2/3 h-full flex flex-col gap-2">
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1280_8417)">
                                <path d="M5 7C5 8.06087 5.42143 9.07828 6.17157 9.82843C6.92172 10.5786 7.93913 11 9 11C10.0609 11 11.0783 10.5786 11.8284 9.82843C12.5786 9.07828 13 8.06087 13 7C13 5.93913 12.5786 4.92172 11.8284 4.17157C11.0783 3.42143 10.0609 3 9 3C7.93913 3 6.92172 3.42143 6.17157 4.17157C5.42143 4.92172 5 5.93913 5 7Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1280_8417">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Lotação
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <Input
                              value={data.lotacao}
                              onChange={val => handleChange("lotacao", val)}
                              placeholder="0"
                              className="w-8 h-8 rounded border border-gray-500 flex justify-center items-center text-center" 
                              />
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1280_8431)">
                                <path d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15V5Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7 20H17" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 16V20" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 16V20" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1280_8431">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Computador
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <Input
                              value={data.computador}
                              onChange={val => handleChange("computador", val)}
                            placeholder="0" className="w-8 h-8 rounded border border-gray-500 flex justify-center items-center text-center pl-0" />
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9V10C6 10.2652 5.89464 10.5196 5.70711 10.7071L5 11.4142V13.5858L5.70711 14.2929C5.89464 14.4804 6 14.7348 6 15V18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19H17C17.2652 19 17.5196 18.8946 17.7071 18.7071C17.8946 18.5196 18 18.2652 18 18V15C18 14.7348 18.1054 14.4804 18.2929 14.2929L19 13.5858V11.4142L18.2929 10.7071C18.1054 10.5196 18 10.2652 18 10V9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8H7ZM4.87868 6.87868C5.44129 6.31607 6.20435 6 7 6H17C17.7956 6 18.5587 6.31607 19.1213 6.87868C19.6839 7.44129 20 8.20435 20 9V9.58579L20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V14C21 14.2652 20.8946 14.5196 20.7071 14.7071L20 15.4142V18C20 18.7957 19.6839 19.5587 19.1213 20.1213C18.5587 20.6839 17.7957 21 17 21H7C6.20435 21 5.44129 20.6839 4.87868 20.1213C4.31607 19.5587 4 18.7956 4 18V15.4142L3.29289 14.7071C3.10536 14.5196 3 14.2652 3 14V11C3 10.7348 3.10536 10.4804 3.29289 10.2929L4 9.58579V9C4 8.20435 4.31607 7.44129 4.87868 6.87868Z" fill="#007BC0" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C9 15.4477 9.44772 15 10 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H10C9.44772 17 9 16.5523 9 16Z" fill="#007BC0" />
                              <path d="M8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11C8.22386 11 8 11.2239 8 11.5C8 11.7761 8.22386 12 8.5 12Z" fill="#007BC0" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11C8.22386 11 8 11.2239 8 11.5C8 11.7761 8.22386 12 8.5 12ZM7 11.5C7 10.6716 7.67157 10 8.5 10C9.32843 10 10 10.6716 10 11.5C10 12.3284 9.32843 13 8.5 13C7.67157 13 7 12.3284 7 11.5Z" fill="#007BC0" />
                              <path d="M15.5 12C15.7761 12 16 11.7761 16 11.5C16 11.2239 15.7761 11 15.5 11C15.2239 11 15 11.2239 15 11.5C15 11.7761 15.2239 12 15.5 12Z" fill="#007BC0" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 12C15.7761 12 16 11.7761 16 11.5C16 11.2239 15.7761 11 15.5 11C15.2239 11 15 11.2239 15 11.5C15 11.7761 15.2239 12 15.5 12ZM14 11.5C14 10.6716 14.6716 10 15.5 10C16.3284 10 17 10.6716 17 11.5C17 12.3284 16.3284 13 15.5 13C14.6716 13 14 12.3284 14 11.5Z" fill="#007BC0" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7577 2.02985C8.2935 1.8959 8.83643 2.22166 8.97038 2.75746L9.97038 6.75746C10.1043 7.29325 9.77857 7.83619 9.24277 7.97013C8.70698 8.10408 8.16404 7.77832 8.03009 7.24253L7.03009 3.24253C6.89615 2.70673 7.22191 2.1638 7.7577 2.02985Z" fill="#007BC0" />
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2428 2.02985C16.7786 2.1638 17.1043 2.70673 16.9704 3.24253L15.9704 7.24253C15.8364 7.77832 15.2935 8.10408 14.7577 7.97013C14.2219 7.83619 13.8961 7.29325 14.0301 6.75746L15.0301 2.75746C15.164 2.22166 15.707 1.8959 16.2428 2.02985Z" fill="#007BC0" />
                            </svg>
                            Postos de robótica
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <Input 
                              value={data.postosRobotica}
                              onChange={val => handleChange("postosRobotica", val)}
                            placeholder="0" className="w-8 h-8 rounded border border-gray-500 flex justify-center items-center text-center pl-0" />
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1280_8448)">
                                <path d="M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16 3L12 7L8 3" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1280_8448">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Televisão
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center ">
                            <Input
                              value={data.televisao}
                              onChange={val => handleChange("televisao", val)}
                            placeholder="0" className="w-8 h-8 rounded border border-gray-500 flex justify-center items-center text-center pl-0" />
                          </div>
                        </div>
                        <div className="flex w-full justify-between">
                          <li className="flex items-center gap-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1280_8452)">
                                <path d="M8 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H12C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V17Z" stroke="#007BC0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_1280_8452">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Quadro branco
                          </li>
                          <div className="w-7 h-7 rounded border border-gray-500 flex justify-center items-center">
                            <Input
                              value={data.quadroBranco}
                              onChange={val => handleChange("quadroBranco", val)}
                             placeholder="0" className="w-8 h-8 rounded border border-gray-500 flex justify-center items-center text-center pl-0" />
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <Input className='w-1/5' placeholder="*Cadastre novas imagens da sala +" />
              <Carousel className='w-2/5 bg-pink-300'>
                {salaImages.map((image, index) => (
                  <img className='rounded-md' key={index} src={image} alt={`Imagem ${index + 1}`} />
                ))}
              </Carousel> */}
              <div className=" w-64 h-2/5 space-y-4">
                <div className="w-full">
                  <label>Imagens</label>
                  <Input file className='w-64' placeholder="Selecionar imagens +" onChange={files => handleFiles(files)} />
                </div>
                <Carousel className='w-80 '>
                  {images.map((image, index) => (
                    <img className='rounded-md' key={index} src={URL.createObjectURL(image)} alt={`Imagem ${index + 1}`} />
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="w-full h-full  flex justify-end pt-3">
              <ButtonCancel nameButton="Cancelar" onClick={handleClose}/> 
              <ButtonConfirm nameButton="Cadastrar" onClick={submit} colorButton="bg-blue-500" />
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
          severity="success" // Você pode alterar para 'error', 'warning', 'info' conforme necessário
          onClose={closeAlert}
        >
          {alertMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
