<template>
  <h2>Mech Spawner</h2>
  <MechClassSelect @emit-selected-mission-class="onSelectMissionClass" />
  <div v-if="showMech == 1" :key="componentKeyForReRendering">
    <p>{{ chosenMechs[0].mech.fullName }}</p>
    <p>{{ chosenMechs[0].mech.mechClass.fullName }}</p>
    <p>{{ chosenMechs[0].mech.cardUrl }}</p>
  </div>
</template>
<script>
import MechClassSelect from "./MechClassSelect.vue";
import MechClasses from "@/objects/MechClasses";
import { getMechs } from "@/logics/generateBlips.js";
import { ref } from "vue";

const selectedMissionClass = ref(1);
const componentKey = ref(0);

export default {
  name: "MechSpawner",
  components: {
    MechClassSelect,
  },
  data() {
    return {
      selectedMissionClass: selectedMissionClass,
      showMech: 0,
      componentKeyForReRendering: 0,
      highestPossibleMechClassObject: null,
      chosenMechs: null,
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
        true
      );
      console.log(this.chosenMechs);
    },
  },
};
</script>
<style></style>
