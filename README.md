# 🎮 Simon Sez — DOM Manipulation Project

A two-player memory game built with vanilla HTML, CSS, and JavaScript.  
Your job is to bring the game to life by writing the JavaScript inside `game.js`.

---

## How to Run It

1. Download the three files and keep them in the **same folder**:
   - `index.html`
   - `game.js`
   - `README.md`

2. Open `index.html` in your browser — that's it, no installs needed.

> **Tip:** If you use VS Code, install the **Live Server** extension and click  
> "Go Live" so the page auto-refreshes every time you save.

---

## How the Game Works

- The computer flashes a sequence of colored squares at you.
- You repeat the sequence by **clicking the squares in order**.
- Press **SPACEBAR** to submit your answer.
- Get it right → the pattern grows by one color and the other player takes a turn.
- Get it wrong → game over, scores reset.

---

## File Overview

| File | What it does |
|------|-------------|
| `index.html` | All the HTML structure and CSS styles. **You don't need to edit this.** |
| `game.js` | All the JavaScript. **This is where you'll be working.** |
| `README.md` | This file. |

---

## Your TODOs

Work through these in order. Each one builds on the last.

---

### ✅ TODO 1 — Click to Light Up

**Where:** `game.js` → the `squares.forEach(...)` block

**What to do:**  
Hook up a click listener to each square. When a square is clicked, it should glow briefly and record the color.

**Steps:**
1. Loop over `squares` using `.forEach()`
2. Add a `click` event listener to each square
3. Inside the listener:
   - Read the color name from `square.dataset.color`
   - Add the `'lit'` class to the square — the CSS handles the glow automatically
   - Push the color name into the `playerInput` array
   - Use `setTimeout` to remove `'lit'` after 300ms

**Concepts practiced:** `querySelectorAll`, `addEventListener`, `classList.add/remove`, `dataset`, `array.push`, `setTimeout`

---

### ✅ TODO 2 — Build and Show the Pattern

**Where:** `game.js` → `flashSquare`, `renderSequenceRow`, and `addToPattern` functions

**What to do:**  
Write the three functions that let the computer play its sequence and show the colored dots at the top.

**`flashSquare(colorName)`**
- Look up the square's element ID using `colorMap[colorName]`
- Add `'lit'`, wait 450ms, then remove `'lit'`
- Return a `Promise` so other code can wait for it to finish

**`renderSequenceRow()`**
- Clear `#sequence-row` by setting `innerHTML = ''`
- For each color in `pattern`, create a `<div>`, add the class `'pip'`, set its `background` using `colorHex[colorName]`, and append it

**`addToPattern()`**
- Pick a random color: `colors[Math.floor(Math.random() * colors.length)]`
- Push it onto `pattern`
- Call `renderSequenceRow()` to update the dots
- Loop through `pattern` and call `flashSquare` for each one, using `setTimeout` with a delay of `650 * index` so they play in sequence — not all at once
- After the last flash, set `accepting = true` so the player can click

**Concepts practiced:** `getElementById`, `classList`, `Promise`, `createElement`, `appendChild`, `style.background`, `Math.random`, chained `setTimeout`

---

### ✅ TODO 3 — Spacebar to Submit

**Where:** `game.js` → the `document.addEventListener('keydown', ...)` block

**What to do:**  
When the player presses Spacebar, check if their clicks match the computer's pattern.

**Steps:**
1. Listen for `'keydown'` on `document`
2. Only act when `e.key === ' '`
3. Call `e.preventDefault()` to stop the page from scrolling
4. Return early if `accepting` is false (not the player's turn)
5. Return early if `playerInput.length < pattern.length` (they haven't clicked enough yet)
6. Use `pattern.every((color, i) => color === playerInput[i])` to compare arrays
7. **If correct:** call `addToPattern()` to start the next round
8. **If wrong:** show an error message and call `resetGame()` after a short delay

**Concepts practiced:** `addEventListener('keydown')`, `e.key`, `e.preventDefault`, `array.every`, conditional logic

---

### ✅ TODO 4 — Turn Counter

**Where:** Inside the "correct answer" branch of your spacebar listener

**What to do:**  
Each time a player gets the sequence right, increment the round number and update the display.

**Steps:**
1. Increment the `turn` variable: `turn++`
2. Update the DOM: `turnCounter.textContent = turn`

**Concepts practiced:** incrementing variables, updating `textContent`

---

### ✅ TODO 5 — Two Player Mode

**Where:** Inside the "correct answer" branch of your spacebar listener, and in `updateScoreboard()`

**What to do:**  
After each correct answer, switch to the other player and track both scores.

**Steps:**
1. Increment `scores[currentPlayer]`
2. Swap the player: `currentPlayer = currentPlayer === 1 ? 2 : 1`
3. Update `playerLabel.textContent` to show the new player
4. In `updateScoreboard()`, set the score text for both cards and use `.classList.toggle('active', ...)` to highlight the active player's card

**Concepts practiced:** object property access, ternary operator, `classList.toggle`

---

## Concepts You'll Use

| Concept | Where it shows up |
|--------|-------------------|
| `document.querySelectorAll` | Grabbing all four squares at once |
| `addEventListener` | Click listeners and keydown |
| `classList.add / remove / toggle` | Lighting up squares, swapping active player |
| `dataset` | Reading `data-color` off each square |
| `setTimeout` | Delayed glow-off, staggered sequence playback |
| `array.push` | Recording player clicks and building the pattern |
| `array.every` | Checking if the player's answer matches exactly |
| `createElement / appendChild` | Building pip divs dynamically |
| `textContent` | Updating turn counter, player label, scores |
| `Promise` | Waiting for a flash to finish before moving on |
| Ternary operator | Swapping between player 1 and 2 |

---

## Stretch Goals (Bonus)

Once all five TODOs are working, try these:

- **Speed it up** — reduce the flash delay each round so it gets harder over time
- **Sound effects** — play a different tone for each color using the Web Audio API
- **High score** — store the best turn count in `localStorage` and show it on the page
- **Animations** — add a CSS shake animation to the grid when the player gets it wrong
- **Mobile support** — make sure touch events work on phones (hint: `touchstart`)
