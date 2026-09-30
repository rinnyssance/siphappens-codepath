# Sip Happens

**Sip Happens** is my version of CodePath WEB102's Unit 3 React forms lab. The original assignment is a barista drink guessing game, and I changed the theme into a margarita recipe guessing game while keeping the React concepts and required functionality from the lesson.

## What the App Does

The app generates a random margarita and asks the player to identify four parts of its recipe: style, flavor, rim, and how it is served. The player makes a guess for each category and checks the answers against the recipe. Each category changes visually to show whether the guess was correct or incorrect, and the player can generate another random drink to try again.

The finished version uses text inputs. The valid choices stay visible below each field. Guesses ignore capitalization and surrounding spaces, but must match one of the listed choices. Incorrect guesses do not reveal the answer. The 12 recipes are the game's definitions, rather than a claim that each drink has only one possible recipe.

## Why I Made It

I wanted to practice the React concepts from this unit while making the assignment feel more like my own project. Changing the theme helped me think about how the same React structure can be reused for a different idea.

While building this project, I practiced:

- React state
- Controlled form inputs
- Reusable components
- Props
- Event handlers
- Rendering data from JSON
- Conditional CSS classes
- Flexbox and responsive CSS

## Required Features

- [x] Displays one random drink at a time
- [x] Provides one choice per recipe category
- [x] Allows the user to select one option from each category
- [x] Checks guesses against the recipe
- [x] Visually identifies correct and incorrect guesses
- [x] Generates a random drink and resets the form

The required radio-button version is saved in commit `e36edf6` (Complete Sip Happens margarita quiz). The stretch version replaces the radio buttons with text fields while keeping the same parent state and checking behavior. Random selection can occasionally pick the same drink again.

## Stretch Features

- [x] Users can type guesses instead of selecting radio buttons
- [x] Typed guesses are validated against the available choices

## Technologies

- React
- JavaScript
- Vite
- CSS
- JSON

## Running the Project

```bash
npm install
npm run dev
```

To check the production build and lint the code:

```bash
npm run build
npm run lint
```

## Code Organization

- `src/App.jsx` renders the header, game, and footer.
- `src/components/BaristaForm.jsx` owns the guesses, random drink, validation, and four correctness states.
- `src/components/RecipeChoices.jsx` renders a reusable controlled input and the valid choices passed through props.
- `src/drinks.json` contains the 12 game recipes.
- `src/App.css` contains the color palette and responsive Flexbox layout.

## Verification

I checked the radio-button version before adding the stretch feature. Browser checks covered independent selections, answer displays, correct and incorrect guesses, retries, and resets. For typed guesses, I checked empty fields, invalid choices, capitalization, surrounding spaces, and valid answers. Both versions were checked at desktop, tablet, and mobile widths without horizontal scrolling or browser errors.

## Walkthrough

GIF/video coming soon.
