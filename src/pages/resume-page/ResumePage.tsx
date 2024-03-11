import React, { useEffect, useState } from "react";
import Period from "../../components/period/Period";
import ViewCardList from "../../components/view-card-list/ViewCardList";
import AccordInstructors from "../../components/accord-instructors/AccordInstructors";
import axios from "axios";
import { API_URL } from "../../config";
import { useParams } from "react-router-dom";

export interface RoomData {
  id_Evento: string
  descricao: string
  data_inicio: string
  data_fim: string
  hora_inicio: string
  hora_fim: string
  local: string
  nome_sala: string
  historico: string
  instrutor: string
  materia: number
  instrutor_data: InstrutorData
  materia_data: MateriaData
}

export interface InstrutorData {
  id_instrutor: string
  nome: string
  edv: string
  email: string
  cor: string
}

export interface MateriaData {
  id: number
  nome: string
  instrutor: string
}

export default function ResumePage() {
  const [rooms, setRooms] = useState<Record<string, RoomData[]>>({});
  const { dia } = useParams();

  useEffect(() => {
    if (!dia) return;

    axios
      .get(`${API_URL}/evento/?day=${dia}`)
      .then((response) => {

        const newRooms = {};

        for(const room of response.data) {
          if (!newRooms[room.local]) {
            newRooms[room.local] = []
          }

          newRooms[room.local].push(room)
        }

        setRooms(newRooms);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API:", error);
      });
  }, [dia]);

  return (
    <main className="w-4/5 ml-auto mr-auto mt-8">
      {dia ? <Period dia={dia} /> : null}
      <AccordInstructors/>
      <article className="grid grid-flow-col gap-8">
        {Object.entries(rooms).map(([name, _rooms]) => (
          <ViewCardList name={name} rooms={_rooms}/>
        ))}
      </article>
    </main>
  );
}
