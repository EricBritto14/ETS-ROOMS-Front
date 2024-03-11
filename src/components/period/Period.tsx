import React from "react";
import DateTimeDisplay from "../date-time-display/DateTimeDisplay";
import InputDate from "../inputs/InputDate";

export default function Period({ dia }: { dia: string }) {
  return (
    <section className="w-full ">
      <article className="w-ful flex justify-between">
        <DateTimeDisplay />
        <div className="flex justify-between items-center gap-2">
          <h2 className="p-2">Ver o resumo de outro dia</h2>
          <InputDate
            sizeW="w-32"
            sizeH="h-10"
            defaultValue={dia}
            onChange={(e) => {
              const date = new Date(e.target.value);
              const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
              window.location.href = `/resumo/${day}`;
            }}
          />
        </div>
      </article>
    </section>
  );
}
