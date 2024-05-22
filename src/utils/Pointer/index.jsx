export function Pointer(
  jugadaPc,
  jugadaHumano,
  iconPapel,
  iconPiedra,
  iconTijera,
  setShowModal,
  setMess,
  setShwoIconHuman,
  setShowIconPc,
  setPuntosHumano,
  setPuntosPc,
  puntosHumano,
  puntosPc
) {
  const sumaPuntosHumano = () => {
    setPuntosHumano(puntosHumano + 1);
  };
  const sumaPuntosPc = () => {
    setPuntosPc(puntosPc + 1);
  };

  if (jugadaPc == jugadaHumano) {
    console.log('EMPATE');
    setShowModal(true);
    setMess('EMPATE, sigamos participando..!!');
    if (jugadaHumano == 'PIEDRA') {
      setShowIconPc(iconPiedra);
      setShwoIconHuman(iconPiedra);
    } else if (jugadaHumano == 'PAPEL') {
      setShowIconPc(iconPapel);
      setShwoIconHuman(iconPapel);
    } else if (jugadaHumano == 'TIJERA') {
      setShowIconPc(iconTijera);
      setShwoIconHuman(iconTijera);
    }
  }

  if (jugadaHumano == 'PIEDRA' && jugadaPc == 'TIJERA') {
    sumaPuntosHumano();
    console.log(`PUNTO PARA JUGADOR`);
    setMess('PUNTO para tí..!!');
    setShwoIconHuman(iconPiedra);
    setShowIconPc(iconTijera);
  } else if (jugadaHumano == 'PAPEL' && jugadaPc == 'PIEDRA') {
    sumaPuntosHumano();
    console.log(`PUNTO PARA JUGADOR`);
    setMess('PUNTO para tí..!!');
    setShwoIconHuman(iconPapel);
    setShowIconPc(iconPiedra);
  } else if (jugadaHumano == 'TIJERA' && jugadaPc == 'PAPEL') {
    sumaPuntosHumano();
    console.log(`PUNTO PARA JUGADOR`);
    setMess('PUNTO para tí..!!');
    setShwoIconHuman(iconTijera);
    setShowIconPc(iconPapel);
  }

  if (jugadaPc == 'PIEDRA' && jugadaHumano == 'TIJERA') {
    sumaPuntosPc();
    console.log(`PUNTO PARA IA`);
    setMess('PUNTO para "IA"..!!');
    setShowIconPc(iconPiedra);
    setShwoIconHuman(iconTijera);
  } else if (jugadaPc == 'PAPEL' && jugadaHumano == 'PIEDRA') {
    sumaPuntosPc();
    console.log(`PUNTO PARA IA`);
    setMess('PUNTO para "IA"..!!');
    setShowIconPc(iconPapel);
    setShwoIconHuman(iconPiedra);
  } else if (jugadaPc == 'TIJERA' && jugadaHumano == 'PAPEL') {
    sumaPuntosPc();
    console.log(`PUNTO PARA IA`);
    setMess('PUNTO para "IA"..!!');
    setShowIconPc(iconTijera);
    setShwoIconHuman(iconPapel);
  }
}
