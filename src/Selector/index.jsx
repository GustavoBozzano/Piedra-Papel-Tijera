export function SelectorGame() {
  return (
    <div>
      <div className="radio-inputs">
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <span className="radio-tile">
            <span className="radio-icon"></span>
            <span className="radio-label">Piedra</span>
          </span>
        </label>
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <span className="radio-tile">
            <span className="radio-icon"></span>
            <span className="radio-label">Papel</span>
          </span>
        </label>
        <label>
          <input className="radio-input" type="radio" name="engine" />
          <span className="radio-tile">
            <span className="radio-icon"></span>
            <span className="radio-label">Tijera</span>
          </span>
        </label>
      </div>
    </div>
  );
}
