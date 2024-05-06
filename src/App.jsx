/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Modal from './Modal';
import { Dialog } from './Dialog';
import './App.css';
import { SelectorGame } from './Selector';

function App() {
  let jugadaPc = '';
  let jugadaHumano = '';

  const [playHumano, SetPlayHumano] = useState(); // JUGADA HUMANO
  const [playPc, SetPlayPc] = useState(); // JUGADA PC
  const [puntosHumano, SetPuntosHumano] = useState(0); // PUNTAJE HUMANO
  const [puntosPc, SetPuntosPc] = useState(0); // PUNTAJE PC
  const [noPlay, SetNoPlay] = useState(true); //  DESHABILITAR BOTON DE JUGAR
  const [showModal, setShowModal] = useState(false); // MODAL
  const [mess, SetMess] = useState(); // MENSAJE EN EL MODAL

  //  ONCHANGE DEL SELECT  //
  const handleChange = async (e) => {
    SetNoPlay(false);
  };

  //  ONSUBMIT DEL BOTON  //
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    SetMess('');

    try {
      //      //    jugada seleccionada por el Usuario   //
      jugadaHumano = document.getElementById('playHuman').value;
      if (!jugadaHumano) {
        SetNoPlay(true);
      } else {
        SetNoPlay(false);
      }
      console.log('la jugada del humano es: ', jugadaHumano);
      SetPlayHumano(jugadaHumano);

      //      //    jugada automatica por el Ordenador   //
      let playerPc = Math.floor(Math.random() * 3 + 1);
      switch (playerPc) {
        case 1:
          jugadaPc = 'piedra';
          break;
        case 2:
          jugadaPc = 'papel';
          break;
        case 3:
          jugadaPc = 'tijera';
          break;
        default:
          break;
      }
      console.log('la jugada del ordenador es: ', jugadaPc);
      SetPlayPc(jugadaPc);
    } catch (error) {
      console.log(error);
      setShowModal(true);
    }
    //    //     LOGICA DEL PUNTAJE    //
    if (jugadaPc == jugadaHumano) {
      console.log('EMPATE, sigamos participando..!!');
      setShowModal(true);
      SetMess('EMPATE..!!');
    }

    if (jugadaHumano == 'piedra' && jugadaPc == 'tijera') {
      SetPuntosHumano((puntosHumano) => puntosHumano + 1);
      console.log(`PUNTO PARA HUMANO`);
      SetMess('PUNTO para tí..!!');
    } else if (jugadaHumano == 'papel' && jugadaPc == 'piedra') {
      SetPuntosHumano((puntosHumano) => puntosHumano + 1);
      console.log(`PUNTO PARA HUMANO`);
      SetMess('PUNTO para tí..!!');
    } else if (jugadaHumano == 'tijera' && jugadaPc == 'papel') {
      SetPuntosHumano((puntosHumano) => puntosHumano + 1);
      console.log(`PUNTO PARA HUMANO`);
      SetMess('PUNTO para tí..!!');
    }
    console.log('puntos para Humano: ', puntosHumano);

    if (jugadaPc == 'piedra' && jugadaHumano == 'tijera') {
      SetPuntosPc((puntosPc) => puntosPc + 1);
      console.log(`PUNTO PARA PC`);
      SetMess('PUNTO para PC..!!');
    } else if (jugadaPc == 'papel' && jugadaHumano == 'piedra') {
      SetPuntosPc((puntosPc) => puntosPc + 1);
      console.log(`PUNTO PARA PC`);
      SetMess('PUNTO para PC..!!');
    } else if (jugadaPc == 'tijera' && jugadaHumano == 'papel') {
      SetPuntosPc((puntosPc) => puntosPc + 1);
      console.log(`PUNTO PARA PC`);
      SetMess('PUNTO para PC..!!');
    }
    console.log('puntos para PC: ', puntosPc);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="table">
      <form onSubmit={handleSubmit}>
        <div className="card">
          <h1>JUGUEMOS:</h1>
          <label htmlFor="human">Selecciona tu jugada: </label>
          {/* <select
            name="human"
            id="playHuman"
            defaultValue={''}
            onChange={handleChange}
          >
            <option value="" disabled>
              Elije
            </option>
            <option value="piedra">Piedra</option>
            <option value="papel">Papel</option>
            <option value="tijera">Tijera</option>
          </select> */}
          <SelectorGame SetPlayHumano="jugada" />
        </div>
        <div>
          <button type="submit" id="button" disabled={noPlay}>
            JUGADA
          </button>
        </div>
        <div className="playCard">
          <h3>ULTIMA Jugada Humano: {playHumano}</h3>
          <h3>ULTIMA Jugada Ordenador: {playPc}</h3>
        </div>
        <div className="pointsGame">
          <h2>Total Puntos Humano: {puntosHumano}</h2>
          <h2>Total Puntos Ordenador: {puntosPc}</h2>
        </div>
        {showModal && (
          <Modal onClick={handleModalClose}>
            <Dialog message={mess} />
            <button onClick={handleModalClose}>Cerrar</button>
          </Modal>
        )}
      </form>
    </div>
  );
}

export default App;
