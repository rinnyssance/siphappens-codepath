export default function RecipeChoices({ handleChange, label, choices, checked, error }) {
  return <div className="typed-choices">
    <label className="input-label" htmlFor={`${label}-guess`}>Your {label} guess</label>
    <input id={`${label}-guess`} type="text" name={label} value={checked}
      onChange={handleChange} placeholder="Guess the ingredient..." autoComplete="off"
      spellCheck={false} aria-invalid={Boolean(error)}
      aria-describedby={`${label}-choices${error ? ` ${label}-error` : ''}`} />
    {error && <p className="validation" id={`${label}-error`} role="alert">{error}</p>}
    <p className="choices-label">ON THE MENU</p>
    <ul className="valid-choices" id={`${label}-choices`}>
      {choices.map((choice) => <li key={choice}>{choice}</li>)}
    </ul>
  </div>;
}
