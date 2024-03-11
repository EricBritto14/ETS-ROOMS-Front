import React, { useState } from "react";

const ImageUploadInput = ({ name, onChange, accept = "image/*" }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const image = reader.result;
      const selectedImage = image;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        onChange={handleImageUpload}
        accept={accept}
      />
      {selectedImage && <img src={selectedImage} alt="Imagem selecionada" />}
    </div>
  );
};

export default ImageUploadInput;
