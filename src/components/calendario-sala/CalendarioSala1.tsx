import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import EventFormModal from "../event-form-modal/EventFormModal";
import InfoSala from '../buttom-infosala/BotaoInfoSala';
import { PiNotePencilBold } from "react-icons/pi";
import { Link } from "react-router-dom";


export default function CalendarioSala({ sala }) {
  const [disableHeaderClick, setDisableHeaderClick] = useState(false);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState("07:30");
  const [endTime, setEndTime] = useState("17:00");
  const [eventos, setEventos] = useState([]);
  console.log(sala);

  const handleMonthYearClick = () => {
    navigate("/editar");
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const fetchEventos = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/evento/?format=json`
      );
      setEventos(response.data);
    } catch (error) {
      console.error("Erro ao buscar Eventos:", error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setShowForm(false);

    const formData = new FormData(event.target);
    const eventData = {
      nome_responsavel: formData.get("NomeResponsavel"),
      nome_evento: formData.get("eventName"),
      edv_cliente: formData.get("edv"),
      email: formData.get("responsible"),
      descricao: formData.get("description"),
      data_fim: formData.get("datainicio"),
      data_inicio: formData.get("datafim"),
      hora_inicio: formData.get("startTime"),
      hora_fim: formData.get("endTime"),
    };

    try {
      await axios.post(`http://127.0.0.1:8000/evento/`, eventData);
      fetchEventos();
    } catch (error) {
      console.error("Erro ao enviar Evento:", error);
    }
  };

  const handleDateClick = (value) => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (value.getDay() === 6 || value.getDay() === 0 || value < currentDate) {
      return;
    }

    setSelectedDate(value);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <div className="flex items-center">
        <div className="w-full" onClick={handleMonthYearClick}>
          <h1 className="font-bold whitespace-nowrap">{sala.nome_sala}</h1>
        </div>
        <div className="flex gap-3">
          <Link to={"/edit"}>
            <PiNotePencilBold />
          </Link>
          <InfoSala {...sala} />
        </div>
      </div>
       <Calendar
        className="rounded-lg shadow-md p-2 h-65"
        prev2Label={null}
        next2Label={null}
        prevLabel={<MdKeyboardArrowLeft className="text-4xl text-gray-500" />}
        nextLabel={<MdKeyboardArrowRight className="text-4xl text-gray-500" />}
        onChange={handleDateClick}
        value={selectedDate}
        //tileDisabled null
        />  

      <EventFormModal 
        showForm={showForm}
        onClose={handleCloseForm}
        handleFormSubmit={handleFormSubmit}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        selectedDate={selectedDate} 
        instrutores={[]} //alteração - adicionado
        local={""} //alteração - adicionado
        nomeSala={""} //alteração - adicionado
        />
        
    </div>
  );
}
