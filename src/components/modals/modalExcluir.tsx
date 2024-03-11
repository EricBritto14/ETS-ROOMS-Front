import React, { useState } from "react";
import TrashIcon from "../../components-icons/TrashIcon";

function MiniModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>Conteúdo do mini modal aqui.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MiniModal;
