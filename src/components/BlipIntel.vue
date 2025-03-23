<script setup>
import MechClasses from "@/objects/MechClasses.js";
import { defineProps, ref } from "vue";
import { generateBlips } from "@/logics/generateBlips.js";
const props = defineProps(["highestPossibleMechClass"]);
const showIntel = ref(false);

const classKey = Object.keys(MechClasses).find(
  (key) => key == props.highestPossibleMechClass
);
const highestPossibleMechClassObject = MechClasses[classKey];
const chosenMechClasses = generateBlips(
  2,
  highestPossibleMechClassObject.mechTier
);
</script>
<script>
export default {
  name: "BlipIntel",
};
</script>
<template>
  <button @click="showIntel = true">Show Intel</button>
  <div v-if="showIntel">
    <p>Max Mech Class ({{ highestPossibleMechClassObject.fullName }})</p>
    <p v-for="mechTier in chosenMechClasses" :key="mechTier">{{ mechTier.fullName }}</p>
  </div>
</template>
<style></style>
