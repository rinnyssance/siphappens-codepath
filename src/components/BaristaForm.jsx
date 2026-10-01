import { useState } from 'react';
import RecipeChoices from './RecipeChoices';
import drinksJson from '../drinks.json';
// Pick the opening order once when the app loads.
const openingDrink = drinksJson.drinks[Math.floor(Math.random() * drinksJson.drinks.length)];
export default function BaristaForm() {
  const ingredients = {
    style: ['classic', 'spicy', 'skinny', 'smoky', 'sparkling'],
    flavor: ['lime', 'strawberry', 'mango', 'watermelon', 'peach', 'passionfruit'],
    rim: ['salt', 'tajin', 'sugar', 'chili-lime', 'half-salt', 'none'],
    serve: ['rocks', 'frozen', 'straight-up', 'crushed-ice'],
  };
  const [inputs, setInputs] = useState({ style: '', flavor: '', rim: '', serve: '' });
  const [currentDrink, setCurrentDrink] = useState(openingDrink.name);
  const [trueRecipe, setTrueRecipe] = useState(openingDrink.ingredients);
  const [correctStyle, setCorrectStyle] = useState('');
  const [correctFlavor, setCorrectFlavor] = useState('');
  const [correctRim, setCorrectRim] = useState('');
  const [correctServe, setCorrectServe] = useState('');
  const [errors, setErrors] = useState({});
  const correctness = { style: correctStyle, flavor: correctFlavor, rim: correctRim, serve: correctServe };
  const checkedAll = Object.values(correctness).every(Boolean);
  const perfect = Object.values(correctness).every((value) => value === 'correct');
  function clearFeedback() {
    setCorrectStyle('');
    setCorrectFlavor('');
    setCorrectRim('');
    setCorrectServe('');
  }
  function getNextDrink() {
    const index = Math.floor(Math.random() * drinksJson.drinks.length);
    const drink = drinksJson.drinks[index];
    setCurrentDrink(drink.name);
    setTrueRecipe(drink.ingredients);
  }
  function onNewDrink() {
    setInputs({ style: '', flavor: '', rim: '', serve: '' });
    setErrors({});
    clearFeedback();
    getNextDrink();
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setInputs((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: '' }));
    clearFeedback();
  }
  function onCheckAnswer() {
    // Ignore surrounding spaces and capitalization, but require a listed choice.
    const guesses = {};
    const validationErrors = {};
    for (const category of Object.keys(ingredients)) {
      guesses[category] = inputs[category].trim().toLowerCase();
      if (!ingredients[category].includes(guesses[category])) {
        validationErrors[category] = `Enter a ${category} from the menu below.`;
      }
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      clearFeedback();
      return;
    }
    setCorrectStyle(guesses.style === trueRecipe.style ? 'correct' : 'wrong');
    setCorrectFlavor(guesses.flavor === trueRecipe.flavor ? 'correct' : 'wrong');
    setCorrectRim(guesses.rim === trueRecipe.rim ? 'correct' : 'wrong');
    setCorrectServe(guesses.serve === trueRecipe.serve ? 'correct' : 'wrong');
  }
  return <section aria-label="Guess the margarita recipe">
    <div className="order">
      <div aria-live="polite"><p className="order-label">Bartender, make me a...</p><h2>{currentDrink}</h2></div>
      <button className="another" type="button" onClick={onNewDrink}>Another Round 🍋‍🟩</button>
    </div>
    <div className="instructions"><p>Four little guesses. One perfect margarita.</p><span>Type one choice from each menu.</span></div>
    <div className="recipe-cards">
      {Object.keys(ingredients).map((category, index) => <section className="recipe-card" key={category} aria-labelledby={`${category}-heading`}>
        <div className="card-heading"><h3 id={`${category}-heading`}>{category}</h3><span className="card-number">0{index + 1}</span></div>
        <div className={`answer ${correctness[category]}`} aria-live="polite"><span>{inputs[category] || 'Your guess…'}</span><small>{correctness[category] === 'correct' ? '✓ Correct' : correctness[category] === 'wrong' ? '↻ Try again' : ''}</small></div>
        <RecipeChoices label={category} choices={ingredients[category]} checked={inputs[category]} handleChange={handleChange} error={errors[category]} />
      </section>)}
    </div>
    <div className="actions">
      <button className="shake" type="button" onClick={onCheckAnswer}>Shake It! 🍹</button>
      <p className="result" role="status">{checkedAll ? (perfect ? 'Perfect pour! 🍹' : 'Almost! Give it another shake.') : ''}</p>
    </div>
  </section>;
}
