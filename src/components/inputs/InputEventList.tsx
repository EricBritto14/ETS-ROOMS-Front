import React, { useState } from "react";
import AddIcon from "../../components-icons/AddIcon";
import DeleteIcon from "../../components-icons/DeleteIcon";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputEventList(props) {
  const [event, setEvent] = useState<string>("");
  const [eventCount, setEventCount] = useState(0); // Contador de matérias adicionadas

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEvent(event.target.value);
  };

  const handleAddEvent = () => {
    if (eventCount < 5) {
      if (event.trim() !== "") {
        if (props.value.includes(event)) {
          toast.error("A matéria já existe na lista!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          props.onChange([...props.value, event]);
          setEventCount(eventCount + 1);
          setEvent(""); // Limpa o campo de entrada após a adição
        }
      }
    } else {
      toast.error("Você já adicionou o máximo de matérias permitidas (5)!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleDeleteEvent = (index: number) => {
    const updatedEventList = props.value.filter((_, idx) => idx !== index);
    props.onChange(updatedEventList);
  };

  return (
    <>
      <div className="w-full h-36">
        <div className="relative flex flex-row">
          <input
            className="w-11/12 h-12 pl-3 rounded outline-none drop-shadow-md text-base border border-gray-500 hover:border-black hover-bg-gray-100 focus-border-black focus-bg-gray-100"
            required
            title="Por favor, preencha este campo."
            type="text"
            value={event}
            onChange={handleInputChange}
            maxLength={25}
            placeholder={props.placeholder}
          />
          <button
            className="absolute top-0 right-0 h-full flex items-center justify-center pr-11"
            onClick={handleAddEvent}
          >
            <AddIcon size={20} />
          </button>
        </div>
        <div className="w-full h-36 overflow-auto">
          <div className="flex justify-center p-3 flex-col gap-3">
            {props.value.map((evt, index) => (
              <div
                className="w-11/12 h-8 text-base pl-2 rounded flex justify-between items-center bg-gray-100"
                key={index}
              >
                {evt}
                <button
                  className="w-10 h-8 p-4 cursor-pointer flex justify-center items-center bg-white"
                  onClick={() => handleDeleteEvent(index)}
                >
                  <p>
                    <DeleteIcon size={24} color="#ED0007" />
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
