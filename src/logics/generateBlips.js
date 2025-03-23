import { rollDice } from "@/logics/rollDice.js";
import MechClasses from "@/objects/MechClasses";
import Mechs from "@/objects/Mechs";
import { Blip } from "@/objects/Blip";
import { Mech } from "@/objects/Mech";
export function generateBlips(maxBlips, mechClassMaxTier) {
  let blips = [];
  let mechClassesForMission = getMechClassesForMission(mechClassMaxTier)

  let numberOfBlips = rollDice(maxBlips);

  for (let i = 1;i<=numberOfBlips;i++)
  {
    let blip = new Blip();
    blip.blipNumber = i;
    blip.blipPosition = rollDice(9);
    blip.mechTier = mechClassesForMission[Math.floor(Math.random() * mechClassesForMission.length)];
    blip.mechsInBlip = getMechs(blip.mechTier);
    blips.push(blip);
  }

  return blips;
}

function getMechClassesForMission(mechClassMaxTier) {
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

function getMechs(mechClass)
{
  let possibleMechs = [];

  const mechs = Mechs;

  for(const [key, value] of Object.entries(mechs)) {
    if(value.mechClass.mechTier <= mechClass.mechTier)
      {
        let mechForBlip = new Mech();
        mechForBlip.mech = key;
        mechForBlip.position = rollDice(6);
        possibleMechs.push(mechForBlip);
      } 
  }

  return possibleMechs;
}
