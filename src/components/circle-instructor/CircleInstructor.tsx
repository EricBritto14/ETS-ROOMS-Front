import React from "react";

interface CardRoomsProps {
  cor: string;
  nome: string;
}

export default function CircleInstructor(props: CardRoomsProps) {
  return (
    <>
      <section className="flex items-center">
        <div style={{ backgroundColor: props.cor }} className={`w-4 h-4 rounded-full`}></div>
        <div className="p-1">
          <div className="text-base text-black">
            <p>{props.nome}</p>
          </div>
        </div>
      </section>
    </>
  );
}
