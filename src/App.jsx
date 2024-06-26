/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Modal from './components/Modal';
import { Dialog } from './utils/Dialog';
import { Pointer } from './utils/Pointer';
import { Winner } from './utils/Winner';
import './App.css';

function App() {
  let jugadaPc = '';
  let jugadaHumano = '';

  const [playHumano, setPlayHumano] = useState(''); // JUGADA HUMANO
  const [playPc, setPlayPc] = useState(''); // JUGADA PC
  const [puntosHumano, setPuntosHumano] = useState(0); // PUNTAJE HUMANO
  const [puntosPc, setPuntosPc] = useState(0); // PUNTAJE PC
  const [noPlay, setNoPlay] = useState(true); //  DESHABILITAR BOTON DE JUGAR
  const [showModal, setShowModal] = useState(false); // MODAL
  const [mess, setMess] = useState(''); // MENSAJE EN EL MODAL
  const [showIconHuman, setShwoIconHuman] = useState(''); // ICONO PARA EL USUARIO
  const [showIconPc, setShowIconPc] = useState(''); // ICONO PARA LA IA

  ///////////////////////////////////////////////////   BOTON DE RESET    ////////////////////////////////////////////
  const resetGame = async (e) => {
    e.preventDefault();
    window.location.reload();
  };
  ///////////////////////////////////////////////////  ONCHANGE DEL SELECT  ////////////////////////////////////////////
  const handleChange = async () => {
    setNoPlay(false);
  };

  ////////////////////////////////////////////////////  ONSUBMIT DEL BOTON  ////////////////////////////////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMess('');
    setShowModal(true);

    try {
      /////////////////////////    jugada seleccionada por el Usuario   //////////////////////////////////////////////
      jugadaHumano = document.querySelector(
        'input[name="human"]:checked'
      ).value;

      if (!jugadaHumano) {
        setNoPlay(true);
      } else {
        setNoPlay(false);
      }
      console.log('Jugador: ', jugadaHumano);
      setPlayHumano(jugadaHumano);

      //////////////////////////   jugada automatica por el Ordenador  //////////////////////////////////////////////////
      let playerPc = Math.floor(Math.random() * 3 + 1);
      switch (playerPc) {
        case 1:
          jugadaPc = 'PIEDRA';
          break;
        case 2:
          jugadaPc = 'PAPEL';
          break;
        case 3:
          jugadaPc = 'TIJERA';
          break;
        default:
          break;
      }
      console.log('IA: ', jugadaPc);
      setPlayPc(jugadaPc);

      //////////////////////////////////////////   LOGICA DEL PUNTAJE    ///////////////////////////////////////////
      Pointer(
        jugadaPc,
        jugadaHumano,
        setShowModal,
        setMess,
        setShwoIconHuman,
        setShowIconPc,
        setPuntosHumano,
        setPuntosPc,
        puntosHumano,
        puntosPc
      );
      //////////////////////////////////////////   VERIFICACION DEL GANADOR    ///////////////////////////////////////////
      Winner(setMess, setNoPlay, puntosPc, puntosHumano);

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } catch (error) {
      console.log(error);
    }
  };
  /////////////////////////////////////////////////     FUNC PARA CERRAR EL MODAL    ///////////////////////////////////
  const handleModalClose = () => {
    setShowModal(false);
    setShowIconPc('');
    setShwoIconHuman('');
  };

  return (
    <div className="table">
      <form onSubmit={handleSubmit}>
        <h1>JUGUEMOS..!!</h1>
        <div>
          <label htmlFor="human">Selecciona tu jugada: </label>
        </div>
        <div className="radio-input">
          <label>
            <input
              type="radio"
              id="piedra"
              name="human"
              value="PIEDRA"
              onChange={handleChange}
            />
            <span>PIEDRA</span>
          </label>
          <label>
            <input
              type="radio"
              id="papel"
              name="human"
              value="PAPEL"
              onChange={handleChange}
            />
            <span>PAPEL</span>
          </label>
          <label>
            <input
              type="radio"
              id="tijera"
              name="human"
              value="TIJERA"
              onChange={handleChange}
            />
            <span>TIJERA</span>
          </label>
          <span className="selection"></span>
        </div>

        <div>
          <button
            type="submit"
            id="button"
            className="bn632-hover bn26"
            disabled={noPlay}
          >
            JUGADA
          </button>

          <button
            type="button"
            id="reset"
            className="bn632-hover bn27"
            onClick={resetGame}
          >
            REINICIAR
          </button>
        </div>

        <div className="playCard">
          <h3>ULTIMA elección Jugador: {playHumano}</h3>
          <h3>ULTIMA elección "IA": {playPc}</h3>
        </div>

        <div className="pointsGame">
          <p>(el primero que llega a 5 puntos GANA.!!)</p>
          <h2>Total Puntos Humano: {puntosHumano}</h2>
          <h2>Total Puntos "IA": {puntosPc}</h2>
        </div>

        {showModal && (
          <Modal>
            <Dialog
              message={mess}
              playHumano={playHumano}
              playPc={playPc}
              showIconHuman={showIconHuman}
              showIconPc={showIconPc}
            />
            <button onClick={handleModalClose}>Cerrar</button>
          </Modal>
        )}
      </form>
    </div>
  );
}

export default App;
