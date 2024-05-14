/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './selector.css';

export function SelectorGame({ onValueSelected }) {
  const handleRadioChange = async (event) => {
    event.preventDefault();

    const selectedValue = document.querySelector(
      'input[name="radio"]:checked'
    ).value;
    onValueSelected(selectedValue);
    console.log(selectedValue);
  };
  return (
    <div className="container">
      <div className="radio-tile-group">
        <form onSubmit={handleRadioChange}>
          <div className="input-container">
            <input
              id="piedra"
              className="radio-button"
              type="radio"
              name="radio"
              value="piedra"
            ></input>
            <div className="radio-tile">
              <div className="icon piedra-icon">
                <img src="../public/Piedra.jpg" alt="Piedra" />
              </div>
              <label htmlFor="piedra" className="radio-tile-label">
                Piedra
              </label>
            </div>
          </div>

          <div className="input-container">
            <input
              id="papel"
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
              id="tijera"
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
          <div>
            <button
              type="submit"
              id="button"
              //  disabled={noPlay}
            >
              JUGADA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
