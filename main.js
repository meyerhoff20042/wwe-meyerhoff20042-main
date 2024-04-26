import { BELTS } from "./src/data";

const beltsWithoutVacant = BELTS.filter(
  (belts) => !belts.includes("Vacant Title"),
);

console.log(beltsWithoutVacant);
