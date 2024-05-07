/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './selector.css';

export function SelectorGame({ onValueSelected }) {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    onValueSelected(selectedValue);
    console.log(selectedValue);
  };
  return (
    <div className="container">
      <div className="radio-tile-group">
        <form onSubmit={handleRadioChange}>
          <div className="input-container">
            <input
              id="playHuman"
              className="radio-button"
              type="radio"
              name="radio"
              value="piedra"
            ></input>
            <div className="radio-tile">
              <div className="icon piedra-icon">
                <img src="../public/Piedra.jpg" alt="Piedra" />
              </div>
              <label htmlFor="walk" className="radio-tile-label">
                Piedra
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="playHuman"
              className="radio-button"
              type="radio"
              name="radio"
              value="papel"
            ></input>
            <div className="radio-tile">
              <div className="icon papel-icon">
                <img src="../public/Papel.jpg" alt="Papel" />
              </div>
              <label htmlFor="papel" className="radio-tile-label">
                Papel
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="playHuman"
              className="radio-button"
              type="radio"
              name="radio"
              value="tijera"
            ></input>
            <div className="radio-tile">
              <div className="icon tijera-icon">
                <img src="../public/tijera.jpg" alt="Tijera" />
              </div>
              <label htmlFor="tijera" className="radio-tile-label">
                Tijera
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
