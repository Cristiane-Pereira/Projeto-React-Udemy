import React from "react";
import ReactDOM from "react-dom";
// import { ThisSetStateBugClass } from "./CodeExemple/ThisSetStateBugClass/ThisSetStateBugClass";
// import HomeComponentClassCards from "./CodeExemple/HomeComponentClassCards/HomeComponentClassCards";
// import FunctionState from "./CodeExemple/FunctionState/FunctionState";
// import StateExemple from "./CodeExemple/State&SetState/States&SetState";
// import MethodsCycleLife from "./CodeExemple/MethodsCycleLife/MethodsCycleLife";
// import DataFetching from "./CodeExemple/DataFetching/DataFetching";
// import Tester from "./Tester";
// import FilterCard from "./CodeExemple/FilterCardClass/FilterCardClass";
import Home from "./Templates/Home/Home";
import "./styles/global-style.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <FunctionState /> -------Trabalhando com State e SetState no componente funcional */}
    {/* <StateExemple /> -------- Trabalhando com State e SetState no componente de classe */}
    {/* <MethodsCycleLife />  --------Trabalhando com Ciclo de vida */}
    {/* <DataFetching /> --------Trabalhando com Fetch consumindo API */}
    {/* <Tester />  -------- arquivo para treinamento*/}
    {/* <FilterCard />  ----------------- filtro de cards no componete de classe */}
    {/* <HomeComponentClassCards /> */}
    {/* <ThisSetStateBugClass numberToIncrement={10} /> ------------- Resolução de atualização do estado DOM através do VirtualDOM do React */}
    
   <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
