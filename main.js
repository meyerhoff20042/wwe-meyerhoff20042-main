import { BELTS, CHAMPIONS } from "./src/data";
import { removeCorrespondingItemsByTerm } from "./src/lib";

const inputObject = {
  terms1: BELTS,
  terms2: CHAMPIONS,
  filterTerm: "Tag Team Champions",
};

const individualChampions = removeCorrespondingItemsByTerm(inputObject);

console.log(individualChampions);
