import { Confeti } from '../../components/Confeti';

export function Winner(setMess, setNoPlay, puntosPc, puntosHumano) {
  if (puntosHumano === 5) {
    setMess('¡Juego terminado! ¡Has GANADO la partida!');
    Confeti();
    setNoPlay(true);
  } else if (puntosPc === 5) {
    setMess('¡Juego terminado! ¡la IA ha GANADO la partida! ');
    setNoPlay(true);
  }
}
