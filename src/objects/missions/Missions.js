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
      1: MissionConstraints.RevealAllBlips,
      2: MissionConstraints.DestroyAllEnemies,
    },
  },
};
