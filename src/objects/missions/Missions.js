import MissionGoals from "./MissionGoals";
import MissionSetupSteps from "./MissionSetupSteps";
import MissionParameters from "./MissionParameters";
import MissionConstraints from "./MissionConstraints";

export default {
  Terminate: {
    longName: "Terminate",
    missionDescription: "Destroy all enemies",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.RevealAllBlips,
      2: MissionGoals.DestroyAllEnemies,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 5 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  Sabotage: {
    longName: "Sabotage",
    missionDescription: "Destroy target objects",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DestroyObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 5 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
      3: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      4: { parameter: MissionParameters.MaxObjectsOnMap, value: 2 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  Duel: {
    longName: "Duel",
    missionDescription: "Destroy all enemies",
    missionSetupSteps: {
      1: MissionSetupSteps.PlaceBlipsOnMap,
      2: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DestroyAllEnemies,
      2: MissionGoals.RevealAllBlips,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 1 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 4 },
      3: { parameter: MissionParameters.MinBlips, value: 1 },
      4: { parameter: MissionParameters.MinMechsOnBlip, value: 4 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  Recon: {
    longName: "Recon",
    missionDescription: "Recon all blips",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.RevealAllBlips,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 3 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  BountyHunter: {
    longName: "Bounty",
    missionDescription: "Destroy target mech",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DestroyTargetMech,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 5 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  Escort: {
    longName: "Escort Mission",
    missionDescription: "Escort objects to opposite corner",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
      4: MissionSetupSteps.DiceOutEscortStartingPosition,
    },
    missionGoals: {
      1: MissionGoals.DefendObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 4 },
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
      3: { parameter: MissionParameters.MaxEscortsOnMap, value: 3 },
      4: { parameter: MissionParameters.DamagePerShotOnEscort, value: 25 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsTargetEscortFirst,
    },
  },
};
