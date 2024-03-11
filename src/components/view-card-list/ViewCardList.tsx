import React from "react";
import CardRooms from "../card-rooms/CardRooms";
import { RoomData } from "../../pages/resume-page/ResumePage";

const ViewCardList = ({ name, rooms }: { name: string, rooms: RoomData[] }) => {
  return (
    <article>
      <h1 className="w-80 h-16 text-center bg-slate-100 rounded-t-xl sticky text-2xl pt-4">
        {name}
      </h1>
      <section className="w-80 h-96 rounded-b-xl bg-slate-100 flex items-center flex-col gap-5 overflow-y-scroll">
        {rooms.map((room, index) => (
          <CardRooms
            key={index}
            {...room}
          />
        ))}
      </section>
    </article>
  );
};

export default ViewCardList;
