import { rollDice, rollDiceRange } from "@/logics/rollDice.js";
import MechClasses from "@/objects/MechClasses";
import Mechs from "@/objects/Mechs";
import MissionParameters from "@/objects/missions/MissionParameters";
import { Blip } from "@/objects/Blip";
import { Mech } from "@/objects/Mech";
import MissionConstraints from "@/objects/missions/MissionConstraints";

export function generateBlips(mission, mechClassMaxTier) {
  let maxBlips = getNumberOfBlipsFromMission(mission);
  let mechCount = getNumberOfMechsForMission(mission);
  let numberOfTargetMechs = getNumberOfTargetMechs(mission);
  let numberOfObjectsOnMap = getNumberOfObjectsOnMap(mission);

  let blips = [];
  mechClassMaxTier = adjustMaxTierOnMissionParameters(
    mission,
    mechClassMaxTier
  );
  let mechClassesForMission = getMechClassesForMission(mechClassMaxTier);

  let numberOfBlips = rollDice(maxBlips);

  for (let i = 1; i <= numberOfBlips; i++) {
    let blip = new Blip();
    blip.blipNumber = i;
    blip.blipPosition = rollDice(9);
    blip.mechTier =
      mechClassesForMission[
        Math.floor(Math.random() * mechClassesForMission.length)
      ];
    blip.mechsInBlip = getMechs(
      blip.mechTier,
      mechCount,
      mechClassMaxTier,
      numberOfTargetMechs
    );
    if (i <= numberOfObjectsOnMap) {
      blip.hasObject = true;
    }
    blip.showAllObjectsFromStart = showAllObjectsOnMap(mission);
    blips.push(blip);
  }

  return blips;
}

function adjustMaxTierOnMissionParameters(mission, mechClassMaxTier) {
  for (const [, value] of Object.entries(mission.missionConstraints)) {
    if (value == MissionConstraints.PossibleMechClassesIncreased) {
      mechClassMaxTier++;
    }
  }
  if (mechClassMaxTier > 4) {
    mechClassMaxTier = 4;
  }
  return mechClassMaxTier;
}

function showAllObjectsOnMap(mission) {
  for (const [, value] of Object.entries(mission.missionConstraints)) {
    if (value == MissionConstraints.ObjectsAreVisibleFromStart) {
      return true;
    }
  }
  return false;
}

function getNumberOfTargetMechs(mission) {
  for (const [, value] of Object.entries(mission.missionParameters)) {
    if (value.parameter == MissionParameters.NumberOfTargetMechs) {
      return value.value;
    }
  }
  return 0;
}

function getNumberOfObjectsOnMap(mission) {
  let minValue = 0;
  let maxValue = 0;
  let returnValue = 0;
  for (const [, value] of Object.entries(mission.missionParameters)) {
    if (value.parameter == MissionParameters.MinObjectsOnMap) {
      minValue = value.value;
    }
    if (value.parameter == MissionParameters.MaxObjectsOnMap) {
      maxValue = value.value;
    }
  }
  returnValue = rollDiceRange(minValue, maxValue);
  return returnValue;
}

function getNumberOfMechsForMission(mission) {
  let numberOfMechs = 1;
  let min = 0;
  let max = 3;
  for (const [, value] of Object.entries(mission.missionParameters)) {
    if (value.parameter == MissionParameters.MaxMechsOnBlip) {
      max = value.value;
    }
    if (value.parameter == MissionParameters.MinMechsOnBlip) {
      min = value.value;
    }
  }
  numberOfMechs = rollDiceRange(min, max);
  return numberOfMechs;
}

function getNumberOfBlipsFromMission(mission) {
  let numberOfBlips = 2;
  for (const [, value] of Object.entries(mission.missionParameters)) {
    if (value.parameter == MissionParameters.MaxBlips) {
      numberOfBlips = rollDice(value.value);
    }
  }
  return numberOfBlips;
}

function getMechClassesForMission(mechClassMaxTier) {
  let numberMechClasses = rollDice(mechClassMaxTier);
  let chosenMechClasses = [];

  for (let i = 0; i < numberMechClasses; i++) {
    let selectedClassTier = rollDice(mechClassMaxTier);
    let mechClass = MechClasses[selectedClassTier];
    if (chosenMechClasses.includes(mechClass)) {
      continue;
    }
    chosenMechClasses.push(mechClass);
  }

  return chosenMechClasses;
}

function getMechs(mechClass, mechCount, mechClassMaxTier, numberOfTargetMechs) {
  let possibleMechs = [];

  const mechs = Mechs;

  for (const [, value] of Object.entries(mechs)) {
    if (value.mechClass.mechTier <= mechClass.mechTier) {
      let mechForBlip = new Mech();
      mechForBlip.mech = value;
      mechForBlip.position = rollDice(6);
      possibleMechs.push(mechForBlip);
    }
  }

  let possibleMechsFromHighestTier = [];
  for (const [, value] of Object.entries(mechs)) {
    if (value.mechClass.mechTier == mechClassMaxTier) {
      let mechForBlip = new Mech();
      mechForBlip.mech = value;
      mechForBlip.position = rollDice(6);
      possibleMechsFromHighestTier.push(mechForBlip);
    }
  }

  let chosenMechs = [];
  for (let i = 0; i < mechCount; i++) {
    if (rollDice(2) == 1) {
      chosenMechs.push(
        possibleMechsFromHighestTier[
          Math.floor(Math.random() * possibleMechsFromHighestTier.length)
        ]
      );
      continue;
    }
    chosenMechs.push(
      possibleMechs[Math.floor(Math.random() * possibleMechs.length)]
    );
  }

  if (numberOfTargetMechs > 0 && chosenMechs.length > 0) {
    for (const [, mech] of chosenMechs.entries()) {
      if (rollDice(2) == 1) {
        mech.target = 1;
        break;
      }
    }
  }

  return chosenMechs;
}
