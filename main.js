import { BELTS } from "./src/data";

const beltsWithoutVacant = BELTS.filter((belts) => belts !== "Vacant Title");

console.log(beltsWithoutVacant);
