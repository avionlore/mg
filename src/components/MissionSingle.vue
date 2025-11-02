<script setup>
import { computed, defineProps } from "vue";
import Maps from "@/objects/Maps.js";
import MapParameters from "@/objects/MapParameters.js";
import { rollDice } from "@/logics/rollDice.js";
import GridStart from "./GridStart.vue";
import { useDifficultyStore } from "@/stores/Difficulty";
import Missions from "@/objects/missions/Missions";

const props = defineProps({
  missionNumber: Number,
  highestPossibleMechClass: Number,
});

const difficultyFromStore = useDifficultyStore();

const computedChosenMission = computed(() => {
  let missionKeys = Object.keys(Missions);

  //return Missions.CaptureSecretObject;
  return Missions[missionKeys[Math.floor(Math.random() * missionKeys.length)]];
});

const computedMissionMap = computed(() => {
  let mapSide = " (" + rollDice(2) + ")";
  return (
    Maps.map[Math.floor(Math.random() * Maps.map.length)].mapName + mapSide
  );
});

const computedMapParameter = computed(() => {
  if (rollDice(3) == 1) {
    return MapParameters.mapParameter[0];
  }
  return MapParameters.mapParameter[
    Math.floor(Math.random() * MapParameters.mapParameter.length)
  ];
});

const computedMissionDifficulty = computed(() => {
  let missionDifficultyAdded = 0;

  missionDifficultyAdded += computedMapParameter.value.parameterDifficulty;
  missionDifficultyAdded += difficultyFromStore.get(props.missionNumber);

  if (missionDifficultyAdded <= 5) {
    missionDifficultyAdded = rollDice(20) + 10;
  }

  missionDifficultyAdded = Math.floor(missionDifficultyAdded / 10);

  if (missionDifficultyAdded <= 0) {
    missionDifficultyAdded = 1;
  }

  return missionDifficultyAdded;
});
</script>
<script>
import BlipIntel from "./BlipIntel.vue";
import MissionType from "./MissionType.vue";
export default {
  name: "MissionSingle",
  components: {
    BlipIntel,
    MissionType,
  },
};
</script>
<template>
  <div class="mission">
    <p>Mission # {{ props.missionNumber }}</p>
    <p>Mission Map: {{ computedMissionMap }}</p>
    <p>Map Parameter: {{ computedMapParameter.parameterName }}</p>
    <p>Mission Type: <MissionType :chosenMission="computedChosenMission" /></p>
    <p>Difficulty: {{ computedMissionDifficulty }}</p>
    <p>Player Start:<GridStart :positionNumber="rollDice(9)" /></p>
    <BlipIntel
      :highestPossibleMechClass="props.highestPossibleMechClass"
      :missionNumber="props.missionNumber"
      :chosenMission="computedChosenMission"
    />
  </div>
</template>
<style>
.mission {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(128, 128, 128, 0.5);
}
</style>
