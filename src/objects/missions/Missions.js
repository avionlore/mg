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
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 6 },
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
      1: MissionConstraints.ObjectsAreVisibleFromStart,
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
      5: {
        parameter: MissionParameters.ChanceOfActivatingBlipEveryRound,
        value: 50,
      },
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
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 5 },
    },
    missionConstraints: {
      1: MissionConstraints.PossibleMechClassesIncreased,
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
      2: { parameter: MissionParameters.MaxMechsOnBlip, value: 4 },
      3: { parameter: MissionParameters.NumberOfTargetMechs, value: 1 },
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
  Defense: {
    longName: "Defense Mission",
    missionDescription: "Defend object for a certain amount of time",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutObjectNumber,
      2: MissionSetupSteps.PlaceObjectsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DefendObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxObjectsOnMap, value: 4 },
      2: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      3: { parameter: MissionParameters.DamagePerShotOnObject, value: 25 },
      4: { parameter: MissionParameters.NumberOfRoundsToSurvive, value: 10 },
      5: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 50 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsTargetObjectsFirst,
      2: MissionConstraints.EnemyMechsAreAlwaysAggressive,
      3: MissionConstraints.ObjectsAreVisibleFromStart,
    },
  },
  Scanner: {
    longName: "Scan Objects Mission",
    missionDescription: "Scan all objects for a certain amount of time",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutObjectNumber,
      2: MissionSetupSteps.PlaceObjectsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.ScanAllObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxObjectsOnMap, value: 3 },
      2: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      3: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 33 },
      4: { parameter: MissionParameters.RoundsInRangeToCapture, value: 3 },
      5: { parameter: MissionParameters.RangeToCapture, value: 2 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsAreAlwaysAggressive,
      2: MissionConstraints.ObjectsAreVisibleFromStart,
    },
  },
  CaptureAll: {
    longName: "Capture All Objects Mission",
    missionDescription: "Capture all objects",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutObjectNumber,
      2: MissionSetupSteps.PlaceObjectsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.CaptureAllObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxObjectsOnMap, value: 3 },
      2: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      3: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 33 },
      4: { parameter: MissionParameters.RoundsInRangeToCapture, value: 3 },
      5: { parameter: MissionParameters.RangeToCapture, value: 2 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsAreAlwaysAggressive,
      2: MissionConstraints.ObjectsAreVisibleFromStart,
      3: MissionConstraints.EnemyMechsInObjectRangePreventCapture,
    },
  },
  CaptureSecretObject: {
    longName: "Discover and Capture one Object Mission",
    missionDescription: "Discover and Capture one object",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutObjectNumber,
      2: MissionSetupSteps.PlaceObjectsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.CaptureOneObject,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxObjectsOnMap, value: 5 },
      2: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      3: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 33 },
      4: { parameter: MissionParameters.RoundsInRangeToCapture, value: 3 },
      5: { parameter: MissionParameters.RangeToCapture, value: 2 },
      6: { parameter: MissionParameters.MinBlips, value: 3 },
      7: { parameter: MissionParameters.MaxBlips, value: 5 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsAreAggressiveWhileCapturing,
      2: MissionConstraints.EnemyMechsInObjectRangePreventCapture,
    },
  },
  DeliverData: {
    longName: "Deliver data chips through enemy territory",
    missionDescription: "Cross enemy territory and reach the opposing corner",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.ReachCorner,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 3 },
      2: { parameter: MissionParameters.MinBlips, value: 1 },
      3: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 25 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsAreAlwaysAggressive,
      2: MissionConstraints.PlayerMustSpawnInCorner,
      3: MissionConstraints.PossibleMechClassesIncreased,
    },
  },
  Decimate: {
    longName: "Decimate enemy forces",
    missionDescription: "Strike on enemy blip and decimate all mechs found",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.RevealAtLeastOneBlips,
      2: MissionGoals.DestroyAllEnemies,
      3: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 5 },
      2: { parameter: MissionParameters.MinBlips, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.NoConstraints,
    },
  },
  DestroyEnemyDropShip: {
    longName: "Destroy enemy drop ship",
    missionDescription: "Destroy enemy drop ship",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutBlips,
      2: MissionSetupSteps.PlaceBlipsOnMap,
      3: MissionSetupSteps.DiceOutObjectNumber,
      4: MissionSetupSteps.PlaceObjectsOnMap,
      5: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DestroyObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxBlips, value: 3 },
      2: { parameter: MissionParameters.MinBlips, value: 1 },
      3: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      4: { parameter: MissionParameters.MaxObjectsOnMap, value: 1 },
      5: { parameter: MissionParameters.MaxMechsOnBlip, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.ObjectsSpawnWithPPCTurrets,
    },
  },
  DestroyArtillery: {
    longName: "Destroy Artillery",
    missionDescription: "Go to each artillery and destroy all objects",
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
      4: { parameter: MissionParameters.MaxObjectsOnMap, value: 3 },
    },
    missionConstraints: {
      1: MissionConstraints.ObjectsAreVisibleFromStart,
      2: MissionConstraints.ObjectsAreArtillery,
    },
  },
  DefendArtillery: {
    longName: "Defense Mission (Artillery)",
    missionDescription: "Defend artillery for a certain amount of time",
    missionSetupSteps: {
      1: MissionSetupSteps.DiceOutObjectNumber,
      2: MissionSetupSteps.PlaceObjectsOnMap,
      3: MissionSetupSteps.PlacePlayerStart,
    },
    missionGoals: {
      1: MissionGoals.DefendObjects,
      2: MissionGoals.RetreatToShip,
    },
    missionParameters: {
      1: { parameter: MissionParameters.MaxObjectsOnMap, value: 4 },
      2: { parameter: MissionParameters.MinObjectsOnMap, value: 1 },
      3: { parameter: MissionParameters.DamagePerShotOnObject, value: 25 },
      4: { parameter: MissionParameters.NumberOfRoundsToSurvive, value: 10 },
      5: { parameter: MissionParameters.ChanceOfSpawningEnemyMech, value: 50 },
      6: { parameter: MissionParameters.MaxMechsOnBlip, value: 1 },
    },
    missionConstraints: {
      1: MissionConstraints.EnemyMechsTargetObjectsFirst,
      2: MissionConstraints.EnemyMechsAreAlwaysAggressive,
      3: MissionConstraints.ObjectsAreVisibleFromStart,
      4: MissionConstraints.ObjectsAreFriendlyArtillery,
      5: MissionConstraints.MechsAtObjectsAreFriendlies,
    },
  },
};
