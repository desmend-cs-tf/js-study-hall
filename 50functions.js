// ============================================================
// ANIME FUNCTIONS — CodeSquad Study Hall
// ============================================================
// STUDENT INSTRUCTIONS:
// ✅ Each function has a TODO comment — that's YOUR job!
// ✅ Read the description + example above the function
// ✅ Run your code in the browser console or Node.js
// ✅ Try it yourself BEFORE reading the hint!
// ============================================================


// ─────────────────────────────────────────────
// 📜 SECTION 1: STRINGS — "Scroll of Names"
// ─────────────────────────────────────────────

/**
 * FN 01 — greetHero
 * Returns a greeting for a given hero name.
 * Example: greetHero("Naruto") → "Believe it! My name is Naruto!"
 */
function greetHero(name) {
  return `Believe it! My name is ${name}!`;
}
console.log(greetHero("Naruto"));
/**
 * FN 02 — makeAnnouncement
 * Combines a hero name and power move into a battle cry — ALL CAPS!
 * Example: makeAnnouncement("Goku", "Kamehameha") → "GOKU UNLEASHES KAMEHAMEHA!"
 */
let hero = "Goku";
let power = "Kamehameha";
function makeAnnouncement(hero, power) {
  let makeAnnouncement = `${hero} unleashes ${power}!`;
  return makeAnnouncement.toUpperCase();
  // TODO: Build the string and return it in UPPERCASE
  // HINT: .toUpperCase()
}
console.log(makeAnnouncement("Goku", "Kamehameha"));
/**
 * FN 03 — reverseJutsu
 * Reverses a jutsu name (some jutsu must be spoken backwards to activate!)
 * Example: reverseJutsu("Rasengan") → "nagnesaR"
 */
let jutsu = "Rasengan";
function reverseJutsu(jutsu) {
  return jutsu.split("").reverse().join("");
  // TODO: Reverse the string and return it
  // HINT: .split(""), .reverse(), .join("")
}
console.log(reverseJutsu("Rasengan"));
/**
 * FN 04 — countVowels
 * Counts how many vowels (a, e, i, o, u) are in a technique name.
 * Example: countVowels("Sharingan") → 3
 */
let vowels = "aeiou";
let count = 0;
function countVowels(technique) {
  for (let i = 0; i < technique.length; i++) {
    if (vowels.includes(technique[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("technique"));
  // TODO: Count and return the number of vowels in the string
  // HINT: loop through each character, check if it's in "aeiou"


/**
 * FN 05 — formatTitle
 * Formats a hero name and title like a manga chapter header.
 * Example: formatTitle("Sasuke", "Avenger") → "Chapter: Sasuke — The Avenger"
 */
let name = "Sasuke";
let title = "Avenger";
function formatTitle(name, title) {
  return `Chapter: ${name} - The ${title}`;
  // TODO: Return the formatted string exactly as shown in the example
}
console.log(formatTitle("Sasuke", "Avenger"));
/**
 * FN 06 — isPalindrome
 * Checks if a technique name reads the same forwards and backwards.
 * Example: isPalindrome("racecar") → true
 * Example: isPalindrome("Naruto") → false
 */
function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  if (word === reversed) {
    return true;
  } else {
    return false;
  }
  // TODO: Return true if the word equals its reverse, false otherwise
  // HINT: compare word to its reversed version (see FN 03!)
}
console.log(isPalindrome("racecar"));
/**
 * FN 07 — shortenName
 * If a hero's name is longer than 8 characters, return the first 8 + "..."
 * Otherwise return the name as-is.
 * Example: shortenName("Kuchiki Byakuya") → "Kuchiki ..."
 * Example: shortenName("Luffy") → "Luffy"
 */
function shortenName(name) {
  if (name.length > 8) {
    return name.slice(0, 8) + "...";
  } else {
    return name;
  }

  // TODO: Check name.length and return the right version
  // HINT: name.slice(0, 8)
}
console.log(shortenName("Kuchiki Byakuya"));
console.log(shortenName("Luffy"));

/**
 * FN 08 — containsJutsu
 * Returns true if the word "jutsu" appears anywhere in the text (case-insensitive).
 * Example: containsJutsu("Shadow Clone Jutsu") → true
 * Example: containsJutsu("Rasengan") → false
 */
function containsJutsu(text) {
  if (text.toLowerCase().includes("jutsu")) {
    return true;
  } else {
    return false;
  }
  // TODO: Return true if "jutsu" is found in the lowercased text
  // HINT: .toLowerCase().includes("jutsu")
}
console.log(containsJutsu("Shadow Clone Jutsu"));


// ─────────────────────────────────────────────
// ⚡ SECTION 2: NUMBERS — "Power Levels"
// ─────────────────────────────────────────────

/**
 * FN 09 — calculatePowerLevel
 * Adds attack and defense to get a total power level.
 * Example: calculatePowerLevel(4500, 3200) → 7700
 */
let attack = 4500;
let defense = 3200;
function calculatePowerLevel(attack, defense) {
  return attack + defense;
  // TODO: Return attack + defense
}
console.log(calculatePowerLevel(4500, 3200));

/**
 * FN 10 — isOverNineThousand
 * Returns true if the power level is strictly over 9000.
 * Example: isOverNineThousand(9001) → true
 * Example: isOverNineThousand(9000) → false
 */
let powerLevel = 9001;
function isOverNineThousand(powerLevel) {
  if (powerLevel >9000) {
    return true;
  } else {
    return false;
  }
}
console.log(isOverNineThousand(9001));
console.log(isOverNineThousand(9000));

/**
 * FN 11 — chakraRemaining
 * Subtracts a technique's cost from current chakra.
 * If the result is negative, return 0 instead.
 * Example: chakraRemaining(200, 75) → 125
 * Example: chakraRemaining(30, 75)  → 0
 */


function chakraRemaining(currentChakra, techniqueCost) {
  return Math.max(0, currentChakra - techniqueCost);
  // TODO: Subtract and guard against going below 0
  // HINT: Math.max(0, currentChakra - techniqueCost)

}
console.log(chakraRemaining(20, 41));
/**
 * FN 12 — levelUpStat
 * Increases a stat by 10% after a level up, rounded to nearest whole number.
 * Example: levelUpStat(50) → 55
 * Example: levelUpStat(33) → 36
 */
function levelUpStat(stat) {
  // TODO: Multiply by 1.1, round and return
  // HINT: Math.round()
  return Math.round(stat * 1.1);
}
console.log(levelUpStat(50));
/**
 * FN 13 — randomEnemyLevel
 * Returns a random integer between min and max (both inclusive).
 * Example: randomEnemyLevel(1, 100) → some number 1–100
 */
function randomEnemyLevel(min, max) {
  // TODO: Return a random integer in the given range
  // HINT: Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomEnemyLevel(1, 100));
/**
 * FN 14 — clampHP
 * Clamps a HP value so it's never below 0 or above maxHP.
 * Example: clampHP(120, 100) → 100
 * Example: clampHP(-10, 100) → 0
 * Example: clampHP(75, 100)  → 75
 */
function clampHP(hp, maxHP) {
  if (hp < 0) {
    return 0;
  } else if (hp > maxHP) {
    return maxHP;
  } else {
    return hp;
  }
}
console.log(clampHP(120, 100));
// TODO: Return hp, but clamped between 0 and maxHP
  // HINT: if/else if/else — check both boundaries
// ─────────────────────────────────────────────
// 📋 SECTION 3: ARRAYS — "The Ninja Squad"
// ─────────────────────────────────────────────

/**
 * FN 15 — listSquad
 * Returns a sentence listing all squad members.
 * Example: listSquad(["Naruto", "Sasuke", "Sakura"]) → "Your squad: Naruto, Sasuke, Sakura"
 */
function listSquad(members) {
  return `Your squad: ${members.join(", ")}`;
  // TODO: Return the formatted string
  // HINT: .join(", ")
}
console.log(listSquad(["Naruto", "Sasuke", "Sakura"]));
/**
 * FN 16 — addMember
 * Adds a new member to the squad and returns the updated array.
 * Example: addMember(["Naruto"], "Sasuke") → ["Naruto", "Sasuke"]
 */
let squad = ["Naruto", "Sasuke", "Sakura"];
function addMember(squad, newMember) {
  squad.push(newMember);
  return squad;
  // TODO: Push newMember to squad and return the array
}
console.log(addMember(squad, "Fishman"));
/**
 * FN 17 — removeMember
 * Removes the first member (they went rogue!) and returns the rest.
 * Example: removeMember(["Sasuke", "Itachi", "Orochimaru"]) → ["Itachi", "Orochimaru"]
 */
function removeMember(squad) {
  squad.shift();
  return squad;
  // TODO: Remove the first element and return the remaining array
  // HINT: .shift()
}
console.log(removeMember(squad));
/**
 * FN 18 — findStrongest
 * Returns the highest power level in the array.
 * Example: findStrongest([300, 9001, 450, 7200]) → 9001
 */
function findStrongest(powerLevels) {
  return Math.max(...powerLevels);
  // TODO: Return the max value
  // HINT: Math.max(...powerLevels)
}
console.log(findStrongest([300, 9001, 450, 7200]));
/**
 * FN 19 — filterSRank
 * Keeps only power levels above 5000.
 * Example: filterSRank([1000, 6000, 3000, 8000]) → [6000, 8000]
 */
function filterSRank(powerLevels) {
  return powerLevels.filter(level => level > 5000)
  // TODO: Return only values greater than 5000
  // HINT: .filter()
}
console.log(filterSRank([1000, 6000, 3000, 8000]));

/**
 * FN 20 — totalTeamPower
 * Returns the sum of all power levels in the array.
 * Example: totalTeamPower([1000, 2000, 3000]) → 6000
 */
function totalTeamPower(powerLevels) {
  let total = 0
  for (let i = 0; i < powerLevels.length; i++) {
    total += powerLevels[i];
  }
  return total;
  // TODO: Add up all elements and return the total
  // HINT: a for loop with a running total variable works great here
}
console.log(totalTeamPower([1000,2000,3000]));
/**
 * FN 21 — uniqueTechniques
 * Removes duplicate technique names.
 * Example: uniqueTechniques(["Rasengan", "Rasengan", "Chidori"]) → ["Rasengan", "Chidori"]
 */
function uniqueTechniques(techniques) {
  return [...new Set(techniques)]
  // TODO: Return a new array with no duplicates
  // HINT: [...new Set(techniques)]
}
console.log(uniqueTechniques(["Rasengan", "Rasengan", "Chidori"]));
/**
 * FN 22 — sortByPower
 * Sorts an array of hero objects by power level, highest first.
 * Example: sortByPower([{name:"Goku", power:9000}, {name:"Frieza", power:5000}])
 *          → [{name:"Goku", power:9000}, {name:"Frieza", power:5000}]
 */
function sortByPower(heroes) {
  return heroes.sort((a, b) => b.power - a.power);
  // TODO: Sort heroes by .power descending
  // HINT: .sort((a, b) => b.power - a.power)
}
console.log (sortByPower([{name:"Goku", power:9000}, {name:"Frieza", power:5000}]));
/**
 * FN 23 — getAllNames
 * Returns an array of just the name strings from an array of character objects.
 * Example: getAllNames([{name:"Luffy", power:8000}, {name:"Zoro", power:7500}])
 *          → ["Luffy", "Zoro"]
 */
function getAllNames(characters) {
  return characters.map(c => c.name)
  // TODO: Return an array of just the .name values
  // HINT: .map(c => c.name)
}
console.log(getAllNames([{name:"Luffy", power:8000}, {name:"Zoro", power:7500}]));

// ─────────────────────────────────────────────
// 🗂 SECTION 4: OBJECTS — "The Bingo Book"
// ─────────────────────────────────────────────

/**
 * FN 24 — createCharacter
 * Builds and returns a character object with name, rank, and power.
 * Example: createCharacter("Rock Lee", "Genin", 3000)
 *          → { name: "Rock Lee", rank: "Genin", power: 3000 }
 */
function createCharacter(name, rank, power) {
  return {
  name: name,
  rank: rank,
  power: power,
  };
  // TODO: Return an object with those three properties
};
console.log(createCharacter("Rock Lee", "Genin", 3000));
/**
 * FN 25 — characterSummary
 * Returns a one-line string from a character object.
 * Example: characterSummary({ name: "Kakashi", rank: "Jonin", power: 8200 })
 *          → "Kakashi | Rank: Jonin | Power: 8200"
 */
function characterSummary(character) {
  return `${character.name} | ${character.rank} | ${character.power}`;
  // TODO: Build and return the formatted summary string
};
console.log(characterSummary({ name: "Kakashi", rank: "Jonin", power: 8200 }));

/**
 * FN 26 — addTechnique
 * Pushes a new technique into a character's techniques array. Returns updated character.
 * Example: addTechnique({ name: "Naruto", techniques: ["Rasengan"] }, "Shadow Clone")
 *          → { name: "Naruto", techniques: ["Rasengan", "Shadow Clone"] }
 */
function addTechnique(character, newTechnique) {
  character.techniques.push(newTechnique);
  return character;
  // TODO: Push newTechnique into character.techniques, then return character
}
console.log(addTechnique({ name: "Naruto", techniques: ["Rasengan"] }, "Shadow Clone"))

/**
 * FN 27 — getCharacterKeys
 * Returns all the property names (keys) of a character object.
 * Example: getCharacterKeys({ name: "Luffy", power: 9999 }) → ["name", "power"]
 */
function getCharacterKeys(character) {
  return Object.keys(character);
  // TODO: Return an array of the object's keys
  // HINT: Object.keys()
}
console.log(getCharacterKeys({ name: "Luffy", power: 9999 }));
/**
 * FN 28 — mergeStats
 * Merges two stat objects into one.
 * Example: mergeStats({ attack: 50 }, { defense: 80 }) → { attack: 50, defense: 80 }
 */
function mergeStats(stats1, stats2) {
  return { ...stats1, ...stats2 };
  // TODO: Return a single merged object
  // HINT: { ...stats1, ...stats2 }
}
console.log(mergeStats({ attack: 50 }, { defense: 80 }))

// ─────────────────────────────────────────────
// 🧠 SECTION 5: CONDITIONALS — "The Decision Arc"
// ─────────────────────────────────────────────

/**
 * FN 29 — getRank
 * Returns a ninja rank based on power level.
 *   0–999     → "Genin"
 *   1000–2999 → "Chunin"
 *   3000–5999 → "Jonin"
 *   6000+     → "Kage"
 * Example: getRank(4500) → "Jonin"
 */
function getRank(powerLevel) {
  if(powerLevel < 1000) {
    return "Genin";
  } else if (powerLevel < 3000) {
    return "Chunin";
   } else if (powerLevel < 6000) {
    return "Jonin";
   } else {
    return "Kage";
   }
  // TODO: Use if/else if to return the correct rank string
};

console.log(getRank(3999));
/**
 * FN 30 — getArcType
 * Returns the story arc type based on power level.
 *   below 1000  → "Filler Arc"
 *   1000–4999   → "Training Arc"
 *   5000–8999   → "Tournament Arc"
 *   9000+       → "Final Boss Arc"
 * Example: getArcType(7200) → "Tournament Arc"
 */
function getArcType(powerLevel) {
  if(powerLevel < 1000) {
    return "Filler Arc";
  } else if (powerLevel < 5000) {
    return "Training Arc";
   } else if (powerLevel < 9000) {
    return "Tournament Arc";
   } else {
    return "Final Boss Arc";
   }
  // TODO: Use if/else if to return the correct arc string
}
console.log(getArcType(2000))
/**
 * FN 31 — canUseJutsu
 * Returns true if the character has enough chakra for the jutsu.
 * Example: canUseJutsu(100, 80) → true
 * Example: canUseJutsu(50, 80)  → false
 */
function canUseJutsu(currentChakra, jutsuCost) {
  if (currentChakra >= jutsuCost) {
    return true
  } else {
    return false
  }
  // TODO: Return a boolean comparison
}
console.log(canUseJutsu(200,199))
/**
 * FN 32 — battleResult
 * Compares two hero power levels and returns who wins (or if it's a draw).
 * Example: battleResult("Goku", 9001, "Vegeta", 8000) → "Goku wins!"
 * Example: battleResult("Goku", 9000, "Vegeta", 9000) → "It's a draw!"
 */
function battleResult(hero1, power1, hero2, power2) {
  if (power1 > power2) {
    return (`${hero1} is the winner`)
  } else if (power1 < power2) {
    return (`${hero2} is the winner`)
  } else {
    return (`We have a Draw!`)
  }
  // TODO: Compare powers with if/else if/else and return the right string
}
console.log(battleResult("Goku", 9000, "Vegeta", 9000));
/**
 * FN 33 — isLegendary
 * Returns true if the character's name is in the legendary list.
 * Legendary: ["Goku", "Naruto", "Luffy", "Ichigo", "Giorno"]
 * Example: isLegendary("Naruto") → true
 * Example: isLegendary("Mineta") → false
 */
function isLegendary(name) {
  const legendary = ["Goku", "Naruto", "Luffy", "Ichigo", "Giorno"];
  return legendary.includes(name);
  // TODO: Return true if name is in the legendary array
  // HINT: .includes()
}
console.log(isLegendary("Naruto"));
/**
 * FN 34 — getElementWeakness
 * Returns the counter-element for each type.
 *   "Fire"      → "Water"
 *   "Water"     → "Lightning"
 *   "Lightning" → "Earth"
 *   "Earth"     → "Wind"
 *   "Wind"      → "Fire"
 *   anything else → "No weakness found"
 * Example: getElementWeakness("Fire") → "Water"
 */
function getElementWeakness(element) {
  // TODO: Use if/else or a switch statement
}

/**
 * FN 35 — fightOrFlight
 * Decide what to do based on hero vs enemy power.
 *   hero power >= enemy power         → "Stand your ground!"
 *   hero power >= enemy power * 0.75  → "Proceed with caution."
 *   otherwise                         → "Run away!!"
 * Example: fightOrFlight(5000, 6000) → "Proceed with caution."
 */
function fightOrFlight(heroPower, enemyPower) {
  // TODO: Use if/else if/else and return the correct string
}

/**
 * FN 36 — gradeChakraControl
 * Returns a letter grade based on a chakra control score (0–100).
 *   90–100 → "S"
 *   75–89  → "A"
 *   60–74  → "B"
 *   50–59  → "C"
 *   below 50 → "F"
 * Example: gradeChakraControl(82) → "A"
 */
function gradeChakraControl(score) {
  // TODO: Use if/else if to return the letter grade
}


// ─────────────────────────────────────────────
// 🔁 SECTION 6: LOOPS — "Training Arc"
// ─────────────────────────────────────────────

/**
 * FN 37 — trainNTimes
 * Returns an array of n identical training messages.
 * Example: trainNTimes("Naruto", 3) → ["Naruto trains!", "Naruto trains!", "Naruto trains!"]
 */
function trainNTimes(hero, n) {
  // TODO: Loop n times, pushing the message each iteration, and return the array
}

/**
 * FN 38 — countdownToFight
 * Returns an array counting down from n to 1, with "FIGHT!" at the end.
 * Example: countdownToFight(3) → [3, 2, 1, "FIGHT!"]
 */
function countdownToFight(n) {
  // TODO: Loop from n down to 1, push each number, then push "FIGHT!"
}

/**
 * FN 39 — boostAllStats
 * Returns a new array with 10 added to every element.
 * Example: boostAllStats([100, 200, 300]) → [110, 210, 310]
 */
function boostAllStats(stats) {
  // TODO: Return a new array where each value is increased by 10
  // HINT: .map() or a for loop building a new array
}

/**
 * FN 40 — printTechniques
 * Returns a numbered string of techniques separated by newlines.
 * Example: printTechniques(["Rasengan", "Clone Jutsu"])
 *          → "1. Rasengan\n2. Clone Jutsu"
 */
function printTechniques(techniques) {
  // TODO: Build and return the numbered string
  // HINT: loop with index, build lines like "1. Rasengan", join with "\n"
}

/**
 * FN 41 — findTechniqueByLetter
 * Returns all techniques that start with the given letter.
 * Example: findTechniqueByLetter(["Rasengan", "Chidori", "Raikiri"], "R")
 *          → ["Rasengan", "Raikiri"]
 */
function findTechniqueByLetter(techniques, letter) {
  // TODO: Filter and return matching techniques
  // HINT: .filter(), .startsWith()
}


// ─────────────────────────────────────────────
// 🗺 SECTION 7: MAPS — "The Bingo Map"
// ─────────────────────────────────────────────

/**
 * FN 42 — createVillageMap
 * Creates a Map of village names → jutsu counts.
 * Use these entries:
 *   "Leaf" → 120, "Sand" → 85, "Mist" → 70, "Cloud" → 95, "Rock" → 60
 * Example: createVillageMap().get("Leaf") → 120
 */
function createVillageMap() {
  // TODO: Create a new Map, .set() each pair, and return the Map
  // HINT: const m = new Map(); m.set("Leaf", 120); ... return m;
}

/**
 * FN 43 — addToVillageMap
 * Adds a new village entry to an existing Map and returns the Map.
 * Example: addToVillageMap(myMap, "Rain", 40) → Map now includes "Rain" → 40
 */
function addToVillageMap(villageMap, villageName, jutsuCount) {
  // TODO: .set() the new entry and return the Map
}

/**
 * FN 44 — getVillageJutsu
 * Looks up a village's jutsu count. Returns "Village not found" if missing.
 * Example: getVillageJutsu(myMap, "Sand")  → 85
 * Example: getVillageJutsu(myMap, "Space") → "Village not found"
 */
function getVillageJutsu(villageMap, villageName) {
  // TODO: Check if the key exists (.has()), then .get() or return the fallback
}

/**
 * FN 45 — removeVillage
 * Removes a village from the Map and returns the updated Map.
 * Example: removeVillage(myMap, "Rock") → Map no longer contains "Rock"
 */
function removeVillage(villageMap, villageName) {
  // TODO: .delete() the entry and return the Map
}

/**
 * FN 46 — strongestVillage
 * Returns the name of the village with the most jutsu in the Map.
 * Example: strongestVillage(myMap) → "Leaf"
 */
function strongestVillage(villageMap) {
  // TODO: Loop through entries, track the highest count and its key
  // HINT: for (const [name, count] of villageMap) { ... }
}

/**
 * FN 47 — jutsuCountAbove
 * Returns an array of village names whose jutsu count exceeds the threshold.
 * Example: jutsuCountAbove(myMap, 80) → ["Leaf", "Cloud"]
 */
function jutsuCountAbove(villageMap, threshold) {
  // TODO: Loop the Map, collect names where count > threshold into an array
}

/**
 * FN 48 — mapToArray
 * Converts a village Map into an array of plain objects.
 * Example: mapToArray(myMap)
 *   → [{ village: "Leaf", jutsu: 120 }, { village: "Sand", jutsu: 85 }, ...]
 */
function mapToArray(villageMap) {
  // TODO: Loop through the Map, push { village: name, jutsu: count } for each entry
  // HINT: const result = []; for (const [name, count] of villageMap) { ... }
}


// ─────────────────────────────────────────────
// 🌟 SECTION 8: BOSS CHALLENGES — "The Final Arc"
// ─────────────────────────────────────────────

/**
 * FN 49 — buildTeamReport
 * Takes an array of character objects and returns a formatted team report string.
 *
 * Output format:
 *   === TEAM REPORT ===
 *   1. Naruto | Rank: Jonin | Power: 7500
 *   2. Sasuke | Rank: Jonin | Power: 8000
 *   Total Power: 15500
 *   MVP: Sasuke
 *
 * Example input: [{name:"Naruto", rank:"Jonin", power:7500}, {name:"Sasuke", rank:"Jonin", power:8000}]
 */
function buildTeamReport(team) {
  // TODO:
  // 1. Start with "=== TEAM REPORT ===\n"
  // 2. Loop through team, build each numbered line and add to the string
  // 3. Calculate total power with another loop
  // 4. Find the MVP (character with highest power) with another loop
  // 5. Append the totals and return the full string
}

/**
 * FN 50 — 🌟 BOSS: animeWordCount
 * Given a string of anime dialogue, return a Map where each unique word
 * maps to how many times it appears. Case-insensitive.
 *
 * Example: animeWordCount("Dattebayo dattebayo believe it")
 *   → Map { "dattebayo" → 2, "believe" → 1, "it" → 1 }
 */
function animeWordCount(dialogue) {
  // TODO:
  // 1. Lowercase the dialogue and split into an array of words
  // 2. Create a new Map
  // 3. Loop through words — if the word is already in the Map, increment its count
  //    otherwise add it with a value of 1
  // 4. Return the Map
  // HINT: wordMap.has(word) ? wordMap.set(word, wordMap.get(word) + 1) : wordMap.set(word, 1)
}


// ============================================================
// 🧪 TEST YOUR WORK — uncomment lines below and run!
// ============================================================
// console.log(greetHero("Naruto"));
// console.log(makeAnnouncement("Goku", "Kamehameha"));
// console.log(isOverNineThousand(9001));
// console.log(getRank(4500));
// console.log(getElementWeakness("Fire"));
// console.log(battleResult("Goku", 9001, "Vegeta", 8000));
// const vm = createVillageMap();
// console.log(getVillageJutsu(vm, "Sand"));
// console.log(strongestVillage(vm));
// console.log(jutsuCountAbove(vm, 80));
// console.log(animeWordCount("dattebayo dattebayo believe it"));
// ============================================================
