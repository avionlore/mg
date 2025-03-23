import { rollDice } from "@/logics/rollDice.js";
export function generateBlips(maxBlips, mechClassMaxTier) {
  let numberMechClasses = rollDice(mechClassMaxTier);
  let chosenMechClasses = [];

  for (let i = 0; i < numberMechClasses; i++) {
    chosenMechClasses[i] = rollDice(mechClassMaxTier);
  }

  return chosenMechClasses;
}
