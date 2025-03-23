import { rollDice } from "@/logics/rollDice.js";
import MechClasses from "@/objects/MechClasses";
export function generateBlips(maxBlips, mechClassMaxTier) {
  let numberMechClasses = rollDice(mechClassMaxTier);
  let chosenMechClasses = [];

  for (let i = 0; i < numberMechClasses; i++) {
    let selectedClassTier = rollDice(mechClassMaxTier);
    let mechClass = MechClasses[selectedClassTier];
    if (chosenMechClasses.includes(mechClass))
    {
      continue;
    }
    chosenMechClasses.push(mechClass);
  }

  return chosenMechClasses;
}
