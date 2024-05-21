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
      <h4>
        <u>Tú:</u> {playHumano}
      </h4>
      <img src={showIconHuman} alt="Icono seleccionado del Jugador" />
      <h4>
        <hr />
        <u>"IA":</u> {playPc}
      </h4>
      <img src={showIconPc} alt="Icono seleccionado por IA" />
    </div>
  );
}
