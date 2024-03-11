import React, { useEffect, useState } from "react";
// import Calendar from 'react-calendar';
// import CardEdition from "../../components/card-edition";
import axios from "axios";
import { API_URL } from "../../config";

// const ReactCalendar = () => {
//     const [date, setDate] = useState(new Date());

//     const onChange = () => {
//         setDate(date)
//     };


//     return (
//         <div>
//       <Calendar onChange={onChange} value={date} />
//       <CardEdition />
//     </div>
//     );
// };

// export default ReactCalendar;

export interface Instructor {
    nome: string;
    cor: string,
    id_Evento: string;
  }
  
  
  export default function ButtonInfoEdicao() {
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
         <div className='w-4/5 ml-auto mr-auto mt-8'>
             <tbody className="bg-white divide-y divide-gray-200">
              {eventos.map((evento) => (
                <tr key={evento.id_Evento}>
                  <td className="px-6 py-4 whitespace-no-wrap ">{evento.nome}-{evento.cor}</td>
                  {/* <td className="px-6 py-4 whitespace-no-wrap">{evento.cor}</td> */}
                </tr>
              ))}
            </tbody>
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

