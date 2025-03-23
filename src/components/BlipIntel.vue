<script setup>
import MechClasses from "@/objects/MechClasses.js";
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
    <div v-for="blip in computedBlips" :key="blip">
      <p>#{{ blip.blipNumber }}</p>
      <p>{{ blip.mechTier.fullName }}</p>
      <p>{{ blip.blipPosition }}</p>
      <div v-for="mech in blip.mechsInBlip" :key="mech">
        <p>{{mech.mech}}</p>
        <p>{{mech.position}}</p>
      </div>
      </div>
  </div>
</template>
<style></style>
