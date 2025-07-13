<template>
  <h2>Mech Spawner</h2>
  <MechClassSelect @emit-selected-mission-class="onSelectMissionClass" />
  <p>
    Only from selected Mech Class:
    <input type="checkbox" id="checkbox" @click="onChecked" />
  </p>
  <div v-if="showMech == 1" :key="componentKeyForReRendering">
    <p>{{ chosenMechs[0].mech.fullName }}</p>
    <p>{{ chosenMechs[0].mech.mechClass.fullName }}</p>
    <p>{{ chosenMechs[0].position }}</p>
    <p><GridStart :positionNumber="rollDiceValue" /></p>
    <p>
      <a
        v-if="chosenMechs[0].mech.cardUrl !== ''"
        :href="chosenMechs[0].mech.cardUrl"
        >Link</a
      >
    </p>
  </div>
</template>
<script setup></script>
<script>
import MechClassSelect from "./MechClassSelect.vue";
import MechClasses from "@/objects/MechClasses";
import GridStart from "./GridStart.vue";
import { rollDice } from "@/logics/rollDice";

import { getMechs } from "@/logics/generateBlips.js";
import { ref } from "vue";

const selectedMissionClass = ref(1);
const componentKey = ref(0);

export default {
  name: "MechSpawner",
  components: {
    MechClassSelect,
    GridStart,
  },
  data() {
    return {
      selectedMissionClass: selectedMissionClass,
      showMech: 0,
      componentKeyForReRendering: 0,
      highestPossibleMechClassObject: null,
      chosenMechs: null,
      checked: false,
      rollDiceValue: 0,
    };
  },
  methods: {
    onSelectMissionClass(value) {
      this.selectedMissionClass = value;
      this.showMech = 1;
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
      let classKey = Object.keys(MechClasses).find(
        (key) => key == this.selectedMissionClass
      );
      this.highestPossibleMechClassObject = MechClasses[classKey];
      this.chosenMechs = getMechs(
        this.highestPossibleMechClassObject,
        1,
        this.selectedMissionClass,
        0,
        this.checked
      );
      this.rollDiceValue = rollDice(9);
    },
    onChecked() {
      componentKey.value += 1;
      this.componentKeyForReRendering = componentKey.value;
      if (this.checked == false) this.checked = true;
      else this.checked = false;
    },
  },
};
</script>
<style></style>
