import { Confeti } from '../../components/Confeti';

export function Winner(
  setMess,
  // setPuntosHumano,
  // setPuntosPc,
  setNoPlay,
  puntosPc,
  puntosHumano
) {
  if (puntosHumano === 5) {
    setMess('¡Juego terminado! ¡Has GANADO la partida!');
    Confeti();
    // setPuntosHumano(0);
    // setPuntosPc(0);
    setNoPlay(true);
  } else if (puntosPc === 5) {
    setMess('¡Juego terminado! ¡la IA ha GANADO la partida! ');
    // setPuntosHumano(0);
    // setPuntosPc(0);
    setNoPlay(true);
  }
}
