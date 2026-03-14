// --- THE DATA ---
const xMen = [
  { name: "Logan", alias: "Wolverine", power: 90, mutantLevel: "Alpha" },
  { name: "Scott Summers", alias: "Cyclops", power: 85, mutantLevel: "Alpha" },
  { name: "Jean Grey", alias: "Phoenix", power: 100, mutantLevel: "Omega" },
  { name: "Ororo Munroe", alias: "Storm", power: 95, mutantLevel: "Omega" },
  { name: "Kurt Wagner", alias: "Nightcrawler", power: 75, mutantLevel: "Beta" }
];

const justiceLeague = [
  { hero: "Batman", name: "Bruce Wayne", city: "Gotham", gear: ["Batarang", "Grapple"], intel: 100 },
  { hero: "Superman", name: "Clark Kent", city: "Metropolis", gear: ["Cape"], intel: 80 },
  { hero: "Wonder Woman", name: "Diana Prince", city: "Themyscira", gear: ["Lasso", "Bracers"], intel: 90 },
  { hero: "The Flash", name: "Barry Allen", city: "Central City", gear: ["Running Shoes"], intel: 75 }
];

// --- FUNCTIONS TO COMPLETE ---

function rosterCall(arr) {
  // TODO: Use .forEach() to log: "REAL_NAME, also known as ALIAS."
}

function findOmega(arr) {
  // TODO: Use .filter() to return a new array of only "Omega" level mutants.
}

function getAliasList(arr) {
  // TODO: Use .map() to return an array of JUST the aliases (strings).
}

function cityWatch(arr, cityName) {
  // TODO: Use .find() to return the hero object who lives in the cityName.
}

function averagePower(arr) {
  // TODO: Use a loop to calculate the average power level of the team.
}

function findByGear(arr, tool) {
  // TODO: Use .filter() to find heroes whose gear array .includes(tool).
}

function boostIntel(arr, amount) {
  // TODO: Use .map() to return a new array where everyone's intel is increased by amount.
}

function doesMutantExist(arr, name) {
  // TODO: Use .some() to return true if a mutant with that name exists.
}

function rankPower(arr) {
  // TODO: Use .sort() to return the array from highest power to lowest.
}

function countAllGear(arr) {
  // TODO: Use a loop to count the total number of gear items across the whole team.
}

function sortNames(arr) {
  // TODO: Return an array of hero names sorted A-Z.
}

function getUnderdogs(arr, threshold) {
  // TODO: Return an array of aliases whose power is BELOW the threshold.
}

function getTeamString(arr) {
  // TODO: Use .map() and .join() to return a string of all aliases separated by " | ".
}

function getSmartest(arr) {
  // TODO: Use a loop to find the hero object with the highest intel.
}

function getMetropolisHero(arr) {
  // TODO: Use .filter() to get the hero object from "Metropolis".
}

function recruitMutant(arr, newObj) {
  // TODO: Add newObj to the end of the array and return the new array.
}

function kickWeakest(arr) {
  // TODO: Find the hero with the lowest power and remove them from the array.
}

function isTeamStrong(arr) {
  // TODO: Use .every() to check if EVERY hero has power > 50.
}

function powerSurge(arr) {
  // TODO: For each hero, if power < 90, increase it by 10. Return the new array.
}

function namesToCSV(arr) {
  // TODO: Return a string of all names: "Logan, Scott Summers, Jean Grey"
}

// --- TEST SUITE ---
console.log("🚀 STARTING HERO TEST SUITE...");

function test(title, condition) {
  console.log(condition ? `✅ PASSED: ${title}` : `❌ FAILED: ${title}`);
}

// 1. rosterCall (Manual check)
console.log("--- 1. Roster Call (Manual Check) ---");
rosterCall(xMen);

// 2. findOmega
const omegas = findOmega(xMen);
test("findOmega", omegas && omegas.length === 2 && omegas[0].mutantLevel === "Omega");

// 3. getAliasList
const aliases = getAliasList(xMen);
test("getAliasList", aliases && aliases.includes("Wolverine") && typeof aliases[0] === 'string');

// 4. cityWatch
const gothamHero = cityWatch(justiceLeague, "Gotham");
test("cityWatch", gothamHero && gothamHero.hero === "Batman");

// 5. averagePower
test("averagePower", averagePower(xMen) === 89);

// 6. findByGear
const hasLasso = findByGear(justiceLeague, "Lasso");
test("findByGear", hasLasso && hasLasso.length === 1 && hasLasso[0].hero === "Wonder Woman");

// 7. boostIntel
const smartTeam = boostIntel(justiceLeague, 10);
test("boostIntel", smartTeam && smartTeam[0].intel === 110);

// 8. doesMutantExist
test("doesMutantExist", doesMutantExist(xMen, "Logan") === true && doesMutantExist(xMen, "Magneto") === false);

// 9. rankPower
const ranked = rankPower([...xMen]); // clone so we don't mutate original for other tests
test("rankPower", ranked && ranked[0].power === 100 && ranked[4].power === 75);

// 10. countAllGear
test("countAllGear", countAllGear(justiceLeague) === 6);

// 11. sortNames
const az = sortNames([...xMen]);
test("sortNames", az && az[0].name === "Jean Grey"); // J comes before K, L, O, S

// 12. getUnderdogs
const underdogs = getUnderdogs(xMen, 80);
test("getUnderdogs", underdogs && underdogs.length === 1 && underdogs[0] === "Nightcrawler");

// 13. getTeamString
const teamStr = getTeamString(justiceLeague);
test("getTeamString", teamStr === "Batman | Superman | Wonder Woman | The Flash");

// 14. getSmartest
const smartest = getSmartest(justiceLeague);
test("getSmartest", smartest && smartest.hero === "Batman");

// 15. getMetropolisHero
const clark = getMetropolisHero(justiceLeague);
test("getMetropolisHero", clark && clark[0].hero === "Superman");

// 16. recruitMutant
const newMutant = { name: "Remy LeBeau", alias: "Gambit", power: 85 };
const biggerTeam = recruitMutant([...xMen], newMutant);
test("recruitMutant", biggerTeam && biggerTeam.length === 6 && biggerTeam[5].alias === "Gambit");

// 17. kickWeakest
const smallerTeam = kickWeakest([...xMen]);
test("kickWeakest", smallerTeam && smallerTeam.length === 4 && !smallerTeam.find(m => m.alias === "Nightcrawler"));

// 18. isTeamStrong
test("isTeamStrong", isTeamStrong(xMen) === true);

// BONUSES - Go Back to the Main Room if you get stuck with these two

// 19. findEliteTech(arr)
// MISSION: Find all heroes who have more than 1 piece of gear AND an intel score > 80.
// TODO: Use .filter() with multiple conditions.
function findEliteTech(arr) {
  // Your code here
}

// 20. powerLevelAudit(arr)
// MISSION: The Multiverse is glitching! 
// Return a new array of strings that says: "ALIAS is OMEGA" if power is 95+, 
// "ALIAS is ALPHA" if power is 80-94, and "ALIAS is RECRUIT" for anything else.
// TODO: Use .map() with a conditional (if/else or switch) inside.
function powerLevelAudit(arr) {
  // Your code here
}
