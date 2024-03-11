import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResumePage from "./pages/resume-page/ResumePage";
import Agendar from "./pages/home/Agendar";
import EditEvent from "./pages/home/EditEvent";
import ModalCadInstructors from "./components/modals/modalCadInstructor";
import ModalCadRoom from "./components/modals/modalCadRoom";
import ModalEditAgendamento from "./components/modals/modalEditAgendamento";
import ModalExcluir from "./components/modals/modalExcluir";
import DeleteAlert from "./components/modals/alerts/DeleteAlert";
import Login from "./components/login-admin/Login";
import EventoTabela from "./pages/PainelAdmin/TabelaEvento"
import TesteCalendario from "./pages/teste-calendario/Calendario"

export default function Router() {

  const chamadaComponent = () => {
    return <ModalCadInstructors open={true} setOpen={() => {}}/>
  }

  const ModalCadRoomO = () => {
    return <ModalCadRoom open={true} setOpen={() => {}}/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Agendar} />
        <Route path="/resumo/:dia" Component={ResumePage} />
        <Route path="/editar" Component={EditEvent} />
        <Route path="/modal4" Component={ModalExcluir} />
        <Route path="/evento-tabela" Component={EventoTabela} />
        <Route path="/painel" Component={Login} />
        <Route path="/modal" Component={chamadaComponent} />
        <Route path="/modal2" Component={ModalCadRoomO} />
        <Route path="/modal3" Component={ModalEditAgendamento} /> 
        {/* Descobrir o pq do ModalEditAgendamento não está funcionando e não ta mostrando nada, assim no on click do nome do instrutor no /editar da para chamar esse agendamento que já está pronto */}
        <Route path="/modao4" Component={TesteCalendario}/>
        {/* <Route path="/delet-alert" Component={DeleteAlert}/>  */}
      </Routes>
    </BrowserRouter>
  );
}
