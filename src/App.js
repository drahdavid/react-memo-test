import "./App.scss";
import React, { useState, useEffect } from "react";
import Card from "./components/UI/Card";
import CurrentPlayer from "./components/UI/CurrentPlayer";
import Header from "./components/UI/Header";

import cardComparing from "./helpers/cardComparing";

const App = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const [arrDeCartas, setArrDeCartas] = useState([]);

  const [comparacion, setComparacion] = useState([]);

  const [intentos, setIntentos] = useState(0);

  const [reset, setReset] = useState(false);

  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    if (comparacion.length === 2) {
      setTimeout(() => {
        let result = cardComparing(comparacion, arrDeCartas, intentos);

        if (result === "Ganaste") setIntentos(0);
        setComparacion([]);
      }, 700);
      setIntentos(intentos + 1);
    }
  }, [comparacion]);

  const setearBuscando = function (par) {
    if (comparacion.length > 2) return;
    if (par.adivinada) return;

    setIsFlipped(!isFlipped);

    par.flipped = !par.flipped;

    setComparacion([par, ...comparacion]);
  };

  return (
    <>
      <div>
        <Header
          setIntentos={setIntentos}
          intentos={intentos}
          setReset={setReset}
          reset={reset}
          setNewGame={setNewGame}
        ></Header>
        <CurrentPlayer newGame={newGame} intentos={intentos}></CurrentPlayer>

        <Card
          setearBuscando={setearBuscando}
          setReset={setReset}
          comparacion={comparacion}
          setArrDeCartas={setArrDeCartas}
          arrDeCartas={arrDeCartas}
          reset={reset}
        ></Card>
      </div>
    </>
  );
};

export default App;
