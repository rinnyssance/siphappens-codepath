export default function RecipeChoices({ handleChange, label, choices, checked }) {
  return <div className="choices" role="group" aria-labelledby={`${label}-heading`}>
    {choices.map((choice) => <label className="choice" key={choice}>
      <input type="radio" name={label} value={choice} checked={checked === choice} onChange={handleChange} />{choice}
    </label>)}
  </div>;
}
