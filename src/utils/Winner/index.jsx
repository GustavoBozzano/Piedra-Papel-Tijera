import { Confeti } from '../../components/Confeti';

export function Winner(
  setMess,
  setPuntosHumano,
  setPuntosPc,
  setNoPlay,
  setConfetiOk,
  puntosPc,
  puntosHumano,
  confetiOk
) {
  if (puntosHumano == 5) {
    setConfetiOk(true);
    setMess('¡Juego terminado! ¡Has GANADO la partida!');
    setPuntosHumano(0);
    setPuntosPc(0);
    setNoPlay(true);
  } else if (puntosPc == 5) {
    setConfetiOk(true);
    setMess('¡Juego terminado! ¡la IA ha GANADO la partida! ');
    setPuntosHumano(0);
    setPuntosPc(0);
    setNoPlay(true);
  }
  confetiOk && Confeti();
}
