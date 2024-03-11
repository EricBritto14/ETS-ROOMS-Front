import React from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useParams } from "react-router-dom";

export default function DateTimeDisplay() {
  const { dia } = useParams();
  // We do this because otherwise the date would come incorrect in some cases, because of the Conversion to pt-BR 
  const [year, month, day] = (dia ?? '').split('-').map(v => Number(v));
  const currentDate = new Date(year, month - 1, day);
  const formatDate = format(currentDate, "d 'de' MMMM", { locale: ptBR });

  return (
    <div>
      <h1 className="text-2xl font-bold">Resumo do dia {formatDate}</h1>
    </div>
  );
}
