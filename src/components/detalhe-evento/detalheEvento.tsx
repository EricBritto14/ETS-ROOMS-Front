import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RoomData } from "../../pages/resume-page/ResumePage";
import ModalEditAgendamento from "../modals/modalEditAgendamento";

const meses = {
  '1': "Janeiro",
  '2': "Fevereiro",
  '3': "Março",
  '4': "Abril",
  '5': "Maio",
  '6': "Junho",
  '7': "Julho",
  '8': "Agosto",
  '9': "Setembro",
  '10': "Outubro",
  '11': "Novembro",
  '12': "Dezembro"
};

function DetalheEvento({
  data_inicio,
  data_fim,
  children,
  descricao,
  hora_fim: finalHorario,
  hora_inicio: inicioHorario,
  nome_sala: nomeSala,
  instrutor_data: instrutor,
  materia_data: materia,
  className
}: RoomData & { children: any, className: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  const inicioDiaSemena = "Segunda-feira";
  const finalDiaSemena = "Segunda-feira";

  const inicioDiaNumerico = data_inicio.split('-').slice(-1)[0];
  const finalDiaNumerico = data_fim.split('-').slice(-1)[0];

  const inicioMes = meses[data_inicio.split('-')[1]];
  const finalMes = meses[data_fim.split('-')[1]];

  const recorrencia = `Ocorre toda ${inicioDiaSemena} das ${inicioHorario?.substring(0, inicioHorario.length - 3)} às ${finalHorario?.substring(0, finalHorario.length - 3)}, de ${inicioDiaNumerico} de ${inicioMes} até ${finalDiaNumerico} de ${finalMes}!`;

  const prédio = "Ca600";

  return (
    <>
      <div
        className={className}
        onClick={openModal}
      >
        {children}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="modal bg-white p-4 rounded-lg w-[400px]">
            <h2 className="text-xl font-semibold pb-2 border-b border-gray-300">
              Detalhes do evento
            </h2>

            <div className="my-4">
              <h1 className="font-bold mb-4">Responsável: {instrutor.nome}</h1>

              <div className="gap-8">
                {/* DATA E HORÁRIO */}
                <div className="flex items-center gap-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1273_4147)">
                      <path
                        d="M11.795 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V11"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14 18C14 19.0609 14.4214 20.0783 15.1716 20.8284C15.9217 21.5786 16.9391 22 18 22C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18C22 16.9391 21.5786 15.9217 20.8284 15.1716C20.0783 14.4214 19.0609 14 18 14C16.9391 14 15.9217 14.4214 15.1716 15.1716C14.4214 15.9217 14 16.9391 14 18Z"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 3V7"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7 3V7"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 11H19"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18 16.496V18L19 19"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1273_4147">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                 
                  <div>
                    <div className="flex gap-2 text-sm">
                      <p className="text-[#71767C] font-bold">De</p>
                      <p>
                        {inicioDiaSemena}, {inicioDiaNumerico} de {inicioMes}
                      </p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <p className="text-[#71767C] font-bold">Até</p>
                      <p>
                        {finalDiaSemena}, {finalDiaNumerico} de {finalMes}
                      </p>
                    </div>
                  </div>

                  
                  <div className="text-[#71767C]">
                    <p>{inicioHorario?.substring(0, inicioHorario.length - 3)}</p>
                    <p>{finalHorario?.substring(0, finalHorario.length - 3)}</p>
                  </div>
                </div>

                 {/* RECORRÊNCIA */}
                {/* <p className="text-xs text-[#A4ABB3] ml-14 mb-4">
                  {recorrencia}
                </p> */}

                {/* SALA E PRÉDIO */}
                <div className="flex gap-8 items-center my-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1273_4155)">
                      <path
                        d="M5 12H3L12 3L21 12H19"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 12H14V16H10V12Z"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1273_4155">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>
                    {nomeSala} - {prédio}
                  </p>
                </div>

                {/* E-MAIL */}
                <div className="flex gap-8 items-center mb-4">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1273_4160)">
                      <path
                        d="M3.5 7.5C3.5 6.96957 3.71071 6.46086 4.08579 6.08579C4.46086 5.71071 4.96957 5.5 5.5 5.5H19.5C20.0304 5.5 20.5391 5.71071 20.9142 6.08579C21.2893 6.46086 21.5 6.96957 21.5 7.5V17.5C21.5 18.0304 21.2893 18.5391 20.9142 18.9142C20.5391 19.2893 20.0304 19.5 19.5 19.5H5.5C4.96957 19.5 4.46086 19.2893 4.08579 18.9142C3.71071 18.5391 3.5 18.0304 3.5 17.5V7.5Z"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 7.5L12.5 13.5L21.5 7.5"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1273_4160">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-[#007BC0] cursor-pointer">{instrutor.email}</p>
                </div>

                {/* NOME DO EVENTO E DESCRIÇÃO */}
                <div className="flex items-center gap-8">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1428_4352)">
                      <path
                        d="M4 6H20"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 12H16"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 18H18"
                        stroke="#007BC0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1428_4352">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>
                    {materia.nome} - {descricao}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-8 justify-end">
              <button
                type="submit"
                className=" text-black rounded-lg p-2 px-4 hover:bg-[#d1d1d182] cursor-pointer"
                onClick={ModalEditAgendamento}
              >
                Editar
              </button>
              <button
                type="submit"
                className="bg-[#007BC0] text-white rounded-lg p-2 px-4 hover:bg-[#00629A] cursor-pointer"
                onClick={handleSubmit}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DetalheEvento;
