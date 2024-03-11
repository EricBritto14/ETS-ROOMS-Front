import React, { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "../../config";
import { ButtonAdmin } from '../../components/floating-buttom-admin/button';

export interface Instructor {
    nome: string;
    edv: string;
    id_Evento: string;
  }
  
  
  export default function ButtonInfoAPI() {
    interface EventoTabelaProps {
      eventos: Instructor[];
    }
    // const [instructors, setInstructors] = useState<Instructor[]>([]);
  
    // useEffect(() => {
    //   // Fazer a solicitação GET à API Django aqui
    //   axios
    //     .get(`${API_URL}/instrutor/`)
    //     .then((response) => {
    //       setInstructors(
    //         response.data.map((instructor) => {
    //           return {
                
    //             cor: instructor.cor,
    //             nome: instructor.nome,
    //           };
    //         })
    //       )
    //     })
    //     .catch((error) => {
    //       console.error("Erro ao obter os dados da API:", error);
    //     });
    // }, []);
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
                  EDV
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {eventos.map((evento) => (
                <tr key={evento.id_Evento}>
                  <td className="px-6 py-4 whitespace-no-wrap ">{evento.nome}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{evento.edv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
          
      );
    };
  
  
  
      const [eventos, setEventos] = useState([]);
    
      useEffect(() => {
        axios.get(`${API_URL}/instrutor/`)
          .then(res => {
            setEventos(res.data);
          });
      }, []);
      return <EventoTabela eventos={eventos} />
    }