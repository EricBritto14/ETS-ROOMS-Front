import React, { useEffect, useState } from "react";
import ButtonInfoEdicao from "../pages/teste-calendario/Calendario";

export default function CardEdition() {
  return (
    
    <article className="bg-black rounded text-sm text-black flex h-auto p-3  m-2 cursor-pointer">
        <p className="line-clamp-1">
          <a className="text-lg hover:border-b-2 border-b-black" href={`/modao4`}>
            <ButtonInfoEdicao/>
                </a>
            
        </p>
    </article>
    
  );
}
