/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import './Dialog.css';

export function Dialog({
  message,
  playHumano,
  playPc,
  // winMess,
  // puntosHumano,
  // puntosPc,
  showIconHuman,
  showIconPc,
}) {
  return (
    <div>
      <h3 className="title">{message}</h3>
      <hr />
      <h5>
        <u>Tú:</u> {playHumano}
      </h5>
      <img src={showIconHuman} alt="Icono seleccionado del Jugador" />
      <h5>
        <hr />
        <u>"IA":</u> {playPc}
      </h5>
      <img src={showIconPc} alt="Icono seleccionado por IA" />
    </div>
  );
}
