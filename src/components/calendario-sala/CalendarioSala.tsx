import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar"; // Importe os outros componentes necessários
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import EventFormModal from "../event-form-modal/EventFormModal";
import InfoSala from '../../components/buttom-infosala/BotaoInfoSala';
import { PiNotePencilBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function CalendarioSala({ sala, instrutores, local }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState("07:30");
  const [endTime, setEndTime] = useState("17:00");


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
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
        <div className="w-full">
          <h1 className="font-bold whitespace-nowrap">{sala.nome_sala}</h1>
        </div>
        <div className="flex gap-3">
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
        tileDisabled={({ date }) => date.getFullYear() !== 2024}
      />
      <EventFormModal
        instrutores={instrutores}
        showForm={showForm}
        onClose={handleCloseForm}
        handleFormSubmit={handleFormSubmit}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
        selectedDate={selectedDate}
        local={local}
        nomeSala={sala.nome_sala}
      />
    </div>
  );
}
