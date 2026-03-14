// ================================================================
//  game.js — Simon Sez
//  All DOM manipulation and game logic lives here.
//  The HTML file (index.html) just has the structure + CSS.
// ================================================================


// ----------------------------------------------------------------
//  DATA — color maps used throughout the game
// ----------------------------------------------------------------

// Which HTML element ID does each color correspond to?
const colorMap = {
  green:  'top-left',
  red:    'top-right',
  yellow: 'bottom-left',
  blue:   'bottom-right',
};

// What hex value should each color's pip display as?
const colorHex = {
  green:  '#39d98a',
  red:    '#f25757',
  yellow: '#f2c94c',
  blue:   '#5b9cf6',
};

// Array of all color names — used to pick a random one
const colors = Object.keys(colorMap); // ['green', 'red', 'yellow', 'blue']


// ----------------------------------------------------------------
//  STATE — variables that track what's happening in the game
// ----------------------------------------------------------------

let pattern       = [];          // the computer's growing color sequence
let playerInput   = [];          // colors the current player has clicked this round
let turn          = 1;           // which round we're on
let currentPlayer = 1;           // whose turn it is: 1 or 2
let scores        = { 1: 0, 2: 0 };
let accepting     = false;       // true only when it's the player's turn to click


// ----------------------------------------------------------------
//  DOM REFERENCES — grab elements we'll update repeatedly
// ----------------------------------------------------------------

const squares     = document.querySelectorAll('.square');
const sequenceRow = document.getElementById('sequence-row');
const turnCounter = document.getElementById('turn-counter');
const playerLabel = document.getElementById('player-label');
const messageEl   = document.getElementById('message');


// ================================================================
//  TODO 1 — CLICK TO LIGHT UP
//
//  Goal: when a player clicks a square, it should glow briefly
//  and record that color as part of their answer.
//
//  How it works:
//    1. Loop over every .square element with forEach
//    2. Add a 'click' event listener to each one
//    3. Inside the listener:
//       a. Read the color name from square.dataset.color
//       b. Add the 'lit' class  →  CSS handles the glow automatically
//       c. Push the color into playerInput[]  →  records the click
//       d. After 300ms, remove 'lit'  →  square goes dim again
//
//  Key concepts: querySelectorAll, addEventListener, classList,
//                dataset, array.push(), setTimeout
// ================================================================

squares.forEach(square => {
  square.addEventListener('click', () => {

    // Only accept clicks when it's the player's turn
    if (!accepting) return;

    const color = square.dataset.color;   // e.g. "green", "red", etc.
    square.classList.add('lit');          // turn on the glow (CSS does the work)
    playerInput.push(color);             // remember this click

    setTimeout(() => {
      square.classList.remove('lit');    // turn off the glow after 300ms
    }, 300);

  });
});


// ================================================================
//  TODO 2 — BUILD AND SHOW THE PATTERN
//
//  Goal: the computer picks a new random color, adds it to the
//  pattern, then flashes the full sequence so the player can watch.
//  The sequence is also shown as colored dots (pips) at the top.
//
//  Three functions work together here:
//
//  flashSquare(colorName)
//    - Looks up which square matches the color
//    - Adds 'lit', waits 450ms, then removes 'lit'
//    - Returns a Promise so we can wait for it to finish
//
//  renderSequenceRow()
//    - Clears #sequence-row
//    - For each color in pattern[], creates a <div class="pip">
//    - Sets pip background to the matching hex color
//    - Appends it to #sequence-row
//
//  addToPattern()
//    - Picks a random color and pushes it onto pattern[]
//    - Calls renderSequenceRow() to update the pip display
//    - Loops through pattern[] and flashes each square in order,
//      using setTimeout with increasing delays (650ms * index)
//    - After the last flash, sets accepting = true so the player can go
//
//  Key concepts: getElementById, classList, Promise, setTimeout,
//                createElement, appendChild, style, array.forEach
// ================================================================

function flashSquare(colorName) {
  const el = document.getElementById(colorMap[colorName]);
  el.classList.add('lit');

  return new Promise(resolve => {
    setTimeout(() => {
      el.classList.remove('lit');
      resolve();
    }, 450);
  });
}

function renderSequenceRow() {
  sequenceRow.innerHTML = '';   // clear any old pips or the placeholder text

  pattern.forEach(colorName => {
    const pip = document.createElement('div');  // make a new <div>
    pip.classList.add('pip');                   // give it the pip class
    pip.style.background = colorHex[colorName]; // color it to match the square
    sequenceRow.appendChild(pip);               // add it to the row
  });
}

function addToPattern() {
  accepting = false;  // lock player clicks while computer plays
  squares.forEach(s => s.classList.add('disabled'));

  // Pick a random color and add it to the sequence
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  pattern.push(randomColor);

  renderSequenceRow();
  setMessage('watch the pattern...', 'var(--muted)');

  // Flash each color in the pattern with a staggered delay
  pattern.forEach((colorName, i) => {
    setTimeout(async () => {
      await flashSquare(colorName);

      // After the very last flash, hand control to the player
      if (i === pattern.length - 1) {
        setTimeout(() => {
          accepting   = true;
          playerInput = [];   // reset their input for this round
          squares.forEach(s => s.classList.remove('disabled'));
          setMessage(`your turn, P${currentPlayer}!`, 'var(--green)');
        }, 300);
      }

    }, 650 * i);  // each flash starts 650ms after the previous one
  });
}


// ================================================================
//  TODO 3 — SPACEBAR TO SUBMIT
//
//  Goal: when the player presses SPACEBAR, compare what they clicked
//  to the computer's pattern. Correct = advance the game.
//  Wrong = show an error and reset.
//
//  How it works:
//    1. Listen for 'keydown' on the document
//    2. Only act when e.key === ' ' (the space bar)
//    3. Call e.preventDefault() so the page doesn't scroll
//    4. Guard: return early if we're not currently accepting input
//    5. Guard: return early if they haven't clicked enough times yet
//    6. Use pattern.every() to check each click matches in order
//    7. If correct   → add score, swap player, increment turn, next round
//    8. If incorrect → flash red, show message, auto-reset after 2.4s
//
//  Key concepts: addEventListener('keydown'), e.key, e.preventDefault,
//                array.every(), ternary operator, setTimeout
// ================================================================

document.addEventListener('keydown', (e) => {

  if (e.key !== ' ') return;   // only care about the spacebar
  e.preventDefault();          // stop the page from scrolling

  if (!accepting) return;      // ignore if it's not the player's turn

  // Player hasn't clicked enough times yet
  if (playerInput.length < pattern.length) {
    setMessage('not enough moves yet!', 'var(--yellow)');
    return;
  }

  // Check every click matches the pattern in order
  const correct = pattern.every((color, i) => color === playerInput[i]);

  if (correct) {

    // ── TODO 4: increment the turn counter ──────────────────────
    // ── TODO 5: swap to the other player   ──────────────────────

    scores[currentPlayer]++;
    updateScoreboard();

    sequenceRow.classList.add('flash-success');
    setTimeout(() => sequenceRow.classList.remove('flash-success'), 700);

    setMessage(`nice one P${currentPlayer}! 🎉`, 'var(--green)');

    // Swap player: if 1 → 2, if 2 → 1
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    // Increment the round counter and update the display
    turn++;
    turnCounter.textContent = turn;
    playerLabel.textContent = currentPlayer;

    setTimeout(() => addToPattern(), 1000);

  } else {

    // Wrong answer — game over
    sequenceRow.classList.add('flash-fail');
    setTimeout(() => sequenceRow.classList.remove('flash-fail'), 700);

    accepting = false;
    squares.forEach(s => s.classList.add('disabled'));
    setMessage(`wrong! P${currentPlayer} out. resetting...`, 'var(--red)');

    setTimeout(() => resetGame(), 2400);

  }
});


// ================================================================
//  HELPER FUNCTIONS
// ================================================================

// Update the message bar text and color
function setMessage(text, color = 'var(--text)') {
  messageEl.textContent = text;
  messageEl.style.color = color;
}

// Refresh the scoreboard and highlight whichever player is active
function updateScoreboard() {
  document.getElementById('score-p1').textContent = scores[1];
  document.getElementById('score-p2').textContent = scores[2];

  // .active adds a green glow border (see CSS)
  document.getElementById('card-p1').classList.toggle('active', currentPlayer === 1);
  document.getElementById('card-p2').classList.toggle('active', currentPlayer === 2);
}

// Reset everything back to the start
function resetGame() {
  pattern       = [];
  playerInput   = [];
  turn          = 1;
  currentPlayer = 1;
  scores        = { 1: 0, 2: 0 };
  accepting     = false;

  turnCounter.textContent = 1;
  playerLabel.textContent = 1;
  updateScoreboard();

  squares.forEach(s => s.classList.remove('disabled', 'lit'));
  sequenceRow.innerHTML = `<span style="font-size:11px; color:var(--muted); font-style:italic;">sequence will appear here</span>`;

  setTimeout(() => addToPattern(), 600);
}

document.getElementById('reset-btn').addEventListener('click', resetGame);


// ================================================================
//  KICK OFF — start the first round when the page loads
// ================================================================

addToPattern();
