import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);
  const [selectedPerson, setSelectedPerson] = useState<any>(String);
  const [selectedRoom, setSelectedRoom] = useState<any>(String);

  const peopleOptions = [
    { value: "Agatha", label: "Agatha" },
    { value: "Camila", label: "Camila" },
    { value: "Cléber", label: "Cléber" },
    { value: "Dani", label: "Dani" },
    { value: "Doná", label: "Doná" },
    { value: "Francis", label: "Francis" },
    { value: "Ianella", label: "Ianella" },
    { value: "Leonardo", label: "Leonardo" },
    { value: "Luca", label: "Luca" },
    { value: "Roberta", label: "Roberta" },
    { value: "Vanessa", label: "Vanessa" },
    { value: "Wilson", label: "Wilson" },
  ];

  const roomOptions = [
    { value: "Lab 01", label: "Lab 01" },
    { value: "Lab 02", label: "Lab 02" },
    { value: "Lab 03", label: "Lab 03" },
    { value: "Lab 04", label: "Lab 04" },
    { value: "Lab 05", label: "Lab 05" },
    { value: "Sala de reunião", label: "Sala de reunião" },
    { value: "Sala verde", label: "Sala verde" },
    { value: "Sala amarela", label: "Sala amarela" },
    { value: "Lab eletrônica", label: "Lab eletrônica" },
    { value: "Lab ETS", label: "Lab ETS" },
  ];

  const allPeopleOption = {
    value: "all",
    label: "Selecionar Todos os instrutores",
  };
  const allRoomOption = { value: "all", label: "Selecionar Todas as salas" };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Data de Início:", dataInicio);
    console.log("Data Final:", dataFinal);
    console.log("Pessoa Selecionada:", selectedPerson);
    console.log("Sala Selecionada:", selectedRoom);
    closeModal();
  };

  const handlePeopleChange = (selectedOptions) => {
    if (selectedOptions.includes(allPeopleOption)) {
      setSelectedPerson(peopleOptions);
    } else {
      setSelectedPerson(selectedOptions);
    }
  };

  const handleRoomChange = (selectedOptions) => {
    if (selectedOptions.includes(allRoomOption)) {
      setSelectedRoom(roomOptions);
    } else {
      setSelectedRoom(selectedOptions);
    }
  };

  return (
    <div>
      <button
        className="bg-[#007BC0] w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#00629A] absolute top-0 right-0 my-24 mr-16"
        onClick={openModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame" clip-path="url(#clip0_1353_3279)">
            <path
              id="Vector"
              d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M7 11L12 16L17 11"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_3"
              d="M12 4V16"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal bg-white p-4 rounded-lg w-[400px]">
            <h2 className="text-xl font-semibold pb-2 border-b border-gray-300">
              Download em Excel
            </h2>
            <div></div>

            <form onSubmit={handleSubmit}>
              {/* INPUTS DE DATA */}
              <div className="flex mt-4 justify-between">
                <div className="mb-4 w-[40%] flex items-center">
                  <label htmlFor="dataInicio" className="block text-sm mr-2">
                    *Início
                  </label>
                  <DatePicker
                    id="dataInicio"
                    selected={dataInicio}
                    onChange={(date) => setDataInicio(date)}
                    dateFormat="dd/MM/yyyy"
                    className="border rounded-lg p-1 w-full text-sm text-center"
                  />
                </div>
                <div className="mb-4 w-[40%] flex items-center">
                  <label htmlFor="dataFinal" className="block text-sm mr-2">
                    *Fim
                  </label>
                  <DatePicker
                    id="dataFinal"
                    selected={dataFinal}
                    onChange={(date) => setDataFinal(date)}
                    dateFormat="dd/MM/yyyy"
                    className="border rounded-lg p-1 w-full text-sm text-center"
                  />
                </div>
              </div>

              {/* INPUT DE INSTRUTOR */}
              <div className="mb-4 ">
                <label
                  htmlFor="person"
                  className="block font-semibold text-sm mb-2"
                >
                  Instrutores
                </label>
                <Select
                  id="person"
                  options={[allPeopleOption, ...peopleOptions]}
                  value={selectedPerson}
                  onChange={handlePeopleChange}
                  isMulti
                />
              </div>

              {/* INPUT DE SALA */}
              <div className="mb-4">
                <label
                  htmlFor="room"
                  className="block font-semibold text-sm mb-2"
                >
                  Salas
                </label>
                <Select
                  id="room"
                  options={[allRoomOption, ...roomOptions]}
                  value={selectedRoom}
                  onChange={handleRoomChange}
                  isMulti
                />
              </div>

              <div className="flex gap-8 justify-end">
                <button
                  type="submit"
                  className=" text-black rounded-lg p-2 px-4 hover:bg-[#d1d1d182] cursor-pointer"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-[#007BC0] text-white rounded-lg p-2 px-4 hover:bg-[#00629A] cursor-pointer"
                  onClick={handleSubmit}
                >
                  Baixar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
