import { BELTS, CHAMPIONS } from "./src/data";
import { removeCorrespondingItemsByTerm } from "./src/lib";

const inputObject = {
  terms1: BELTS,
  terms2: CHAMPIONS,
  filterTerm: "Tag Team Champions",
};

const individualChampions = removeCorrespondingItemsByTerm(inputObject);

console.log("Individual Champions");
console.log(individualChampions);

console.log("Alphabetized Champions");
const sortedChampions = CHAMPIONS.toSorted();

console.log(sortedChampions);

console.log("CHAMPIONSHIPS array");

const TITLEHOLDERS = {
  title: BELTS,
  holder: CHAMPIONS,
};

console.log(TITLEHOLDERS);
