<script setup>
import MechClasses from "@/objects/MechClasses.js";
import GridStart from "./GridStart.vue";
import Missions from "@/objects/missions/Missions";
import MissionParameters from "@/objects/missions/MissionParameters";
import { defineProps, ref, computed } from "vue";
import { generateBlips } from "@/logics/generateBlips.js";
import { useDifficultyStore } from "@/stores/Difficulty";
import { rollDice } from "@/logics/rollDice";

const difficultyStore = useDifficultyStore();

const props = defineProps({
  chosenMission: Missions,
  highestPossibleMechClass: Number,
  missionNumber: Number,
});

const computedNumberOfBlipsForThisMission = computed(() => {
  let numberOfBlips = 2;
  for (const [key, value] of Object.entries(
    props.chosenMission.missionParameters
  )) {
    if (value.parameter == MissionParameters.MaxBlips) {
      numberOfBlips = rollDice(value.value);
    }
  }
  return numberOfBlips;
});

const computedNumberOfMechs = computed(() => {
  let numberOfMechs = 1;
  for (const [key, value] of Object.entries(
    props.chosenMission.missionParameters
  )) {
    if (value.parameter == MissionParameters.MaxMechsOnBlip) {
      numberOfMechs = rollDice(value.value);
    }
  }
  return numberOfMechs;
});

const showIntel = ref(false);

const classKey = Object.keys(MechClasses).find(
  (key) => key == props.highestPossibleMechClass
);
const highestPossibleMechClassObject = MechClasses[classKey];
const computedBlips = computed(() => {
  return generateBlips(
    computedNumberOfBlipsForThisMission.value,
    highestPossibleMechClassObject.mechTier,
    computedNumberOfMechs.value
  );
});

const computedDifficultyForAllBlips = computed(() => {
  let difficulty = 0;
  computedBlips.value.forEach((blip) => {
    blip.mechsInBlip.forEach((mech) => {
      difficulty += mech.mech.mechClass.baseDifficultyModifier;
    });
  });
  difficultyStore.add(props.missionNumber, difficulty);
  return difficulty;
});
</script>
<script>
export default {
  name: "BlipIntel",
  data() {
    return {
      chosenBlipNumber: null,
    };
  },
  methods: {
    showBlip(blipNumber) {
      this.chosenBlipNumber = blipNumber;
    },
  },
};
</script>
<template>
  <button @click="showIntel = true">Show Intel</button>
  <div v-show="showIntel">
    <p>Max Mech Class ({{ highestPossibleMechClassObject.fullName }})</p>
    <p>Added Difficulty: {{ computedDifficultyForAllBlips }}</p>
    <div class="blip" v-for="blip in computedBlips" :key="blip">
      <button @click="showBlip(blip.blipNumber)">
        Show Blip #{{ blip.blipNumber }}
      </button>
      <div v-show="chosenBlipNumber == blip.blipNumber">
        <p>#{{ blip.blipNumber }}</p>
        <GridStart :positionNumber="blip.blipPosition" />
        <div class="mech_blip" v-for="mech in blip.mechsInBlip" :key="mech">
          <p>{{ mech.mech.fullName }}</p>
          <p>{{ mech.mech.mechClass.fullName }}</p>
          <p>{{ mech.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.blip {
  border: 1px solid #999;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(128, 128, 128, 0.5);
  overflow: hidden;
}
.mech_blip {
  border: 1px solid #555;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgba(128, 128, 128, 0.5);
  float: left;
}
</style>
