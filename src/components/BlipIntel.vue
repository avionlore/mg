<script setup>
import MechClasses from "@/objects/MechClasses.js";
import GridStart from "./GridStart.vue";
import { defineProps, ref, computed } from "vue";
import { generateBlips } from "@/logics/generateBlips.js";
const props = defineProps(["highestPossibleMechClass"]);
const showIntel = ref(false);

const classKey = Object.keys(MechClasses).find(
  (key) => key == props.highestPossibleMechClass
);
const highestPossibleMechClassObject = MechClasses[classKey];
const computedBlips = computed(() => {
  return generateBlips(
  2,
  highestPossibleMechClassObject.mechTier
);
}
);

const computedDifficultyForAllBlips = computed(() => {
  let difficulty = 0;
  computedBlips.value.forEach(blip => {
    blip.mechsInBlip.forEach(mech => {
      difficulty += mech.mech.mechClass.baseDifficultyModifier;
    })
  });
  return difficulty;
});


</script>
<script>
export default {
  name: "BlipIntel",
  data() {
    return {
      chosenBlipNumber: null
    };
  },
  methods: {
    showBlip(blipNumber) {
      this.chosenBlipNumber = blipNumber;
    }
  }
};
</script>
<template>
  <button @click="showIntel = true">Show Intel</button>
  <div v-if="showIntel">
    <p>Max Mech Class ({{ highestPossibleMechClassObject.fullName }})</p>
    <p>Added Difficulty: {{ computedDifficultyForAllBlips }}</p>
    <div class="blip" v-for="blip in computedBlips" :key="blip">
      <button @click="showBlip(blip.blipNumber)">Show Blip #{{ blip.blipNumber }}</button>
      <div v-if="chosenBlipNumber == blip.blipNumber">      
        <p>#{{ blip.blipNumber }}</p>
        <GridStart :positionNumber="blip.blipPosition"/>
        <div class="mech_blip" v-for="mech in blip.mechsInBlip" :key="mech">
          <p>{{mech.mech.fullName}}</p>
          <p>{{mech.position}}</p>
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
