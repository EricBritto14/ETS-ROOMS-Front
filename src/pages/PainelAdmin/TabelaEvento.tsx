import React, { useEffect, useState } from 'react';
import { ButtonAdmin } from '../../components/floating-buttom-admin/button';
import { API_URL } from '../../config';
import axios from 'axios';

export interface Evento {
    id_Evento:      string;
    descricao:      string;
    data_inicio:    string;
    data_fim:       string;
    hora_inicio:    string;
    hora_fim:       string;
    local:          string;
    nome_sala:      string;
    historico:      string;
    instrutor:      string;
    materia:        number;
    instrutor_data: InstrutorData;
    materia_data:   MateriaData;
}

export interface InstrutorData {
    id_instrutor: string;
    nome:         string;
    edv:          string;
    email:        string;
    cor:          string;
}

export interface MateriaData {
    id:        number;
    nome:      string;
    instrutor: string;
}

interface EventoTabelaProps {
  eventos: Evento[];
}

const EventoTabela: React.FC<EventoTabelaProps> = ({ eventos }) => {
  return (
    <>
     <ButtonAdmin/>
     <div className='w-4/5 ml-auto mr-auto mt-8'>
        <h1 className='text-2xl font-bold mb-12'>Acompanhe os últimos agendamentos</h1>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider ">
              Nome
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Sala
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Horário
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Evento
            </th>
            <th className="px-6 py-3 bg-zinc-300 text-left text-xs leading-4 font-medium text-black uppercase tracking-wider">
              Histórico
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {eventos.map((evento) => (
            <tr key={evento.id_Evento}>
              <td className="px-6 py-4 whitespace-no-wrap ">{evento.instrutor_data.nome}</td>
              <td className="px-6 py-4 whitespace-no-wrap border-gray-500">{evento.local} - {evento.nome_sala}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{evento.data_inicio} ás {evento.hora_inicio}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{evento.materia_data.nome}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{new Date(evento.historico).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
      
  );
};

function EventoTabelaPage() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/evento/`)
      .then(res => {
        setEventos(res.data);
      });
  }, []);

  return <EventoTabela eventos={eventos} />
}

export default EventoTabelaPage;
