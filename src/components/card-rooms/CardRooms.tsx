import React from "react";
import DetalheEvento from '../detalhe-evento/detalheEvento';
import { RoomData } from "../../pages/resume-page/ResumePage";

function formatarHora(hora: string | null): string {
  if (!hora) return "";

  const [horas, minutos] = hora.split(":");
  const horaFormatada = `${horas}:${minutos}`;

  return horaFormatada;
}

export default function CardRooms(props: RoomData) {
  const hora_inicio = formatarHora(props.hora_inicio);
  const hora_fim = formatarHora(props.hora_fim);

  return (
    <DetalheEvento className="w-5/6 h-1/4 rounded cursor-pointer hover:bg-blue-100 transition-all bg-white p-1 flex shadow-md" {...props}>
        <div style={{ backgroundColor: props.instrutor_data.cor }} className="w-2 h-full rounded-s"></div>
        <div className="w-full h-full p-2 flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-medium">{props.nome_sala}</h1>
            <div className="flex">
              <p>{hora_inicio}</p>
              <p>-</p>
              <p>{hora_fim}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-normal space-y-1">
              Responsável: {props.instrutor_data.nome}
            </p>
          </div>
          <div>
            <p className="text-sm font-light text-gray-700">{props.materia_data.nome}</p>
          </div>
        </div>
    </DetalheEvento>
  );
}
